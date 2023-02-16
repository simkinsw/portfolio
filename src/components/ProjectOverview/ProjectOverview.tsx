import { FC, useState } from "react"
import { Project } from "../../types/project";
import ProjectPreviewList from "./ProjectPreviewList";
import ProjectTabs from "./ProjectTabs";

type ProjectOverviewProps = {
    projects: Project[];
}

const ProjectOverview: FC<ProjectOverviewProps> = ({ projects }) => {
    const [curTab, setCurTab] = useState("All");

    const filteredProjects = curTab === "All" ? projects : projects.filter((project) => project.types.includes(curTab))

    return (
        <div className="mx-4 mt-4 xl:mt-20 xl:w-3/4">
            <h1 className="text-2xl mb-2 font-bold xl:text-center xl:text-4xl">
                My Projects
            </h1>
            <div className="xl:w-full xl:h-[650px] bg-white py-4 rounded-md shadow-md">
                <ProjectTabs onClick={setCurTab} curTab={curTab} />
                <ProjectPreviewList projects={filteredProjects} />
            </div>
        </div>
    );
}

export default ProjectOverview;