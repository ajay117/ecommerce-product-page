import { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";

import ImgThumbNail1 from "../assets/images/image-product-1-thumbnail.jpg";
import ImgThumbNail2 from "../assets/images/image-product-2-thumbnail.jpg";
import ImgThumbNail3 from "../assets/images/image-product-3-thumbnail.jpg";
import ImgThumbNail4 from "../assets/images/image-product-4-thumbnail.jpg";

const Carousel = () => {
  const imgArr = [Image1, Image2, Image3, Image4];
  const [carouselImgIndex, setCarouselImgIndex] = useState(0);

  const mainImage = imgArr[carouselImgIndex];

  const imgThumbnailArr = [
    ImgThumbNail1,
    ImgThumbNail2,
    ImgThumbNail3,
    ImgThumbNail4,
  ];

  const renderThumbnail = imgThumbnailArr.map((img, index) => {
    if (index === carouselImgIndex) {
      return <img key={index} className="thumbnail_light" src={img} alt="" />;
    }
    return <img key={index} src={img} alt="" />;
  });

  return (
    <div className="desktop-carousel-slider">
      <div className="close-icon">
        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
      </div>
      {/* <div className="main-product-img mb-2"> */}
      <img className="img_responsive" src={mainImage} alt="" />
      {/* </div> */}
      <div className="product-thumbnail-img">{renderThumbnail}</div>
    </div>
  );
};

export const ProductCarouselDesktop = () => {
  const imgArr = [Image1, Image2, Image3, Image4];
  const [carouselImgIndex, setCarouselImgIndex] = useState(0);

  const imgThumbnailArr = [
    ImgThumbNail1,
    ImgThumbNail2,
    ImgThumbNail3,
    ImgThumbNail4,
  ];

  const mainImage = imgArr[carouselImgIndex];

  const renderThumbnail = imgThumbnailArr.map((img, index) => {
    if (index === carouselImgIndex) {
      return <img key={index} className="thumbnail_light" src={img} alt="" />;
    }
    return <img key={index} src={img} alt="" />;
  });
  return (
    <>
      <div className="desktop-carousel">
        {/* <div className="main-product-img mb-2"> */}
        <img className="img_responsive" src={mainImage} alt="" />
        {/* </div> */}
        <div className="product-thumbnail-img">{renderThumbnail}</div>
      </div>
      <Carousel />
    </>
  );
};
