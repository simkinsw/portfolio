import { FC } from "react";
import { Project } from "../../types/project"
import { ImGithub } from "react-icons/im";

type ProjectHeaderProps = {
    project: Project;
}

const ProjectHeader: FC<ProjectHeaderProps> = ({ project }) => {
    return (
        <div className="w-full">
            <div className="flex items-center w-full">
                <h1 className="text-3xl font-bold">
                    {project.title}
                </h1>
                {
                    project.github &&
                    <a href={project.github}>
                        <ImGithub className="w-7 h-7 ml-2 fill-gray-600" />
                    </a>
                }
            </div>
            {
                project.link &&
                <a href={project.link} className="mr-auto">
                    {project.link.replace("https://www.", "")}
                </a>
            }
            <p className="text-gray-600 mt-2">
                {project.description}
            </p>
        </div>
    )
}

export default ProjectHeader;