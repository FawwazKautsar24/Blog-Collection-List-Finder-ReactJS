import { useEffect } from "react"

export default function NotFound(){
    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title"><i>Halaman Tidak Tersedia!</i></h1>
        </section>
    )
}
