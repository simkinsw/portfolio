import { FC } from "react"
import { WorkExperienceEntryInfo } from "../../types/resume"

type WorkExperienceEntryProps = {
    data: WorkExperienceEntryInfo;
}

const WorkExperienceEntry: FC<WorkExperienceEntryProps> = ({ data }) => {
    return (
        <div className="mb-8">
            <div className="text-2xl">
                <span className="font-semibold">{data.title}</span>
                <span> - {data.company}</span>
            </div>
            <div className="text-lg">
                <span>{data.date}</span>
                <span> | {data.location}</span>
            </div>
            <ul className="my-2 ml-10">
                {
                    data.responsibilities.map((responsibility) => {
                        return (
                            <li className="list-disc text-gray-600">
                                {responsibility}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default WorkExperienceEntry;