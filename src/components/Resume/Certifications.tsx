import { FC } from "react";
import { CertificationInfo } from "../../types/resume";
import CertificateEntry from "./CertificateEntry";
import SectionHeader from "./SectionHeader";

type CertificationsProps = {
    data: CertificationInfo;
}

const Certifications: FC<CertificationsProps> = ({ data }) => {
    return (
        <section>
            <SectionHeader data={data.header} />
            <div className="flex justify-between flex-col gap-4 sm:gap-6 xl:flex-row xl:gap-0">
                {
                    data.certificates.map((entry, i) => {
                        return (
                            <CertificateEntry data={entry} key={i} />
                        );
                    })
                }
            </div>
        </section>
    );
}

export default Certifications;