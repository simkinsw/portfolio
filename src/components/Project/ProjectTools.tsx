import { FC } from "react";
import { Project } from "../../types/project"

type ProjectToolsProps = {
    project: Project;
}

const ProjectTools: FC<ProjectToolsProps> = ({ project }) => {
    return (
        <section className="mt-8">
            <h1 className="text-2xl font-bold">
                Technologies Used
            </h1>
            <ul className="ml-4 mt-4 grid gap-y-1 grid-cols-2 sm:grid-cols-4">
                {
                    project.tools.map((tool) => {
                        return (
                            <li className="list-disc" key={tool}>
                                {tool}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ProjectTools;