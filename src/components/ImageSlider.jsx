import React, { useEffect, useState } from "react";

const images = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://img.freepik.com/premium-photo/photo-mountain-lake-surrounded-by-peaks_1060272-54966.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1711929600&semt=ais",
  "https://img.freepik.com/fotos-premium/noite-estrelada-no-lago_68067-618.jpg",
  "https://img.freepik.com/premium-photo/mountain-landscape-sunset-with-reflection-sun-s-rays-nearby-body-water-adding-stunning-unique-perspective-generative-ai-illustration_13364-262.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697328000&semt=ais",
  "https://avatars.mds.yandex.net/i?id=1a1075ca0d0e30a3d1b9786ac7d5549c408aeb95-8391840-images-thumbs&n=13",
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      loadNextImage();
    }, 2000);

    return () => clearInterval(timer);
  }, [activeIndex]);

  const loadPrevImage = () => {
    if (activeIndex <= 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const loadNextImage = () => {
    setActiveIndex((activeIndex) => (activeIndex + 1) % images.length);
  };

  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="w-[600px] flex p-2 mb-20">
        <button onClick={loadPrevImage} className="text-2xl">
          ⏮️
        </button>
        {images.map((item, index) => (
          <img
            className={
              index === activeIndex
                ? "block" + " object-contain" + " w-[550px] h-[400px]"
                : "hidden"
            }
            alt="im"
            src={item}
          />
        ))}
        <button onClick={loadNextImage} className="text-2xl">
          ⏭️
        </button>
      </div>
      <div className="flex w-[420px] justify-between">
        {images.map((item, index) => (
          <img
            className={
              index === activeIndex
                ? "w-20 h-16 border border-red-600"
                : "w-20 h-16"
            }
            onClick={() => setActiveIndex(index)}
            src={item}
            alt="dfdf"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
