
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Category } from "@/types/product";

type CategoryNavProps = {
  categories: Category[];
};

export default function CategoryNav({
  categories,
}: CategoryNavProps) {
  const pathname = usePathname();

  return (
    <nav
      aria-label="পণ্যের ক্যাটাগরি"
      className="border-t border-green-100"
    >
      <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-2">
        {categories.map((category) => {
          const isActive =
            pathname === `/category/${category.slug}`;

          return (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              aria-current={isActive ? "page" : undefined}
              className={`btn btn-sm shrink-0 border ${
                isActive
                  ? "border-green-700 bg-green-700 text-white hover:bg-green-800"
                  : "border-green-100 bg-white text-green-800 hover:bg-green-100"
              }`}
            >
              <span aria-hidden="true">{category.icon}</span>
              {category.nameBn}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
