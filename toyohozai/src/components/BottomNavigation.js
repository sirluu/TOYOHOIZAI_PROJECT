import React from 'react';
// icons
import { FaHome, FaPhoneAlt, FaUser, FaList, FaSearch } from 'react-icons/fa'; // Assuming you're using react-icons for icons
// import { HomeIcon, BookmarkIcon, UserIcon, MagnifyingGlassIcon, PhoneIcon } from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";
// i18n language support
import { useTranslation } from 'react-i18next';

import '../components/css/BottomNavigation.css'

export default function BottomNavigation() {
    const { t } = useTranslation(); // import translations from i18n

    // navlinks to use react router doms active class -> better UX -> active link is styled
    return (
        <section className='btnav pt-4 pb-12 px-10 fixed bottom-0 left-0 z-10 bg-primaryBlack w-full lg:hidden shadow-[0px_-1px_15px_-5px_rgba(0,0,0,1)]'>

            <ul className='text-black list-none flex items-center justify-between gap-10 md:justify-center md:gap-32'>
                <li className="h-7 w-7 cursor-pointer">
                    <NavLink to="/" className="flex1 flex flex-col items-center gap-1.5">
                        <FaHome />
                        <p className='text-xs text-primaryGray-500'>{t("bottomnav.home")}</p>
                    </NavLink>
                </li>

                <li className="h-7 w-7 cursor-pointer">
                    <NavLink to="/search" className="flex1 flex flex-col items-center gap-1.5">
                        <FaSearch />
                        <p className='text-xs text-primaryGray-500'>{t("bottomnav.cocktails")}</p>
                    </NavLink>
                </li>
                <li className="h-7 w-7 cursor-pointer">
                    <NavLink to="/demo" className="fab floating-icon flex1 flex flex-col items-center gap-1.5">
                        <FaPhoneAlt />
                    </NavLink>
                    <p className='fab-text text-xs text-primaryGray-500'>{t("bottomnav.home")}</p>

                </li>

                <li className="h-7 w-7 cursor-pointer">
                    <NavLink to="/likes" className="flex1 flex flex-col items-center gap-1.5">
                        <FaList />
                        <p className='text-xs text-primaryGray-500'>{t("bottomnav.favourites")}</p>
                    </NavLink>
                </li>

                <li className="h-7 w-7 cursor-pointer">
                    <NavLink to="/profile" className="flex1 flex flex-col items-center gap-1.5">
                        <FaUser />
                        <p className='text-xs text-primaryGray-500'>{t("bottomnav.profile")}</p>
                    </NavLink>
                </li>
            </ul>
        </section>
    )
}
