import { FC } from "react";

type ProfileHeaderProps = {
    heading: string;
    subheading: string;
};

const ProfileHeader: FC<ProfileHeaderProps> = ({ heading, subheading }) => {
    return (
        <div className="flex flex-col text-gray-800">
            <span className="font-bold text-center text-2xl">{heading}</span>
            <span className="text-center text-xl">{subheading}</span>
        </div>
    );
}

export default ProfileHeader;