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
        <div className="mt-20 w-3/4">
            <header className="text-center text-3xl mb-4">
                Projects
            </header>
            <div className="w-full h-full bg-white p-4 rounded-md shadow-md">
                <ProjectTabs onClick={setCurTab} curTab={curTab} />
                <ProjectPreviewList projects={filteredProjects} />
            </div>
        </div>
    );
}

export default ProjectOverview;