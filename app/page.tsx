import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestion, faPen } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <main className="px-5 py-3">
      <section className="flex flex-col items-center justify-center space-y-4 pt-8 sm:pt-16 pb-3 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          We're the Android Integrity Alliance
        </h2>
        <p className="text-lg md:text-xl lg:text-base text-center">
          We are fighting for a fair and open Android operating system,
          supporting all types of users.
        </p>
        <Link
          href="https://www.change.org/p/stop-google-from-limiting-custom-roms"
          className={buttonVariants({ variant: "default" })}
        >
          <FontAwesomeIcon icon={faPen} />
          Sign the Petition
        </Link>
      </section>
      <section className="flex flex-col md:flex-row items-center pt-32 px-4 md:px-8 lg:px-16">
        <div className="w-full flex flex-1 mb-6 items-center justify-center">
          <Image
            src={"/android.svg"}
            width={0}
            height={0}
            sizes="100vw"
            className="w-3/5 max-w-full h-auto"
            alt="Android logo"
          />
        </div>
        <div className="w-full flex flex-1 flex-col">
          <h2 className="text-4xl font-bold pb-6">What we want</h2>
          <p className="text-lg pb-8">
            Our goal is to rework the Play Integrity system to be inclusive of
            rooted devices, while maintaining and supporting security. We aim to
            be a trusted third party to vet custom ROMs, in order to assist
            Google in being inclusive, yet secure.
          </p>
          <Link
            href={"/about"}
            className={`${buttonVariants({ variant: "default" })} self-start`}
          >
            Learn More
          </Link>
        </div>
      </section>
      <section className="flex flex-col md:flex-row items-center pt-32 px-4 md:px-8 lg:px-16">
        <div className="w-full flex flex-1 flex-col">
          <h2 className="text-4xl font-bold pb-6">Who we are</h2>
          <p className="text-lg pb-8">
            We are a small collective of people passionate about customizing our
            Android devices and using them to their full extent. We have all
            been affected by Google's monopolistic practices, especially in
            regards to Play Integrity.
          </p>
          <Link
            href={"/team"}
            className={`${buttonVariants({ variant: "default" })} self-start`}
          >
            About our Team
          </Link>
        </div>
        <div className="w-full flex pt-10 md:pt-0 flex-1 mb-3 items-center justify-center">
          <Image
            src={"/team.svg"}
            alt="An illustration of people working together"
            width={0}
            height={0}
            className="w-3/5 max-w-full h-auto"
          />
        </div>
      </section>
    </main>
  );
}
