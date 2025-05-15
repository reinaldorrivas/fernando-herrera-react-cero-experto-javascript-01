const apiKey = '2ThNkZ6iOsDfCgWy9ClHinqKecsnb79w';

const randomGifRequest = fetch(
  `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
);

randomGifRequest
  .then((response) => response.json())
  .then(({ data }) => console.log(data.images.original.url))
  .catch(console.warn);
