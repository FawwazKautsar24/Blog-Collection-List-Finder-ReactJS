import { useEffect } from "react";

export default function Contact(){
    useEffect(() => {
        document.title = 'Contact';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Contact</h1>
            <p className="section-description">Anda dapat menghubungi saya ke <a href="https://id.linkedin.com/in/fawwaz-kautsar" target="_blank">LinkedIn</a></p>
        </section>
    )
}
