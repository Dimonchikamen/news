import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { New } from "../../models/New";
import Loader from "../../UiKit/Loader/Loader";
import NewPresentation from "./components/New";


const News: React.FC = () => {
    const [isLoading, setLoading] = useState(true);
    const [count] = useState(10);
    const [currentPage, setPage] = useState(1);
    const [news, setNews] = useState<any>([]);
    const content = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (isLoading) {
            axios.get(`https://frontappapi.dock7.66bit.ru/api/news/get?page=${currentPage}&count=${count}`)
            .then(response => {
                setNews([...news, ...response.data]);
                setPage(prev => prev + 1);
            })
            .finally(() => setLoading(false));
        }
    }, [isLoading]);

    useEffect(() => {
        const a = content.current;
        console.log(a);
        a?.addEventListener("scroll", scrollHandler, false);
        return function() {
            a?.removeEventListener("scroll", scrollHandler, false);
        }
    }, []);

    const setRef = (div: HTMLDivElement|null) => {
        console.log(content.current);
        content.current = div;
        content.current?.addEventListener("scroll", scrollHandler);
        // return {
        //     content.current?.removeEventListener("scroll", scrollHandler);
        //     content.current = null;
        // }
    }

    const scrollHandler = (e: any) => {
        console.log(e.target.documentElement.scrollHeight);
        console.log(e.target.documentElement.scrollTop);
        console.log(window.innerHeight);

        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200) {
            setLoading(true);
        }
    }

    return (
        <div className="content" ref={content}>
            {news?.map((n: any, i: number) =>
                <NewPresentation
                    key={i}
                    title={n.title}
                    content={n.content}
                    createdAt={n.createdAt}
                    updatedAt={n.updatedAt}
                />)
            }
        </div>
    );
}

export default News;