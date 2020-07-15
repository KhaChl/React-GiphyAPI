export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?key=kMve6FBizwRUxZW2SjsQG8UyltoBUXu7&q=${encodeURI(category)}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map(({ id, title, images: { downsized_medium: { url } } }) => {
        return ({
            id: id,
            title: title,
            url: url
        });
    });
    
    return gifs;
};