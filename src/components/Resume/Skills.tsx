import { FC } from "react";
import { SkillsInfo } from "../../types/resume";
import SectionHeader from "./SectionHeader";

type SkillsProps = {
    data: SkillsInfo
}

const Skills: FC<SkillsProps> = ({ data }) => {
    return (
        <section>
            <SectionHeader data={data.header} />
            <div className="flex justify-between">
            {
                data.categories.map((category) => {
                    return (
                        <div>
                            <span className="text-xl font-semibold">
                                {category.name}
                            </span>
                            <ul className="list-disc pl-4 mt-2">
                                {
                                    category.entries.map((entry) => {
                                        return (
                                            <li className="text-lg text-gray-600">
                                                {entry}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
            </div>
        </section>
    );
}

export default Skills;