import ProfileHeader from "./ProfileHeader";
import ProfileImage from "./ProfileImage";
import ProfileItem from "./ProfileItem";
import ProfileList from "./ProfileList";

import { HiWrenchScrewdriver } from "react-icons/hi2";
import { ImGithub } from "react-icons/im";
import { IoMdSchool } from "react-icons/io";

const Profile = () => {
    return (
        <aside className= "relative w-1/4">
            <div className="w-full h-full bg-white mt-32 rounded-md text-gray-600 shadow-md">
                <ProfileImage />
                <ProfileHeader heading="William Simkins" subheading="Software Engineer" />
                <ProfileList>
                    {/*TODO: add linkedin*/}
                    <ProfileItem 
                        Icon={<HiWrenchScrewdriver className="w-8 h-8" />}
                        //TODO
                        header="Java, TypeScript, React"
                    />
                    {/*TODO: Add UofR*/}
                    <ProfileItem 
                        Icon={<IoMdSchool className="w-8 h-8" />}
                        header="University of Chicago"
                        text={["BS in Mathematics", "BA in Linguistics"]}
                    />
                    <ProfileItem
                        Icon={<ImGithub className="w-8 h-8" />}
                        header="@simkinsw"
                        link="https://github.com/simkinsw"
                    />
                </ProfileList>
            </div>
        </aside>
    );
}

export default Profile;