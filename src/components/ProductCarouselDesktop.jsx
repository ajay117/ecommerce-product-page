import { useState } from "react";
import Image1 from "../assets/images/image-product-1.jpg";
import Image2 from "../assets/images/image-product-2.jpg";
import Image3 from "../assets/images/image-product-3.jpg";
import Image4 from "../assets/images/image-product-4.jpg";

import ImgThumbNail1 from "../assets/images/image-product-1-thumbnail.jpg";
import ImgThumbNail2 from "../assets/images/image-product-2-thumbnail.jpg";
import ImgThumbNail3 from "../assets/images/image-product-3-thumbnail.jpg";
import ImgThumbNail4 from "../assets/images/image-product-4-thumbnail.jpg";

export const ProductCarouselDesktop = () => {
  const imgArr = [Image1, Image2, Image3, Image4];
  const [carouselImgIndex, setCarouselImgIndex] = useState(0);

  const imgThumbnail = [
    ImgThumbNail1,
    ImgThumbNail2,
    ImgThumbNail3,
    ImgThumbNail4,
  ];

  const mainImage = imgArr[0];

  const renderThumbnail = imgThumbnail.map((img, index) => {
    if (index === carouselImgIndex) {
      return <img key={index} className="thumbnail_light" src={img} alt="" />;
    }
    return <img key={index} src={img} alt="" />;
  });
  return (
    <div className="desktop-carousel">
      {/* <div className="main-product-img mb-2"> */}
      <img className="img_responsive" src={mainImage} alt="" />
      {/* </div> */}
      <div className="product-thumbnail-img">{renderThumbnail}</div>
    </div>
  );
};
