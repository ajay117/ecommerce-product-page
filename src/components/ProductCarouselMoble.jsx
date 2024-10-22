import { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";

export const ProductCarouselMobile = () => {
  const imgArr = [Image1, Image2, Image3, Image4];
  const [carouselImgIndex, setCarouselImgIndex] = useState(0);

  const showNextImg = () => {
    if (carouselImgIndex < imgArr.length - 1) {
      setCarouselImgIndex((carouselImgIndex) => carouselImgIndex + 1);
    }
  };

  const showPrevImg = () => {
    if (carouselImgIndex !== 0) {
      setCarouselImgIndex((carouselImgIndex) => carouselImgIndex - 1);
    }
  };
  return (
    <div className="pos_relative">
      <div>
        <img src={imgArr[carouselImgIndex]} className="img_responsive" alt="" />
      </div>

      <div className="flex align-items-center justify-space-between px-2 carousel-control">
        <span onClick={showPrevImg} className="carousel-control-icon">
          <svg width="10" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11 1 3 9l8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>

        <span onClick={showNextImg} className="carousel-control-icon">
          <svg width="10" height="18" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m2 1 8 8-8 8"
              stroke="#1D2026"
              strokeWidth="3"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
