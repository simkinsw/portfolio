import { FC } from "react";
import { EducationEntryInfo } from "../../types/resume"

type EducationEntryProps = {
    data: EducationEntryInfo;
}

const EducationEntry: FC<EducationEntryProps> = ({ data }) => {
    return (
        <div>
            <div className="text-xl">
                <span className="font-semibold">{data.name}</span>
                <span> | {data.date}</span>
            </div>
            <ul>
                {
                    data.degrees.map((degree) => {
                        return (
                            <li className="text-gray-600">
                                {degree}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default EducationEntry;
