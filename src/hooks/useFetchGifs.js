import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [images, setImages] = useState(
        {
            imgs: [],
            loading: true
        }
    );

    useEffect(() => {
        getGifs(category)
            .then(imgs =>
                setImages(
                    {
                        imgs: imgs,
                        loading: false
                    }
                )
            );
    }, [category]);

    return images;
};