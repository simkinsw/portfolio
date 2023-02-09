import { FC } from "react";

type ProfileItemProps = {
    Icon: JSX.Element;
    header?: string;
    text?: string[];
    link?: string;
};

const ProfileItem: FC<ProfileItemProps> = ({ Icon, header, text, link }) => {
    
    const content = (
        <div className="flex gap-8">
            {Icon}
            <div>
                <header className="text-lg text-black">{header}</header>
                {text && text.map((entry) => {
                    return (
                        <div className="text-gray-600 text-md">
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