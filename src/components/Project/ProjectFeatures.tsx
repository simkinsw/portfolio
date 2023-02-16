import { FC } from "react";
import { Project } from "../../types/project"

type ProjectFeaturesProps = {
    project: Project;
}

const ProjectFeatures: FC<ProjectFeaturesProps> = ({ project }) => {
    return (
        <section className="mt-8">
            <div className="text-2xl">
                <span className="font-semibold">Project Features</span>
            </div>
            <ul className="list-disc ml-4 mt-4">
                {
                    project.features.map((feature, i) => {
                        return (
                            <li className="text-gray-600 not-last:pb-1" key={i}>
                                {feature}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default ProjectFeatures;