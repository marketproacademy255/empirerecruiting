import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  viewBox: "0 0 24 24",
  className: "icon",
  ...props,
});

export const SearchIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4.3-4.3" />
  </svg>
);

export const TargetIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.5" />
  </svg>
);

export const UsersIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
    <circle cx="17" cy="9" r="2.4" />
    <path d="M15.5 14.2c2.4.3 4.2 2.3 4.2 5" />
  </svg>
);

export const PresentationIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 4h18" />
    <path d="M4.5 4v11a1 1 0 0 0 1 1h5.5l-1.5 4" />
    <path d="M19.5 4v11a1 1 0 0 1-1 1h-5.5l1.5 4" />
    <path d="M8.5 12l2.7-2.8L13 11l3-3.2" />
  </svg>
);

export const UserCheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="9.5" cy="8.5" r="3.5" />
    <path d="M3.5 20c0-3.5 2.7-5.8 6-5.8s6 2.3 6 5.8" />
    <path d="M16.5 12.5l1.7 1.7 3-3.2" />
  </svg>
);

export const ZapIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
  </svg>
);

export const GraduationCapIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5z" />
    <path d="M6.5 10.7v4.3c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.3" />
    <path d="M20.5 8.5v6" />
  </svg>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l7.5 3v5.2c0 4.6-3.2 7.9-7.5 9.8-4.3-1.9-7.5-5.2-7.5-9.8V6z" />
    <path d="M9 12.2l2.1 2.1L15.3 10" />
  </svg>
);

export const LockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path d="M8 11V7.5a4 4 0 0 1 8 0V11" />
  </svg>
);

export const GlobeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.8 2.5 4.3 5.6 4.3 9s-1.5 6.5-4.3 9c-2.8-2.5-4.3-5.6-4.3-9s1.5-6.5 4.3-9z" />
  </svg>
);

export const PhoneIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5.5 4h2.8l1.2 3.6-1.8 1.6a10.5 10.5 0 0 0 5.1 5.1l1.6-1.8 3.6 1.2v2.8c0 1-.9 1.7-1.8 1.5-3.3-.6-6.4-2.3-8.8-4.7-2.4-2.4-4.1-5.5-4.7-8.8C3.8 4.9 4.5 4 5.5 4z" />
  </svg>
);

export const MailIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="3" y="5.5" width="18" height="13" rx="2" />
    <path d="M4 7l8 6 8-6" />
  </svg>
);

export const MapPinIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 21s7-6.4 7-11.5A7 7 0 0 0 5 9.5C5 14.6 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.4" />
  </svg>
);

export const MenuIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3.5 6.5h17" />
    <path d="M3.5 12h17" />
    <path d="M3.5 17.5h17" />
  </svg>
);

export const CloseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 5l14 14" />
    <path d="M19 5L5 19" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 12h16" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

export const CheckCircleIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 12.3l2.5 2.5L16 9.5" />
  </svg>
);

export const SendIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 3 3 10.5l7 3 3 7z" />
    <path d="M21 3 13.5 20.5l-3.5-7-7-3.5z" />
  </svg>
);

export const TelegramIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 4.5 3.5 11.2c-.9.35-.9 1.65.02 1.98l4.1 1.45 1.6 5c.2.6 1 .74 1.4.24l2.1-2.6 4.3 3.2c.7.52 1.7.14 1.87-.72l3-14.4c.16-.8-.6-1.5-1.4-1.85z" />
    <path d="M8.7 14.4l9.3-7.6-8 8.4" />
  </svg>
);

export const DatabaseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <ellipse cx="12" cy="6" rx="7.5" ry="3" />
    <path d="M4.5 6v12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
    <path d="M4.5 12c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3" />
  </svg>
);
