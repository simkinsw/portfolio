import { FC } from "react";
import { ProjectEntryInfo } from "../../types/resume"
import { ImGithub } from "react-icons/im";

type ProjectEntryProps = {
    data: ProjectEntryInfo;
}

const ProjectEntry: FC<ProjectEntryProps> = ({ data }) => {
    return (
        <div className="mb-8">
            <div className="flex gap-2">
                <span className="text-2xl font-semibold">{data.name}</span>
                {data.githubLink && (
                    <a href={data.githubLink}>
                        <ImGithub className="relative top-1 w-6 h-6 fill-gray-600" />
                    </a>
                )}
            </div>
            {data.projectLink && (
                <a className="text-gray-600" href={data.projectLink}>
                    {data.projectLink}
                </a>
            )}
            <div className="mt-2 text-gray-600">
                {data.description}
            </div>
            <ul className="list-disc ml-8 my-4">
                {
                    data.bullets.map((bullet) => {
                        return (
                            <li className="text-gray-600">
                                {bullet}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default ProjectEntry;