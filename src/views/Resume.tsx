import Certifications from "../components/Resume/Certifications";
import Education from "../components/Resume/Education";
import Projects from "../components/Resume/Projects";
import ResumeHeader from "../components/Resume/ResumeHeader";
import Skills from "../components/Resume/Skills";
import WorkExperience from "../components/Resume/WorkExperience";
import resume from "../content/resume.json";

const Resume = () => {
    return (
        <main className="bg-white rounded-md shadow-md py-12 mx-4 mt-6 xl:mt-12 px-4 sm:px-8 lg:px-16 lg:mx-6 lg:text-lg xl:px-32 xl:mx-12">
            <ResumeHeader header={resume.header} />
            <Skills data={resume.skills} />
            <WorkExperience data={resume.workExperience} />
            <Certifications data={resume.certifications} />
            <Education data={resume.education} />
            <Projects data={resume.projects} />
        </main>
    )
}

export default Resume;