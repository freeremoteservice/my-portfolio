// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Github, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Joshua Talltree",
    headline: ["24/7", "REMOTE"],
    avatarSrc: "/assets/images/me.png",
    info: [
        {
            label: "Location",
            value: "Chicago, TX",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "March 16, 1979",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "CDT time zone",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "talltreeDev",
            icon: <Github />,
            link : 'https://github.com/talltreeDev'
        },
    ],
};
