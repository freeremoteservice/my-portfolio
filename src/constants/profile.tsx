// src/constants/profileConstants.ts
import { ProfileData } from "@/types/main";
import { Calendar, Clock, Github, MapPin } from "lucide-react";

// Create the constant with the defined type
export const PROFILE_DATA: ProfileData = {
    name: "Joshua Talltree",
    headline: ["24/7", "REMOTE"],
    avatarSrc: "/assets/images/me-avatar.png",
    info: [
        {
            label: "Location",
            value: "Tomsk, Russian",
            icon: <MapPin />,
        },
        {
            label: "Birth Date",
            value: "3rd, August, 1994",
            icon: <Calendar />,
        },
        {
            label: "Time Zone",
            value: "EST time zone",
            icon: <Clock />,
        },
        {
            label: "GitHub",
            value: "freeremoteservice",
            icon: <Github />,
            link : 'https://github.com/freeremoteservice'
        },
    ],
};
