import ContactCTA from "../components/Contact/ContactCTA";
import ContactRight from "../components/Contact/ContactRight";


const Contact = () => {
    return (
        <main className="flex flex-col mx-4 gap-12 mt-12 xl:min-h-[27.5srem] lg:flex-row">
            <ContactCTA />
            <ContactRight />
        </main>
    )
}

export default Contact;