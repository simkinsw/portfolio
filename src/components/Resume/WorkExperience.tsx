import { FC } from "react"
import { WorkExperienceInfo } from "../../types/resume";
import SectionHeader from "./SectionHeader";
import WorkExperienceEntry from "./WorkExperienceEntry";

type WorkExperienceProps = {
    data: WorkExperienceInfo;
}

const WorkExperience: FC<WorkExperienceProps> = ({ data }) => {
    return (
        <section>
            <SectionHeader data={data.header} />
            <div>
                {
                    data.workExperience.map((entry) => {
                        return (
                            <WorkExperienceEntry data={entry} />
                        )
                    })
                }
            </div>
        </section>
    );
}

export default WorkExperience;