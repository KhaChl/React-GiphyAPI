import React from 'react';
import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifListItem } from './GifListItem';

export function GifList({ category }) {

    const { imgs, loading } = useFetchGifs(category);

    return (
        <>
            <h2>{category}</h2>
            {loading && <div className="loader"></div>}
            <div className="card-grid">
                {
                    imgs.map(img =>
                        <GifListItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </div>
        </>
    );
};

GifList.propTypes = {
    category: PropTypes.string.isRequired
};