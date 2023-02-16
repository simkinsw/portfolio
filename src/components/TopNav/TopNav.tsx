import { useLocation } from "react-router-dom";
import TopNavOption from "./TopNavOption";

const TopNav = () => {
    
    const location = useLocation();
    const current = location.pathname.split("/")[1];

    return (
        <nav className="border-b">
            <ul className="flex justify-evenly pt-3 pb-2 text-xl md:pt-6">
                <TopNavOption text="William Simkins" slug="" twClass="font-bold mr-auto hidden md:inline" active={false} />
                <TopNavOption text={"Home"} slug="" active={current === ""} />
                <TopNavOption text={"Resume"} slug="resume" active={current === "resume"} />
                <TopNavOption text={"Contact"} slug="contact" active={current === "contact"} />
            </ul>
        </nav>
    );
}

export default TopNav;