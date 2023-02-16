import { AiOutlineCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const ContactSuccess = () => {
    return (
        <div className="bg-white rounded-md shadow-md p-6 lg:w-3/5">
            <div className="text-2xl font-bold flex flex-col items-center">
                <AiOutlineCheckCircle className="w-12 h-12 mb-2 translate-y-1 fill-emerald-600" />
                <h1>Thank You!</h1>
            </div>
            <div className= "my-6 text-lg text-gray-600">
                I got your message, and I'll get back to you as soon as I can.
            </div>
            <div className="text-lg text-gray-600">
                In the meantime, you should check out my&nbsp;
                <Link className="text-blue-600 hover:underline" to="/resume">resume</Link>
                &nbsp;or my&nbsp;
                <Link className="text-blue-600 hover:underline" to="/">projects</Link>
                &nbsp;if you haven't already.
            </div>
        </div>
    )
}

export default ContactSuccess;