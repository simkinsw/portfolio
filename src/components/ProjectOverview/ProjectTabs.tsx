import { FC } from "react";

type ProjectTabsProps = {
    onClick: (tab: string) => void;
    curTab: string;
}

type TabProps = {
    text: string;
    curTab: string;
    onClick: (tab: string) => void;
}

const ProjectTabs: FC<ProjectTabsProps> = ({ curTab, onClick }) => {
    return (
        <ul className="flex gap-2 border-b pb-4 px-2 md:px-4 lg:gap-8">
            <ProjectTab text="All" curTab={curTab} onClick={onClick} />
            <ProjectTab text="React-JS" curTab={curTab} onClick={onClick} />
            <ProjectTab text="Java/Python" curTab={curTab} onClick={onClick} />
            <ProjectTab text="Misc." curTab={curTab} onClick={onClick} />
        </ul>
    );
}

const ProjectTab: FC<TabProps> = ({ text, curTab, onClick }) => {
    const active = (curTab === text);

    return (
        <li 
            className={
                `cursor-pointer px-2 py-1 uppercase rounded-md md:text-lg md:px-4 lg:px-8 
                ${active && "bg-emerald-400 text-white"}
                ${!active && "text-gray-600"}
                `
            }
            onClick={() => onClick(text)}
        >
            {text}
        </li>
    )
}

export default ProjectTabs;