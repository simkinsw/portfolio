import Profile from "../components/Profile";
import ProjectOverview from "../components/ProjectOverview";

const Home = () => {
    const projects = [{
        title: "CLM Stats",
        types: ["React-JS", "Java/Python"],
        description: "Website for Chicagoland Melee",
        icons: ["React", "Java"]
    },
    {
        title: "Portfolio Webpage",
        types: ["React-JS"],
        description: "It's my portfolio!",
        icons: ["React"]
    }]

    return (
        <main className="flex gap-24">
            <Profile />
            <ProjectOverview projects={projects} />
        </main>
    )
}

export default Home;