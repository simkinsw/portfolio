import { FC } from "react";
import { ProjectInfo } from "../../types/resume"
import ProjectEntry from "./ProjectEntry";
import SectionHeader from "./SectionHeader";

type ProjectsProps = {
    data: ProjectInfo;
}

const Projects: FC<ProjectsProps> = ({ data }) => {
    return (
        <section>
            <SectionHeader data={data.header} />
            <div>
                {
                    data.projects.map((project) => {
                        return (
                            <ProjectEntry data={project} key={project.name} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Projects;