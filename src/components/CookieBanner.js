"use client";

import Link from "next/link";
import { getLocalStorage, setLocalStorage } from "../lib/storageHelper";
import { useStat, useEffect, useState } from "react";

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    window.gtag("consent", "update", {
      analytics_storage: newValue
    });

    setLocalStorage("cookie_consent", cookieConsent);
  }, [cookieConsent]);

  return (
    <div
      className={`fixed inset-0 bg-slate-700 bg-opacity-90 ${
        cookieConsent != null ? "hidden" : "flex"
      }`}
    >
      <div className="fixed bottom-0 left-0 right-0 flex flex-row gap-6 md:flex-col md:text-center items-center justify-between px-8 py-8 bg-light">
        <Link href="/cookies">
          <p className="md:text-sm">
            This website uses cookies to improve user experience. By using our
            website you consent to all cookies in accordance with our
            <span className=" font-bold text-blue-800"> Cookie Policy</span>
          </p>
        </Link>
        <div className="flex gap-2">
          <button
            className="px-5 py-2 md:text-sm text-dark rounded-md border-gray-900"
            onClick={() => setCookieConsent(false)}
          >
            Decline
          </button>
          <button
            className="bg-dark md:text-sm px-3 py-2 text-light rounded-lg"
            onClick={() => setCookieConsent(true)}
          >
            Allow Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
