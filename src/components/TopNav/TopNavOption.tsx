import { FC } from "react";
import { Link } from "react-router-dom";

type TopNavOptionProps = {
    text: string;
    slug: string;
}

const TopNavOption: FC<TopNavOptionProps> = ({ text, slug }) => {
    return (
        <li>
            <Link to={`/${slug.toLowerCase()}`} >
                {text}
            </Link>
        </li>
    )
}

export default TopNavOption;