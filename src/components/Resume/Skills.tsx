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
            <div className="flex justify-between flex-wrap sm:flex-nowrap -mt-2">
            {
                data.categories.map((category) => {
                    return (
                        <div className="w-1/2 mt-2 text-center sm:w-auto sm:text-left" key={category.name}>
                            <span className="text-xl font-semibold">
                                {category.name}
                            </span>
                            <ul className="mb-4 sm:list-disc sm:pl-4 md:mt-2">
                                {
                                    category.entries.map((entry) => {
                                        return (
                                            <li className="sm:text-lg text-gray-600" key={entry}>
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