"use client";

import Image from "next/image";
import logo from "../public/logo.svg";
import illustration from "../public/images/illustration-dashboard.png";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import React, { useState } from "react";

function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [errorCopy, setErrorCopy] = useState<string>("");
  const [hasErrors, setHasErrors] = useState<boolean>(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorCopy("Whoops! It looks like you forgot to add your email");
      setHasErrors(true);
    } else if (!validateEmail(email)) {
      setErrorCopy("Please Provide a valid email address");
      setHasErrors(true);
    } else {
      setErrorCopy("");
      setHasErrors(false);
      console.log("Email has been submitted");
    }
  };

  return (
    <main>
      <div className="flex flex-col justify-center items-center gap-7 h-screen">
        <div>
          <Image src={logo} alt="logo" />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-slate-400 md:text-4xl text-xl text-center">
            We are launching{" "}
            <span className="font-semibold text-black">soon!</span>
          </h1>
          <p className="text-center md:text-base text-xs">
            Subscribe and get notified
          </p>
        </div>
        <div className="w-2/3">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="w-full grid md:grid-cols-3 md:grid-rows-2 grid-rows-3 md:px-36 gap-2">
              <input
                className={`col-span-2 rounded-full px-5 py-2 text-sm w-full outline-none focus:border-blue-500 ${
                  hasErrors
                    ? "border-2 border-red-400"
                    : "border border-chPaleBlue"
                }`}
                type="text"
                placeholder="Your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className="bg-chBlue rounded-full px-8 py-2 text-sm text-white font-light shadow-[0px_5px_10px_0px_#c2d3ff] hover:opacity-80 transition col-span-2 md:col-start-3"
                type="submit"
              >
                Notify Me
              </button>
              {hasErrors && (
                <p className="col-span-2 row-start-2 md:text-[12px] text-[11px] italic text-red-500 md:ml-5 mx-auto">
                  {errorCopy}
                </p>
              )}
            </div>
          </form>
        </div>
        <div>
          <Image src={illustration} alt="illustration dashboard" width={600} />
        </div>
        <div className="flex flex-row gap-2">
          <FaFacebookF
            className="border rounded-full px-2 py-2 cursor-pointer text-[#4f7df3] hover:bg-chBlue hover:text-white transition"
            size={35}
          />
          <FaTwitter
            className="border rounded-full px-2 py-2 cursor-pointer text-[#4f7df3] hover:bg-chBlue hover:text-white transition"
            size={35}
          />
          <FaInstagram
            className="border rounded-full px-2 py-2 cursor-pointer text-[#4f7df3] hover:bg-chBlue hover:text-white transition"
            size={35}
          />
        </div>
        <div>
          <p className="text-[12px] text-slate-400">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
