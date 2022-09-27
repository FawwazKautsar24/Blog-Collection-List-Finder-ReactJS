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
        <section>
            <h1>Blog</h1>
            <p>Berikut ini adalah kumpulan karya tulis berupa blog yang menarik..</p>

            {loading ? (
                <i>Loading Articles . . .</i>
                ) : (
                <div>
                    {articles.map((article) => {
                        return (
                            <article key={article.id}>
                                <h2><Link to={`/blog/${article.id}`}>{article.title}</Link></h2>
                                <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                            </article>
                        );
                    })}
                </div>
            )}
        </section>
    )
}

// https://www.spaceflightnewsapi.net/
