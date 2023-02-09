import Education from "../components/Resume/Education";
import Projects from "../components/Resume/Projects";
import ResumeHeader from "../components/Resume/ResumeHeader";
import Skills from "../components/Resume/Skills";
import WorkExperience from "../components/Resume/WorkExperience";
import resume from "../content/resume.json";

const Resume = () => {
    return (
        <main className="bg-white rounded-md shadow-md py-12 px-32 mx-12">
            <ResumeHeader header={resume.header} />
            <Skills data={resume.skills} />
            <WorkExperience data={resume.workExperience} />
            <Education data={resume.education} />
            <Projects data={resume.projects} />
        </main>
    )
}

export default Resume;