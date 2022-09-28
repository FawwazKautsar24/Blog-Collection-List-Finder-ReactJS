import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail(){
    const params = useParams();
    const [article, setArticle] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        async function getArticle(){
            const request = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);

            if(!request.ok){
                return setNotFound(true);
            }
            
            const response = await request.json();

            setArticle(response);
            setLoading(false);
        }
        getArticle();
    }, [params]);

    if(notFound){
        return <h1>Artikel Tidak Ditemukan :(</h1>;
    }

    return (
        <section>
            {loading ? (
                <i>Article Loading . . .</i>
            ) : (
                <div>
                    <h1>{article.title}</h1>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
                    <img src={article.imageUrl} alt={article.title} />
                    <p>{article.summary}</p>

                    <p>
                        source:{' '}
                        <a href={article.url} target="_blank" rel="noreferrer">
                            {article.newsSite}
                        </a>
                    </p>
                </div>
            )}
        </section>
    )
}
