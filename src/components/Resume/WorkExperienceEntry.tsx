import { FC } from "react"
import { WorkExperienceEntryInfo } from "../../types/resume"

type WorkExperienceEntryProps = {
    data: WorkExperienceEntryInfo;
}

const WorkExperienceEntry: FC<WorkExperienceEntryProps> = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="text-xl md:text-2xl">
                <span className="block sm:inline-block font-semibold">{data.title}</span>
                <span className="hidden sm:inline"> - </span> 
                <span>{data.company}</span>
            </div>
            <div className="">
                <span className="block sm:inline-block">{data.date}</span>
                <span className="hidden sm:inline"> | </span> 
                <span>{data.location}</span>
            </div>
            <ul className="my-2 ml-4">
                {
                    data.responsibilities.map((responsibility, i) => {
                        return (
                            <li className="text-gray-600 not-last:pb-1 list-disc" key={i}>
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