import { FC } from "react";
import { Link } from "react-router-dom";

type TopNavOptionProps = {
    text: string;
    slug: string;
    twClass?: string;
    active: boolean;
}

const TopNavOption: FC<TopNavOptionProps> = ({ text, slug, twClass, active }) => {
    return (
        <li className={(twClass ?? "") + 
            " underline-offset-2 px-2 hover:underline" + (active ? " underline" : "") +
            " lg:px-6"
        }>
            <Link to={`/${slug.toLowerCase()}`} >
                {text}
            </Link>
        </li>
    )
}

export default TopNavOption;