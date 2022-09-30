import { useEffect } from "react"

export default function Home(){
    useEffect(() => {
        document.title = 'Home';
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Selamat Datang di Website Blog List</h1>
            <p className="section-description">Halo semua! ini merupakan website rekomendasi kumpulan blog populer yang sedang hangat saat ini!</p>
        </section>
    )
}
