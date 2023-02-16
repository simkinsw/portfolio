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
                <span className="font-semibold text-xl md:text-2xl">{data.name}</span>
                {data.githubLink && (
                    <a href={data.githubLink}>
                        <ImGithub className="relative w-6 h-6 fill-gray-600 md:top-1" />
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
            <ul className="list-disc ml-4 my-4">
                {
                    data.bullets.map((bullet, i) => {
                        return (
                            <li className="text-gray-600 not-last:pb-1" key={i}>
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