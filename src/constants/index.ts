import { FaDiscord, FaGlobe, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const NAV_ITEMS = [
  { label: "ARCHIVE", href: "#hero" },
  { label: "Legends", href: "#about" },
  { label: "Vault", href: "#nexus" },
  { label: "Origins", href: "#story" },
  { label: "Ascend", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://discord.gg/seismic",
    icon: FaDiscord,
  },
  {
    href: "https://x.com/SeismicSys",
    icon: FaXTwitter,
  },
  {
    href: "https://www.linkedin.com/company/seismicsys/",
    icon: FaLinkedin,
  },
  {
    href: "https://seismic.systems",
    icon: FaGlobe,
  },
] as const;

export const VIDEO_LINKS = {
  feature1: "/videos/feature-1.mp4",
  feature2: "/videos/feature-2.mp4",
  feature3: "/videos/feature-3.mp4",
  feature4: "/videos/feature-4.mp4",
  feature5: "/videos/feature-5.mp4",
  hero1: "/videos/hero-1.mp4",
  hero2: "/img/contact-2.webp",
  hero3: "/videos/hero-3.mp4",
  hero4: "/videos/hero-4.mp4",
};
