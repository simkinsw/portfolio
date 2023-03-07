import { FC } from "react";
import { CertificateEntryInfo } from "../../types/resume"

type CertificateEntryProps = {
    data: CertificateEntryInfo;
}

const CertificateEntry: FC<CertificateEntryProps> = ({ data }) => {
    return (
        <div>
            <div className="text-lg sm:text-xl">
                <span className="font-semibold block sm:inline-block">{data.name}</span>
                <span className="hidden sm:inline"> | </span>
                <span>{data.date}</span>
            </div>
        </div>
    )
}

export default CertificateEntry;
