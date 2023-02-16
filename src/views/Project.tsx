import { useParams } from "react-router-dom";
import DefaultProject from "../components/Project/DefaultProject";
import ProjectFeatures from "../components/Project/ProjectFeatures";
import ProjectHeader from "../components/Project/ProjectHeader";
import ProjectScreenshots from "../components/Project/ProjectScreenshots";
import ProjectTools from "../components/Project/ProjectTools";
import { projects } from "../content/projects";

const Project = () => {
    const { id } = useParams();

    if(!id || isNaN(Number(id)) || parseInt(id) <= 0 || parseInt(id) > projects.length) return <DefaultProject />

    const project = projects[parseInt(id!) - 1];

    return (
        <main className="bg-white rounded-md shadow-md py-4 mx-4 mt-6 xl:mt-12 px-4 sm:px-8 lg:px-16 lg:mx-6 lg:text-lg lg:py-12 xl:px-32 xl:mx-12">
            <ProjectHeader project={project} />
            <ProjectScreenshots project={project} />
            <ProjectFeatures project={project} />
            <ProjectTools project={project} />
        </main>
    )
}


export default Project;