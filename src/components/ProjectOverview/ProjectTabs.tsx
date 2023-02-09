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
        <ul className="flex gap-8 border-b pb-4">
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
                `cursor-pointer text-gray-600 px-8 py-1 uppercase rounded-md text-lg
                ${active && "bg-emerald-300 text-white"}
                `
            }
            onClick={() => onClick(text)}
        >
            {text}
        </li>
    )
}

export default ProjectTabs;