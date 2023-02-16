import Profile from "../components/Profile";
import ProjectOverview from "../components/ProjectOverview";
import { projects } from "../content/projects";

const Home = () => {
    return (
        <main className="flex flex-col gap-8 mt-6 lg:mt-12 xl:flex-row xl:gap-24">
            <Profile />
            <ProjectOverview projects={projects} />
        </main>
    )
}

export default Home;