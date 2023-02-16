import { FC } from "react";
import { Project } from "../../types/project"

type ProjectScreenshotsProps = {
    project: Project;
}

const ProjectScreenshots: FC<ProjectScreenshotsProps> = ({ project }) => {
    return (
        <section className="mt-4">
            <img className="rounded-md mx-auto"
                src={project.screenshot} 
                alt={`Screenshot of ${project.title}`} 
            />
        </section>
    )
}

export default ProjectScreenshots;