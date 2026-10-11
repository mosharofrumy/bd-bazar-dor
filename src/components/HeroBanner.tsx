
import Image from "next/image";

const HeroBanner = () => {
  const today = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Dhaka",
  }).format(new Date());

  return (
    <section className="relative mb-10 overflow-hidden rounded-3xl border border-green-100 bg-linear-to-r from-green-50 via-white to-emerald-50">
      <div className="grid items-center gap-6 md:grid-cols-2 md:gap-4">
        <div className="relative z-10 px-5 py-7 sm:px-8 sm:py-10 lg:px-10">
          <p className="mb-4 inline-flex rounded-full border border-green-200 bg-white px-3 py-1.5 text-xs font-semibold text-green-800 sm:text-sm">
            {today}
          </p>

          <h1 className="max-w-xl text-2xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
            বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং
            দামের পরিবর্তন এক জায়গায়।
          </p>

          <a
            href="#all-products"
            className="btn mt-6 border-green-700 bg-green-700 px-6 text-white hover:border-green-800 hover:bg-green-800"
          >
            সব পণ্য দেখুন
            <span aria-hidden="true"> →</span>
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md px-5 pb-6 md:max-w-none md:px-4 md:py-6 lg:px-8">
          <Image
            src="/bazar-hero.png"
            alt="বাজারের নিত্যপ্রয়োজনীয় পণ্য"
            width={640}
            height={480}
            priority
            className="h-auto max-h-80 w-full object-contain md:max-h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
