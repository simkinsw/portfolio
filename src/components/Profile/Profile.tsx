import ProfileHeader from "./ProfileHeader";
import ProfileImage from "./ProfileImage";
import ProfileItem from "./ProfileItem";
import ProfileList from "./ProfileList";

import { FaScroll, FaWrench, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdSchool } from "react-icons/io";

const Profile = () => {
    return (
        <aside className= "relative xl:w-1/4 xl:h-[650px]">
            <div 
                className="flex gap-3 mx-4 flex-col bg-white rounded-md text-gray-600 shadow-md
                sm:flex-row sm:justify-center sm:items-stretch lg:gap-16 
                xl:h-full xl:mx-0 xl:mt-32 xl:justify-start xl:gap-3 xl:flex-col"
            >
                <div className="sm:p-4">
                    <ProfileImage />
                    <ProfileHeader heading="William Simkins" subheading="Software Engineer" />
                </div>
                <ProfileList>
                    <ProfileItem
                        Icon={<FaScroll className="w-6 h-6 sm:w-8 sm:h-8" />}
                        header="AWS Certified Developer - Associate"
                    />
                    <ProfileItem 
                        Icon={<FaWrench className="w-6 h-6 sm:w-8 sm:h-8" />}
                        header="TypeScript, React, Java, Python"
                    />
                    <ProfileItem 
                        Icon={<IoMdSchool className="w-6 h-6 sm:w-8 sm:h-8" />}
                        header="University of Chicago"
                        text={["BS in Mathematics"]}
                    />
                    <ProfileItem
                        Icon={<FaGithub className="w-6 h-6 sm:w-8 sm:h-8" />}
                        header="@simkinsw"
                        link="https://github.com/simkinsw"
                    />
                    <ProfileItem
                        Icon={<FaLinkedin className="w-6 h-6 sm:w-8 sm:h-8" />}
                        header="will-simkins"
                        link="https://www.linkedin.com/in/will-simkins-31973623a/"
                    />
                </ProfileList>
            </div>
        </aside>
    );
}

export default Profile;