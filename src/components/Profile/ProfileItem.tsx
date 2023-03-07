import { FC } from "react";

type ProfileItemProps = {
    Icon: JSX.Element;
    header?: string;
    text?: string[];
    link?: string;
};

const ProfileItem: FC<ProfileItemProps> = ({ Icon, header, text, link }) => {
    
    const content = (
        <div className="flex gap-8 py-1 items-center">
            <div className="w-6 sm:w-8 flex justify-center">
                {Icon}
            </div>
            <div>
                <header className="text-lg text-gray-800">{header}</header>
                {text && text.map((entry) => {
                    return (
                        <div className="text-gray-500 text-md hidden md:block" key={entry}>
                            {entry}
                        </div>
                    )
                })}
            </div>
        </div>
    );
    
    return (
        link ? (
            <a href={link}>
                {content}
            </a>
        ) : (
            content
        )
    );
}

export default ProfileItem;