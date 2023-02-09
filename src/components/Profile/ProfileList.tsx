import { FC } from "react";

type ProfileListProps = {
    children: React.ReactNode;
};

const ProfileList: FC<ProfileListProps> = ({ children }) => {
    return (
        <div className="flex flex-col gap-6 px-8 py-8">
            {children}
        </div>
    );
}

export default ProfileList;