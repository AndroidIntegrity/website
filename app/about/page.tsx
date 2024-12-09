import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About | Android Integrity Alliance'
}

export default function About() {
    return (
        <main className="py-3 px-5 flex flex-col lg:flex-row">
            <section className="flex flex-col items-center lg:items-start justify-center pt-8 pb-3 flex-1">
                <h1 className="text-4xl font-bold mb-4 text-center lg:text-start">About Us</h1>
                <p className="text-lg md:text-lg lg:text-base text-center lg:text-start">We are the Android Integrity Alliance, a group of passionate individuals aiming to promote a fair and open Android operating system. Our mission is to support all types of users and ensure that everyone can enjoy the full potential of their device.</p>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 px-4 sm:px-8 flex-1">
            <Card>
                <CardHeader>
                    <CardTitle>Our Team</CardTitle>
                    <CardDescription>We are a small collective of people passionate about customizing our Android devices and using them to their full extent.</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Our Mission</CardTitle>
                    <CardDescription>Our goal is to rework the Play Integrity system to be inclusive of rooted devices, while maintaining and supporting security.</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Our Vision</CardTitle>
                    <CardDescription>We aim to be a trusted third party to vet custom ROMs, in order to assist Google in being inclusive, yet secure.</CardDescription>
                </CardHeader>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Get Involved</CardTitle>
                    <CardDescription>Join us in our mission to promote a fair and open Android operating system. Sign our petition and follow us on social media.</CardDescription>
                </CardHeader>
            </Card>
        </section>
        </main>
    )
}