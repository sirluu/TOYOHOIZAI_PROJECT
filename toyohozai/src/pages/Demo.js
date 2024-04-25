import { React } from "react";
import { useTranslation } from "react-i18next";
import CategoryCarousel from "../components/CategoryCarousel";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

export default function Demo() {
  const { t } = useTranslation(); // import copy translations from i18n

  return (
    <section className="mt-20 mb-32 lg:mt-36 fadeInAnimation">
      <ScrollToTopBtn />
      <div className="px-5 w-full lg:px-14 flex flex-col lg:flex-col-reverse lg:gap-12">
        <div className="relative flex">
          <div className="flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 absolute ml-3" />
          </div>
          <input
            className="placeholder-primaryGray-700 border-[1px] border-primaryGray-700 focus:border-primaryYellow w-full py-3 rounded-xl bg-primaryGray-900 bg-opacity-20 pl-12 focus-within:text-primaryWhite"
            type="text"
            id="search"
            name="search"
            placeholder={t("searchpage.searchPlaceholder")}
          />
        </div>
      </div>

      <CategoryCarousel />
    </section>
  );
}
