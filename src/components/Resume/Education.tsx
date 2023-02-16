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
            <div className="flex justify-between flex-col gap-4 sm:gap-6 xl:flex-row xl:gap-0">
                {
                    data.education.map((entry, i) => {
                        return (
                            <EducationEntry data={entry} key={i} />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Education;