import * as Icons from "react-icons/fa";
import { FC } from "react";

type FaIconProps = {
    name: string;
	twClass?: string;
};

const FaIcon: FC<FaIconProps> = ({ name, twClass="" }) => {
	const IconsMap: any = Icons;
    const IconComponent = IconsMap[name];

    if (!IconComponent) {
        return <Icons.FaSquare className={twClass} />;
    }

    return <IconComponent className={twClass} />;
};

export default FaIcon;
