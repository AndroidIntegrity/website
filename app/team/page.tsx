import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Team | Android Integrity Alliance",
};

type TeamMember = {
  name: string;
  role: string;
  username: string;
};

const team: TeamMember[] = [
  {
    name: "Alessandro Murru",
    role: "Founder",
    username: "Alphexoed",
  },
  {
    name: "Aidan Honor",
    role: "System Admin",
    username: "ihatenodejs",
  },
  {
    name: "Lucas Gabriel",
    role: "Developer",
    username: "lucmsilva651",
  },
  {
    name: "Blade0",
    role: "Designer",
    username: "",
  },
  {
    name: "Lucy Kushinada",
    role: "Developer",
    username: "LucyKushinada00",
  }
];

function getInitials(member: TeamMember) {
  return member.name
    .split(" ")
    .map((name) => name[0])
    .join("");
}

export default function Team() {
  return (
    <main className="px-5 py-3">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center mt-10">
          The AIA Team
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col items-center">
              <Avatar className="w-24 h-24 mt-4 mb-4">
                <AvatarImage src={`https://www.github.com/${member.username}.png`} />
                <AvatarFallback>{getInitials(member)}</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
