import React from "react";
import {
  SiGithub,
  SiBluesky,
  SiTelegram,
  SiDiscord,
} from "@icons-pack/react-simple-icons";

const Footer = () => {
  return (
    <footer className="mt-8 py-4 px-2 sm:px-4 md:px-8 lg:px-16 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 fixed bottom-0 w-full bg-gray-800 text-white p-4">
      <div className="text-left">
        <p>Code open source on Github</p>
        <p className="text-sm">Licensed under GPL-2.0</p>
      </div>
      <div className="flex space-x-4">
        <a
          href="https://github.com/AndroidIntegrity"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <SiGithub className="text-2xl" />
        </a>
        <a
          href="https://bsky.app/profile/androidintegrity.bsky.social"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <SiBluesky className="text-2xl" />
        </a>
        <a
          href="https://t.me/AndIntAlliance"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <SiTelegram className="text-2xl" />
        </a>
        <a
          href="https://discord.gg/androidintegrity"
          className="hover:text-gray-400 transition duration-300 ease-in-out"
        >
          <SiDiscord className="text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
