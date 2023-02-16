import { useState } from "react";
import ContactFailure from "./ContactFailure";
import ContactLoading from "./ContactLoading";
import ContactSuccess from "./ContactSuccess";
import EmailForm from "./EmailForm";

const ContactRight = () => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    

    const setStatus = (loading: boolean, success: boolean, error: boolean) => {
        setLoading(loading);
        setSuccess(success);
        setError(error);
    }

    if(loading) return <ContactLoading />
    if(success) return <ContactSuccess />
    if(error) return <ContactFailure />

    return <EmailForm setStatus={setStatus} />
}

export default ContactRight;