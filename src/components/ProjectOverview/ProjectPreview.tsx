import { FC } from "react";
import { Project } from "../../types/project";
import { GrReactjs } from "react-icons/gr";
import { FaJava, FaPython } from "react-icons/fa";

type ProjectPreviewProps = {
    project: Project;
}

const typeIcons: Map<string, JSX.Element> = new Map<string, JSX.Element>([
    ["React", <GrReactjs />],
    ["Java", <FaJava />],
    ["Python", <FaPython />]
]);

const ProjectPreview: FC<ProjectPreviewProps> = ({ project }) => {
    return (
        <div>
            <div className="text-xl">
                {project.title}
            </div>
            <div className="">
                {project.description}
            </div>
            <div className="flex flex-row gap-10 mt-4 text-gray-600">
                {project.icons.map((type) => {
                    return (
                        <span className="flex gap-2">
                            <div className="relative top-1">
                                {typeIcons.get(type)}
                            </div>
                            <span className="font-semibold">
                                {type}
                            </span>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectPreview;