import Link from "next/link";
import { Metadata } from "next";
import { SiBluesky, SiGmail, SiDiscord, SiTelegram, SiTiktok } from "@icons-pack/react-simple-icons";
import type { IconType } from "@icons-pack/react-simple-icons";
import React from "react";

export const metadata: Metadata = {
  title: "Contact Us | Android Integrity Alliance",
}

type ContactMethod = {
  name: string;
  icon: IconType;
  displayUrl: string;
  link: string;
};

const contactMethods: ContactMethod[] = [
  {
    name: "Bluesky",
    icon: SiBluesky,
    displayUrl: "@androidintegrity.bsky.social",
    link: "https://androidintegrity.bsky.social",
  },
  {
    name: "Email",
    icon: SiGmail,
    displayUrl: "admin@androidintegrity.org",
    link: "mailto:admin@androidintegrity.org",
  },
  {
    name: "Press Email",
    icon: SiGmail,
    displayUrl: "press@androidintegrity.org",
    link: "mailto:press@androidintegrity.org",
  },
  {
    name: "Discord",
    icon: SiDiscord,
    displayUrl: "discord.gg/androidintegrity",
    link: "https://discord.gg/androidintegrity",
  },
  {
    name: "Telegram Group",
    icon: SiTelegram,
    displayUrl: "@AndIntAllianceChat",
    link: "https://t.me/AndIntAllianceChat",
  },
  {
    name: "Telegram Channel",
    icon: SiTelegram,
    displayUrl: "@AndIntAlliance",
    link: "https://t.me/AndIntAlliance",
  },
  {
    name: "Tiktok",
    icon: SiTiktok,
    displayUrl: "@android.integrity",
    link: "https://tiktok.com/@android.integrity",
  },
];

export default function Contact() {
  return (
    <main className="px-5 py-3">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12 mt-20">
          {contactMethods.map((contactMethod) => (
            <div
              key={contactMethod.link}
              className="flex flex-col items-center"
            >{React.createElement(contactMethod.icon, { size: "32" ,className: "mb-4 fill-blue-500" })}
              <h2 className="text-xl font-semibold">{contactMethod.name}</h2>
              <Link href={contactMethod.link} className="underline text-muted-foreground" target="_blank">{contactMethod.displayUrl}</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
