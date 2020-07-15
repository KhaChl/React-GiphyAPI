import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifList } from './components/GifList';

export const GifApp = () => {

    const [category, setCategory] = useState([]);

    return (
        <>
            <h1>GifAPP</h1>
            <AddCategory setCategory={setCategory} />
            <hr />
            <ul>
                {
                    category.map((category, index) =>
                        <GifList
                            key={index}
                            category={category}
                        />
                    )
                }
            </ul>
        </>
    );
};