import * as React from "react";

export const Review = () => {
return (
  <div className="flex flex-col gap-8 justify-center items-center px-20 py-12 text-white bg-blue-600 max-md:px-5">
    <div className="text-xl max-md:max-w-full">
      Experience the magic of NFTs today Find your perfect match today!
    </div>
    <div className="flex gap-5 justify-between">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9bb3d05a2c9737ba34a022998fa1ab06ead09f01613b940197cd8e88c3fe9bff?apiKey=6d09e386ed084a5db605f780c970c7a9&"
        className="shrink-0 w-10 aspect-square"
      />
      <p className="my-auto">NFT Enthusiast, Art Collector</p>
    </div>
  </div>
);
}