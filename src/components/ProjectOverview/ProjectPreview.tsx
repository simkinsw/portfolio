import { FC } from "react";
import { Project } from "../../types/project";
import { GrReactjs } from "react-icons/gr";
import { FaJava, FaPython, FaUnity } from "react-icons/fa";
import { Link } from "react-router-dom";

type ProjectPreviewProps = {
    project: Project;
}

const typeIcons: Map<string, JSX.Element> = new Map<string, JSX.Element>([
    ["React", <GrReactjs />],
    ["Java", <FaJava />],
    ["Python", <FaPython />],
    ["Unity", <FaUnity />]
]);

const ProjectPreview: FC<ProjectPreviewProps> = ({ project }) => {
    return (
        <Link to={`/projects/${project.id}`} className="hover:bg-gray-200 px-2 py-3 rounded-md group">
            <div className="text-xl md:text-2xl font-bold group-hover:text-emerald-500">
                {project.title}
            </div>
            <div className="md:text-lg">
                {project.description}
            </div>
            <div className="flex flex-row gap-10 mt-4 text-gray-600">
                {project.icons.map((type) => {
                    return (
                        <span className="flex gap-2" key={type}>
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
        </Link>
    )
}

export default ProjectPreview;