import { FC } from "react"
import { SectionHeaderInfo } from "../../types/resume";
import FaIcon from "../FaIcon";

type SectionHeaderProps = {
    data: SectionHeaderInfo;
}

const SectionHeader: FC<SectionHeaderProps> = ({ data }) => {
    return (
        <header className="mt-10 mb-6">
            <div className="flex items-center py-4">
                <div className="flex-grow h-px bg-gray-300"></div> 

                <span className="flex flex-shrink px-4 font-sans text-2xl text-gray-600">
                    <FaIcon twClass="relative mr-2 top-1" name={data.icon} />
                    <span className="uppercase">{data.text}</span>
                </span>

                <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            
        </header>
    );
}

export default SectionHeader;