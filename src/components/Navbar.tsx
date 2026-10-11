
// import Link from "next/link";
// import { getCategories } from "@/lib/bazardor-api";
// import CategoryNav from "./CategoryNav";

// export default async function Navbar() {
//   const categories = await getCategories();

//   const today = new Intl.DateTimeFormat("bn-BD", {
//     weekday: "long",
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     timeZone: "Asia/Dhaka",
//   }).format(new Date());

//   return (
//     <header className="sticky top-0 z-50 border-b border-green-100 bg-white/95 shadow-sm backdrop-blur">
//       <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
//         <div className="min-w-0">
//           <Link
//             href="/"
//             className="block text-xl font-bold text-green-950 sm:text-2xl"
//           >
//             🛒 বাজার দর
//           </Link>

//           <p className="mt-1 text-xs text-gray-600 sm:text-sm">
//             {today}
//           </p>
//         </div>

//         <div className="flex shrink-0 items-center gap-2">
//           <Link
//             href="/signin"
//             className="px-2 py-2 text-sm font-medium text-green-800 hover:text-green-600 sm:px-3"
//           >
//             সাইন ইন
//           </Link>

//           <Link
//             href="/signup"
//             className="btn btn-sm border-green-700 bg-green-700 text-white hover:border-green-800 hover:bg-green-800 sm:btn-md"
//           >
//             সাইন আপ
//           </Link>
//         </div>
//       </div>

//       <CategoryNav categories={categories} />
//     </header>
//   );
// }

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
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
        {/* Logo, Title and Dynamic Date */}
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3 no-underline"
          aria-label="বাজার দর - হোম পেজ"
        >
          {/* Cart Logo */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-800 shadow-sm">
            <ShoppingCart className="h-6 w-6 text-white" />
          </div>

          {/* Title and Date */}
          <div className="min-w-0">
            <h1 className="text-xl font-bold leading-tight text-green-950 sm:text-2xl">
              বাজার দর
            </h1>

            <p className="mt-1 text-xs text-gray-500 sm:text-sm">
              {today}
            </p>
          </div>
        </Link>

        {/* Sign In and Sign Up */}
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
