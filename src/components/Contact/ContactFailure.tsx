import { AiOutlineWarning } from "react-icons/ai";

const ContactFailure = () => {
    return (
        <div className="bg-white rounded-md shadow-md p-6 lg:w-3/5">
            <div className="text-2xl font-bold flex flex-col items-center">
                <AiOutlineWarning className="w-12 h-12 mb-2 translate-y-1 fill-red-600" />
                <h1>Something Went Wrong</h1>
            </div>
            <div className= "my-6 text-lg text-gray-500">
                Sorry, there was an unknown error sending your message. 
                Please try again later or contact me directly via email or LinkedIn.
            </div>
        </div>
    )
}

export default ContactFailure;