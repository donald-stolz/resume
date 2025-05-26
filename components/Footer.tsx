"use client";

import { SocialIcon } from "react-social-icons";
import type { Basics } from "@/lib/resume-types";

interface FooterProps {
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

export function Footer({ basics }: FooterProps) {
  return (
    <footer className="w-full py-6 border-t bg-gradient-to-r from-purple-50 to-pink-50">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="ml-4 text-sm text-gray-600">
          {new Date().getFullYear()} {basics.name}
        </p>
        <div className="flex gap-2 mr-2">
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
                style={{ width: 32, height: 32 }}
              />
            );
          })}
        </div>
      </div>
    </footer>
  );
}
