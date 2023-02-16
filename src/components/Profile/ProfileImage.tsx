/* eslint-disable jsx-a11y/img-redundant-alt */
import profilePhoto from "../../assets/profilePhoto.jpg";

const ProfileImage = () => {

    const className = "w-24 sm:w-32 md:w-48 xl:w-64 border-4 border-transparent rounded-full mx-auto mb-1 xl:mb-3 drop-shadow-md"

    return (
        <div className={className}>
            <img 
                src={profilePhoto} 
                className="mt-2 xl:-mt-32 border-4 border-white rounded-full" 
                alt="Wedding photo of William Simkins" 
            />
        </div>
    );
}

export default ProfileImage;