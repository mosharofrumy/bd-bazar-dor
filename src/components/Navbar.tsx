
import Link from "next/link";
import { getCategories } from "@/lib/bazardor-api";
import CategoryNav from "./CategoryNav";

export default async function Navbar() {
  const categories = await getCategories();

  const today = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="min-w-0">
          <Link
            href="/"
            className="block text-xl font-bold text-green-800 sm:text-2xl"
          >
            🛒 বাজার দর
          </Link>

          <p className="mt-1 text-xs text-gray-600 sm:text-sm">
            {today}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/signin"
            className="px-2 py-2 text-sm font-medium text-green-800 hover:text-green-600 sm:px-3"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="btn btn-sm border-green-700 bg-green-700 text-white hover:border-green-800 hover:bg-green-800 sm:btn-md"
          >
            সাইন আপ
          </Link>
        </div>
      </div>

      <CategoryNav categories={categories} />
    </header>
  );
}
