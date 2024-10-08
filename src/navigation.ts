import { createSharedPathnamesNavigation } from "next-intl/navigation";

const locales = ["en", "az", "ru"] as const;

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales })