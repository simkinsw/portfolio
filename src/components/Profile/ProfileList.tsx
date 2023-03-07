import { FC } from "react";

type ProfileListProps = {
    children: React.ReactNode;
};

const ProfileList: FC<ProfileListProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-2 md:gap-6 px-8 pb-3 sm:justify-evenly py-2">
            {children}
        </div>
    );
}

export default ProfileList;