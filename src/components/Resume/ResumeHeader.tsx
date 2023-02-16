import { FC } from "react"
import { ResumeHeaderInfo } from "../../types/resume";
import ContactInfoEntry from "./ContactInfoEntry";

type ResumeHeaderProps = {
    header: ResumeHeaderInfo
}

const ResumeHeader: FC<ResumeHeaderProps> = ({ header }) => {
    return (
        <section className="flex flex-col items-center">
            <div className="flex flex-col text-center">
                <span className="mb-2 font-sans uppercase text-4xl sm:tracking-wide sm:text-5xl">{header.name}</span>
                <span className="text-2xl">{header.position}</span>
            </div>
            <div className="grid gap-y-2 mt-6 sm:grid-cols-2 sm:gap-x-6 md:gap-x-0 md:mt-10 md:grid-cols-3">
                {
                    header.contactInfoList.map((contactInfo) => {
                        return (
                            <ContactInfoEntry contactInfo={contactInfo} key={contactInfo.text} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ResumeHeader;