import { useEffect } from "react";

export default function Profile(){
    useEffect(() => {
        document.title = 'Profile';
    }, []);
    
    return (
        <section className="section">
            <h1 className="section-title">Profile</h1>
            <p className="section-description">Halo namaku Fawwaz, saya adalah seorang calon Front-End Web Developer</p>
        </section>
    )
}
