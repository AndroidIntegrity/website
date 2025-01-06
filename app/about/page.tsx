import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Metadata } from "next";

type headerData = {
  title: string;
  description: string;
};

const headerData: headerData[] = [
  {
    title: "Our Team",
    description:
      "We are a small collective of people passionate about customizing our Android devices and using them to their full extent.",
  },
  {
    title: "Our Mission",
    description:
      "Our goal is to rework the Play Integrity system to be inclusive of rooted devices, while maintaining and supporting security.",
  },
  {
    title: "Our Vision",
    description:
      "We aim to be a trusted third party to vet custom ROMs, in order to assist Google in being inclusive, yet secure.",
  },
  {
    title: "Get Involved",
    description:
      "Join us in our mission to promote a fair and open Android operating system. Sign our petition and follow us on social media.",
  },
];

export const metadata: Metadata = {
  title: "About | Android Integrity Alliance",
};

export default function About() {
  return (
    <main className="px-5 py-3 w-screen">
      <section className="flex flex-col items-center justify-center space-y-4 pt-8 sm:pt-16 pb-3">
        <h1 className="text-4xl font-bold mb-4 self-center text-center lg:text-start">
          About Us
        </h1>
        <p className="text-lg md:text-lg lg:text-base text-center md:w-1/2">
          We are the Android Integrity Alliance, a group of passionate
          individuals aiming to promote a fair and open Android operating
          system. Our mission is to support all types of users and ensure that
          everyone can enjoy the full potential of their device.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-8 px-4 sm:px-8">
        {headerData.map((data) => (
          <Card key={data.title}>
            <CardHeader>
              <CardTitle>{data.title}</CardTitle>
              <CardDescription>{data.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>
    </main>
  );
}
