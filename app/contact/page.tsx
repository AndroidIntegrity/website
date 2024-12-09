import Image from "next/image";
import Link from "next/link";

type ContactMethod = {
  name: string;
  icon: string;
  displayUrl: string;
  link: string;
};

const contactMethods: ContactMethod[] = [
  {
    name: "Bluesky",
    icon: "/bluesky.svg",
    displayUrl: "@androidintegrity.bsky.social",
    link: "https://androidintegrity.bsky.social",
  },
  {
    name: "Email",
    icon: "/gmail.svg",
    displayUrl: "admin@androidintegrity.org",
    link: "mailto:admin@androidintegrity.org",
  },
  {
    name: "Press Email",
    icon: "/gmail.svg",
    displayUrl: "press@androidintegrity.org",
    link: "mailto:press@androidintegrity.org",
  },
  {
    name: "Discord",
    icon: "/discord.svg",
    displayUrl: "discord.gg/androidintegrity",
    link: "https://discord.gg/androidintegrity",
  },
  {
    name: "Telegram Group",
    icon: "/telegram.svg",
    displayUrl: "@AndIntAllianceChat",
    link: "https://t.me/AndIntAllianceChat",
  },
  {
    name: "Telegram Channel",
    icon: "/telegram.svg",
    displayUrl: "@AndIntAlliance",
    link: "https://t.me/AndIntAlliance",
  },
  {
    name: "Tiktok",
    icon: "/tiktok.svg",
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
            >
              <Image
                src={contactMethod.icon}
                width={32}
                height={32}
                alt={contactMethod.name}
                className=""
              />
              <h2 className="text-xl font-semibold">Bluesky</h2>
              <Link href={contactMethod.link} className="underline text-blue-500" target="_blank">{contactMethod.displayUrl}</Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
