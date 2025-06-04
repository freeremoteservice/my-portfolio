import { ContactInfo, Experience, PersonalInfo, ProjectComplete, Skills, Testimonial, TotalFollowers } from "@/types/main";


// Define constants for data
export const PROJECT_COMPLETE: ProjectComplete = {
    title: "Project Complete",
    value: 100,
    completedProjects: "100+",
    description: "Completed 100+ Projects",
    strokeColor: "#17C964"
};

export const TOTAL_FOLLOWERS: TotalFollowers = {
    title: "Total Followers",
    followers: "2.5K",
    imageSrc: "/assets/images/hearts.png",
    imageAlt: "hearts"
};

export const PERSONAL_INFO: PersonalInfo = {
    fullName: "Yaroslav Gorlov",
    headline: [
        "Senior Software Engineer",
        "Frontend Developer",
        "Backend Developer",
        "Full Stack Developer"
    ]
};

export const EXPERIENCE: Experience = {
    years: 12,
    label: "y"
};

export const SKILLS: Skills = {
    count: 32
};

export const TESTIMONIAL: Testimonial = {
    title: "Testimonial",
    imageSrc: "/assets/images/testimonial.png",
    imageAlt: "testimonial"
};

export const CONTACT_INFO: ContactInfo[] = [
    {
        src: "/assets/images/discord.png",
        alt: "discord",
        link : "https://discord.gg/fzRfanCQ"
    },
    {
        src: "/assets/images/telegram.png",
        alt: "telegram",
        link : "https://t.me/freeremoteservice"
    },
    {
        src: "/assets/images/skype.png",
        alt: "skype",
        link : "https://join.skype.com/invite/pxvSBydAmJ1P",
    },
    {
        src: "/assets/images/google.png",
        alt: "google",
        link : "freeremoteservice@gmail.com"
    }
];
