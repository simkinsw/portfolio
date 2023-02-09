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
                <span className="text-5xl mb-2 font-sans uppercase">{header.name}</span>
                <span className="text-2xl">{header.position}</span>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-y-2">
                {
                    header.contactInfoList.map((contactInfo) => {
                        return (
                            <ContactInfoEntry contactInfo={contactInfo} />
                        )
                    })
                }
            </div>
        </section>
    )
}

export default ResumeHeader;