import { FC } from "react"
import { Project } from "../../types/project"
import ProjectPreview from "./ProjectPreview"

type ProjectPreviewListProps = {
    projects: Project[]
}

const ProjectPreviewList: FC<ProjectPreviewListProps> = ({ projects }) => {
    return (
        <div className="flex flex-col gap-10 mt-10 ml-4">
            {projects.map((project) => {
                return (
                    <ProjectPreview project={project} />
                );
            })}
        </div>
    );
}

export default ProjectPreviewList;