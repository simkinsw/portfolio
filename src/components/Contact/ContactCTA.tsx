import { TbSend } from "react-icons/tb";

const ContactCTA = () => {
    return (
        <div className="bg-white rounded-md shadow-md p-6 lg:h-[27.5rem] lg:w-2/5">
            <div className="text-2xl font-bold flex flex-col items-center">
                <TbSend className="w-12 h-12 mb-2 translate-y-1 stroke-gray-600" /> 
                <h1>Say Hi!</h1>
            </div>
            <div className= "my-6 text-lg text-gray-600">
                If you're interested in any of my projects or are recruiting, feel free to send me an email using the form.
                Make sure to include your email address and I'll get back to you ASAP.
            </div>
            <div className="text-lg text-gray-600">
                You can also reach me directly 
                on&nbsp;
                <a className="text-blue-600 hover:underline" href="https://www.linkedin.com/in/will-simkins-31973623a/">
                    LinkedIn
                </a>
                &nbsp;or via email at&nbsp;
                <a className="text-blue-600 hover:underline" href="mailto:wmsimkins@gmail.com">
                    wmsimkins@gmail.com
                </a>
                .
            </div>
        </div>
    )
}

export default ContactCTA;