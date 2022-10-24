import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export function useFetchGifs({ category } = 'Messi'){
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    useEffect(() => {
        getGifs(category)
        .then(images => setImages(images));

        setIsLoading(false);
    }, []);

    return {
        images,
        isLoading
    };
}