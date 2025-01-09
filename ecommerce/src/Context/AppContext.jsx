import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const [loading, setLoading] = useState(false);
    const [posts, setPost] = useState([]);

    async function fetchBlogPosts(params = "") {
        setLoading(true);
        const url =``;
        try {
            const result = await fetch(url);
            const data = await result.json();
            setPost(data.posts);
            setPage(1);
            const postsPerPage = 5; // Example pagination size
            setTotalPage(Math.ceil(data.posts.length / postsPerPage));

            console.log("Fetched posts:", data.posts);
        } catch (error) {
            console.error("Error occurred:", error);
        } finally {
            setLoading(false);
        }
        
    }
    useEffect(() => {
        fetchProductData
    })
}