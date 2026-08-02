const MAX_LENGTH = 500;

function clean(value) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, MAX_LENGTH);
}

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ ok: false, error: "Method not allowed" }),
    };
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const bitrixWebhookUrl = process.env.BITRIX_WEBHOOK_URL;

  if (!token || !chatId) {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: "Server sozlanmagan" }),
    };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: "Noto'g'ri so'rov" }),
    };
  }

  const name = clean(data.name);
  const phone = clean(data.phone);
  const vacancy = clean(data.vacancy);
  const message = clean(data.message);

  if (!name || !phone || !vacancy) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: "Majburiy maydonlar to'ldirilmagan" }),
    };
  }

  const text = [
    "🆕 Yangi ariza — Empire Recruiting",
    "",
    `👤 Ism: ${name}`,
    `📞 Telefon: ${phone}`,
    `💼 Yo'nalish: ${vacancy}`,
    message ? `📝 Izoh: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  // Telegram va Bitrix24 CRM'ga bir vaqtda yuboriladi.
  // Bitrix24 xatoligi Telegramga yuborishga xalaqit bermasligi uchun
  // alohida try/catch bilan ajratilgan.
  const sendToBitrix = async () => {
    if (!bitrixWebhookUrl) return;

    try {
      const res = await fetch(`${bitrixWebhookUrl.replace(/\/$/, "")}/crm.lead.add.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: {
            TITLE: `Sayt arizasi — ${vacancy}`,
            NAME: name,
            PHONE: [{ VALUE: phone, VALUE_TYPE: "WORK" }],
            COMMENTS: message || undefined,
            SOURCE_ID: "WEB",
            SOURCE_DESCRIPTION: "Landing page — Ariza qoldirish",
          },
          params: { REGISTER_SONET_EVENT: "Y" },
        }),
      });

      const result = await res.json();
      if (result.error) {
        console.error("Bitrix24 lead error:", result.error_description || result.error);
      }
    } catch (err) {
      console.error("Bitrix24 so'rovi muvaffaqiyatsiz:", err);
    }
  };

  try {
    const [telegramRes] = await Promise.all([
      fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      }),
      sendToBitrix(),
    ]);

    const result = await telegramRes.json();

    if (!result.ok) {
      return {
        statusCode: 502,
        body: JSON.stringify({ ok: false, error: "Telegramga yuborilmadi" }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: "Server xatosi" }),
    };
  }
};
