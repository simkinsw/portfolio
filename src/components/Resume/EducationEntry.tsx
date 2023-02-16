import { FC } from "react";
import { EducationEntryInfo } from "../../types/resume"

type EducationEntryProps = {
    data: EducationEntryInfo;
}

const EducationEntry: FC<EducationEntryProps> = ({ data }) => {
    return (
        <div>
            <div className="text-lg sm:text-xl">
                <span className="font-semibold block sm:inline-block">{data.name}</span>
                <span className="hidden sm:inline"> | </span>
                <span>{data.date}</span>
            </div>
            <ul>
                {
                    data.degrees.map((degree, i) => {
                        return (
                            <li className="text-gray-600" key={i}>
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
