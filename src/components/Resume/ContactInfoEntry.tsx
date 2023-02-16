import { FC } from "react";
import { ContactInfo } from "../../types/resume"
import FaIcon from "../FaIcon";

type ContactInfoProps = {
    contactInfo: ContactInfo;
}

const ContactInfoEntry: FC<ContactInfoProps> = ({ contactInfo }) => {

    const content = (
        <div className="flex text-gray-600 sm:text-lg">
            <FaIcon twClass="relative top-1.5 mr-2" name={contactInfo.icon} />
            {contactInfo.text}
        </div>
    );

    return (
        contactInfo.link ? (
            <a href={contactInfo.link}>
                {content}
            </a>
        ) : (
            content
        )
    );
}

export default ContactInfoEntry;