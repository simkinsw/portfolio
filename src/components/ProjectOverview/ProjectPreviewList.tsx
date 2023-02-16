import { FC } from "react"
import { Project } from "../../types/project"
import ProjectPreview from "./ProjectPreview"

type ProjectPreviewListProps = {
    projects: Project[]
}

const ProjectPreviewList: FC<ProjectPreviewListProps> = ({ projects }) => {
    return (
        <div className="flex flex-col gap-2 py-2 px-2 md:gap-6 md:py-4 md:px-4 xl:h-[581px] xl:overflow-auto">
            {projects.map((project) => {
                return (
                    <ProjectPreview project={project} key={project.title} />
                );
            })}
        </div>
    );
}

export default ProjectPreviewList;