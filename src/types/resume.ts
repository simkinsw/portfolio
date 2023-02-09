export type Resume = {
    header: ResumeHeaderInfo;
    skills: SkillsInfo;
    workExperience: WorkExperienceInfo;
    education: EducationInfo;
    projects: ProjectInfo;
}

export type ResumeHeaderInfo = {
    name: string;
    position: string;
    contactInfoList: ContactInfo[]
};

export type ContactInfo = {
    text: string;
    icon: string;
    link?: string;
};

export type SectionHeaderInfo = {
    icon: string;
    text: string;
}

export type SkillsInfo = {
    header: SectionHeaderInfo;
    categories: Category[]
}

export type Category = {
    name: string;
    entries: string[];
}

export type WorkExperienceInfo = {
    header: SectionHeaderInfo;
    workExperience: WorkExperienceEntryInfo[];
}

export type WorkExperienceEntryInfo = {
    title: string;
    company: string;
    location: string;
    date: string;
    responsibilities: string[ ];
}

export type EducationInfo = {
    header: SectionHeaderInfo;
    education: EducationEntryInfo[];
}

export type EducationEntryInfo = {
    name: string;
    degrees: string[]
    date: string
}

export type ProjectInfo = {
    header: SectionHeaderInfo;
    projects: ProjectEntryInfo[];
}

export type ProjectEntryInfo = {
    name: string;
    githubLink?: string;
    projectLink?: string;
    description: string;
    bullets: string[];
}

