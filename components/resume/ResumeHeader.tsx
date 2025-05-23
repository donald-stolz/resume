"use client";

import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Basics } from "@/lib/resume-types";
import { SocialIcon } from "react-social-icons";

interface ResumeHeaderProps {
  basics: Basics;
}

const getNetworkForProfile = (network: string): string => {
  switch (network) {
    case "Facebook":
      return "facebook";
    case "Twitter":
      return "x";
    case "LinkedIn":
      return "linkedin";
    case "Instagram":
      return "instagram";
    case "Github":
      return "github";
    default:
      return "globe";
  }
};

export function ResumeHeader({ basics }: ResumeHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 md:p-8 border-b">
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <Avatar className="h-24 w-24 border-2 border-white shadow-md">
          <AvatarImage
            src={basics.image || "/placeholder.svg?height=96&width=96"}
            alt={`Professional headshot of ${basics.name}, ${basics.label}`}
          />
          <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
            {basics.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold gradient-text">{basics.name}</h1>
          <p className="text-xl text-gray-600 mt-1">{basics.label}</p>
          <div className="mt-3 flex flex-wrap gap-3 justify-center md:justify-start">
            {basics.email && (
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <Mail className="h-4 w-4 mr-1 text-purple-500" />
                <a href={`mailto:${basics.email}`} className="hover:underline">
                  {basics.email}
                </a>
              </div>
            )}
            {basics.phone && (
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <Phone className="h-4 w-4 mr-1 text-pink-500" />
                <a href={`tel:${basics.phone}`} className="hover:underline">
                  {basics.phone}
                </a>
              </div>
            )}
            {basics.location && (
              <div className="flex items-center text-sm text-gray-600 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <MapPin className="h-4 w-4 mr-1 text-purple-500" />
                <span>
                  {basics.location.city}, {basics.location.region}
                </span>
              </div>
            )}
          </div>
          <div className="mt-3 flex gap-2 justify-center md:justify-start">
            {basics.profiles?.map((profile, index) => {
              const network = getNetworkForProfile(profile.network);
              return (
                <SocialIcon
                  key={index}
                  network={network}
                  url={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                  style={{ width: 40, height: 40 }}
                />
              );
            })}
          </div>
        </div>
      </div>
      {basics.summary && (
        <div className="mt-6">
          <h2 className="text-lg font-semibold mb-2 flex items-center">
            <Sparkles className="h-5 w-5 mr-2 text-purple-500" />
            <span>About Me</span>
          </h2>
          <p className="text-gray-700 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-gray-100">
            {basics.summary}
          </p>
        </div>
      )}
    </div>
  );
}
