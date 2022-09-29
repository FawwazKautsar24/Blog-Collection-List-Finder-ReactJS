import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Blog(){
    const [articles, setArticles] = useState([]);
    const [loading, setLoadig] = useState(true);

    useEffect(() => {
        async function getArticles(){
            const request = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const response = await request.json();

            setArticles(response);
            setLoadig(false);
        }
        getArticles();
    }, []);

    return (
        <section className="section">
            <h1 className="section-title">Blog</h1>
            <p className="section-description">Berikut ini adalah kumpulan karya tulis berupa blog yang menarik..</p>

            {loading ? (
                <i>Loading Articles . . .</i>
                ) : (
                <div className="articles">
                    {articles.map((article) => {
                        return (
                            <article key={article.id} className="article">
                                <h2 className="article-title"><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                                <time className="article-time">{new Date(article.publishedAt).toLocaleDateString()}</time>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    )
}

// https://www.spaceflightnewsapi.net/
