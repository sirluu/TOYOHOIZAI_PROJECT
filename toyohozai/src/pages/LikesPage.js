// ✨ SAVED COCKTAILS / LIKEPAGE
// if we had more time for the project, implement a local db so no user login here is required
// on user signup transfer local data
// todo

import React from "react";
import LikesPageFavorites from "../components/LikesPageFavorites";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig.js";
import video from "../assets/video/video1.webm";
import { useTranslation } from "react-i18next";
import Spinanimation from "../components/Spinanimation";
import Login from "../components/Login";

export default function LikesPage() {
  const { t } = useTranslation(); // import copy translations from i18n
  const [user, loading] = useAuthState(auth); // get auth userdata - auth found in firebase config
  
  // if user state is loading -> logging in, return loading anim
  if (loading) return <Spinanimation />;

  // if no user show onboarding + login
  if (!user)
    return (
      <section className="fadeInAnimation">
        <div className="video bg-primaryBlack z-[1000] lg:z-[1]">
          <video
            src={video}
            loop
            autoPlay
            // playsinline
            muted
            type="video/webm"
            className="videovideo"
          ></video>
        </div>
        <div className="mt-16 mb-32 relative px-6 lg:px-56 xl:px-[35rem] lg:mt-32 sm:px-20 sm:mt-24">
          <h1 className="text-3xl font-displayBook leading-tight text-center">
            <div
              className="textspan"
              dangerouslySetInnerHTML={{ __html: t("likespage.login.title") }}
            ></div>
          </h1>
          <p className="text-base text-primaryGray-500 font-thin leading-relaxed mt-4 line-clamp-4 text-center mb-20">
            {t("likespage.login.body")}
          </p>

          <Login />
        </div>
      </section>
    );

  // if user is logged in show page
  if (user)
    return (
      <section className="mt-20 mb-32 px-6 lg:px-14 fadeInAnimation">
        <div className="lg:flex flex-col lg:flex-col-reverse lg:gap-12 mt-20 mb-32 lg:mt-36 hidden">
          <div className="mt-5 lg:mt-0 lg:flex lg:flex-col lg:gap-5">
            <h3 className="text-xl font-medium lg:font-displayBook lg:text-6xl">
              {t("likespage.subtitle")}
            </h3>

            <p className="text-base text-primaryGray-500 font-thin leading-relaxed mt-2 lg:mt-0 lg:text-xl">
              {t("likespage.body")}
            </p>
          </div>
        </div>
        <LikesPageFavorites />
      </section>
    );
}
