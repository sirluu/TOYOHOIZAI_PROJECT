// Inspiration from https://www.youtube.com/watch?v=RywyU436qpQ
// And docs source https://www.i18next.com + https://react.i18next.com
// NPMs https://www.npmjs.com/package/i18next + https://www.npmjs.com/package/react-i18next

// Fix nested translations in react https://stackoverflow.com/questions/57691637/react-i18next-why-arent-my-nested-keys-working 

import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import i18nextBe from 'i18next-http-backend';

// import json for language copy from 📁 ./lng/
import en from "./lng/en.json";
import da from "./lng/da.json";

i18next.use(i18nextBe).use(initReactI18next).init({
    resources: {
        
        en: {
            translation: en,
        },

        da: {
            translation: da,
        }
    },
    fallbackLng: 'en',
    // 🌐 get language from local storage, so it's cached when user reloads site -> better UX
    lng: localStorage.getItem("lng") || "en",
});

export default i18next;
