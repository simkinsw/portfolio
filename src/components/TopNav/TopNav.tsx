import TopNavOption from "./TopNavOption";

const TopNav = () => {
    return (
        <nav className="border-b mb-10">
            <ul className="flex justify-evenly pt-6 pb-2">
                <li className="font-bold">William Simkins</li>
                <TopNavOption text={"Home"} slug="" />
                <TopNavOption text={"Resume"} slug="resume" />
                <TopNavOption text={"Contact"} slug="contact" />
            </ul>
        </nav>
    );
}

export default TopNav;