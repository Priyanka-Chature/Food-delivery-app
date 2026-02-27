import React from 'react';
import { assets } from '../assets/assets';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#030712] text-[#d9d9d9] px-10 pt-1">
     
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 md:py-8">
        
        <div
          className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12
            gap-y-8 sm:gap-y-10
            gap-x-6 sm:gap-x-10 lg:gap-x-8 xl:gap-x-10
          "
        >
          
          <div
            className="
              flex flex-col gap-4
              items-center text-center
              sm:items-start sm:text-left
              lg:col-span-6 lg:pr-6 lg:border-r lg:border-white/10
            "
          >
           
            <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-sm w-max">
              <Logo />
            </div>

            <p className="text-sm leading-6 text-[#cfcfcf] max-w-prose">
              Tasty meals delivered fast. Fresh ingredients, curated menus, and seamless ordering for your everyday cravings.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition"
                aria-label="Facebook"
              >
                <img src={assets.facebook_icon} alt="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition"
                aria-label="Twitter/X"
              >
                <img src={assets.twitter_icon} alt="Twitter" className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition"
                aria-label="LinkedIn"
              >
                <img src={assets.linkedin_icon} alt="LinkedIn" className="h-5 w-5" />
              </a>
            </div>
          </div>

          
          <nav
            className="
              flex flex-col gap-3
              items-center text-center
              sm:items-start sm:text-left
              lg:col-span-3 lg:px-6 lg:border-r lg:border-white/10
            "
            aria-label="Footer navigation"
          >
            <h2 className="text-white text-sm font-semibold tracking-wide">COMPANY</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="/" className="hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/delivery" className="hover:text-white transition">Delivery</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              </li>
            </ul>
          </nav>

          
          <div
            className="
              flex flex-col gap-3
              items-center text-center
              sm:items-start sm:text-left
              lg:col-span-3 lg:pl-6
            "
          >
            <h2 className="text-white text-sm font-semibold tracking-wide">GET IN TOUCH</h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+12124567890" className="hover:text-white transition">+1‑212‑456‑7890</a>
              </li>
              <li>
                <a href="mailto:contact@foodypaws.com" className="hover:text-white transition wrap-break-word ">
                  contact@foodypaws.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="mt-6 md:mt-8 border-white/10" />

        {/* Bottom bar */}
        <div className="mt-3 md:mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-[12px] text-[#bdbdbd]">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} FoodyPaws.com — All rights reserved.
          </p>
          <div className="flex items-center justify-center sm:justify-end gap-3">
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <span className="opacity-40">•</span>
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="/cookies" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;