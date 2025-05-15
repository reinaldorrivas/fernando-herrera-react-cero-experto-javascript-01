const apiKey = '2ThNkZ6iOsDfCgWy9ClHinqKecsnb79w';

const asyncRandomGifRequest = async () => {
  const randomGifRequest = await fetch(
    `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
  );
  try {
    const dataImages = await randomGifRequest.json();

    const {
      data: {
        images: {
          original: { url },
        },
      },
    } = dataImages;

    return url;
  } catch (error) {
    console.warn(error);
  }
};

const dataImage = async () => console.log(await asyncRandomGifRequest());

dataImage();
