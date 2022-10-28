import { useEffect, useState } from "react";

export function useFetch ( url ){

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    });

    const getQuotes = async () => {
        const resp = await fetch(url);
        const data = await resp.json();
        
        setState({
            data,
            isLoading: false,
            hasError: null
        });
    }

    useEffect(() => {

        getQuotes();
      
    }, [url])
    

    return;
}