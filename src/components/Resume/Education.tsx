import { FC } from "react";
import { EducationInfo } from "../../types/resume"
import EducationEntry from "./EducationEntry";
import SectionHeader from "./SectionHeader";

type EducationProps = {
    data: EducationInfo;
}

const Education: FC<EducationProps> = ({ data }) => {
    return (
        <section>
            <SectionHeader data={data.header} />
            <div className="flex justify-between ">
                {
                    data.education.map((entry) => {
                        return (
                            <EducationEntry data={entry} />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Education;