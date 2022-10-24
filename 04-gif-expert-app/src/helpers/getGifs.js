export const getGifs = async ( category ) => {
    const apiKey = 'rHkD2c8et1uRnikxkTM0df3UCSAdklcH&q';

    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${category}&limit=10&offset=0&rating=g&lang=en`;

    const res = await fetch(apiUrl);
    const { data } = await res.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}