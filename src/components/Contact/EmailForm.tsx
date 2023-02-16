import { FC, useRef, useState } from "react";
import emailjs from '@emailjs/browser';

type EmailFormProps = {
    setStatus: (loading: boolean, success: boolean, error: boolean) => void;
}

const EmailForm: FC<EmailFormProps> = ({ setStatus }) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = () => {
        setSubmitted(true);
        if(!formRef.current?.checkValidity()) return;

        setStatus(true, false, false);
        emailjs.sendForm(
            "service_sgaqu4c",
            "template_001ffh9",
            formRef.current,
            "-nnQAsuhkLi_Qmaz_"
        )
        .then((result) => {
            setStatus(false, true, false);
        }, (error) => {
            setStatus(false, false, true);
        });
    }

    const inputClass = "border-2 border-gray-300 rounded-sm pl-1";

    return (
        <div className="bg-white rounded-md shadow-md p-6 lg:w-3/5">
            <div className="text-2xl font-bold">
                Contact Form
            </div>
            <form className="text-lg w-full mt-3 text-gray-600" ref={formRef}>    
                <div className="flex flex-col gap-4 mb-1 sm:flex-row">
                    <div className="flex flex-col flex-1">
                        <label>Name</label>
                        <input 
                            className={inputClass} 
                            type="text" 
                            name="from_name"
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label>Email</label>
                        <input 
                            className={inputClass + (submitted && " peer")} 
                            type="email" 
                            name="from_email" 
                        />
                        <p className="invisible peer-invalid:visible text-red-700 font-light">
                            Please enter a valid email address
                        </p>
                    </div>
                </div>
                <label className="block">Message</label>
                <textarea 
                    className="border-2 border-gray-300 rounded-sm mb-4 min-h-[10rem] w-full px-1" 
                    name="message" 
                />
                <div className="flex justify-end">
                    <input 
                        className="cursor-pointer bg-blue-600 hover:bg-blue-700 rounded-md text-white px-4 py-2"
                        type="button" 
                        value="Submit" 
                        onClick={handleSubmit} 
                    />
                </div>
            </form>
        </div>
    )
}

export default EmailForm;