import React from 'react'
import './rec.css'
import Img6 from "../images/img_6.png"
import Img2 from "../images/img_2.png"
import Img3 from "../images/img_3.png"
import Img4 from "../images/img_4.png"
import Img5 from "../images/img_5.png"
import Img1 from "../images/img_1.png"

const Recd = () => {
  return (
    <div class='mainn'>
        <div class="gallery-wrapper">
  <div class="image-wrapper">
    <a className=" abc" href="#lightbox-image-1">
      <img class="images" src={Img2} alt=""/>
      <div class="image-title">Tshirt-1</div>
    </a>
  </div>
  <div class="image-wrapper">
    <a className=" abc" href="#lightbox-image-2">
      <img class="images" src={Img3} alt=""/>
      <div class="image-title">Tshirt-2</div>
    </a>
  </div>
  <div class="image-wrapper">
    <a className=" abc" href="#lightbox-image-3">
      <img class="images" src={Img4} alt=""/>
      <div class="image-title">Tshirt-3</div>
    </a>
  </div>
  <div class=" col-sm-6 image-wrapper">
    <a className=" abc" href="#lightbox-image-4">
      <img class="images" src={Img5} alt=""/>
      <div class="image-title">Tshirt-4</div>
    </a>
  </div>
  <div class="col-sm-6 image-wrapper">
    <a className=" abc" href="#lightbox-image-5">
     <img class="images" src={Img6} alt=""/>
      <div class="image-title">Tshirt-5</div>
    </a>
  </div>
  <div class="col-sm-6 image-wrapper">
    <a className=" abc" href="#lightbox-image-5">
     <img class="images" src={Img1} alt=""/>
      <div class="image-title">Tshirt-5</div>
    </a>
  </div>
</div>

<div class="gallery-lightboxes">
  
  <div class="image-lightbox" id="lightbox-image-1">
    <div class="image-lightbox-wrapper">
      <a href="#" class="close"></a>
      <a href="#lightbox-image-6" class="arrow-left"></a>
      <a href="#lightbox-image-2" class="arrow-right"></a>
      <img src={Img2} alt=""/>
      <div class="image-title">Tshirt-1</div>
    </div>
  </div>
  
  <div class="image-lightbox" id="lightbox-image-2">
    <div class="image-lightbox-wrapper">
      <a href="#" class="close"></a>
      <a href="#lightbox-image-1" class="arrow-left"></a>
      <a href="#lightbox-image-3" class="arrow-right"></a>
      <img src={Img3} alt=""/>
      <div class="image-title">Tshirt-2</div>
    </div>
  </div>
  
  <div class="image-lightbox" id="lightbox-image-3">
    <div class="image-lightbox-wrapper">
      <a href="#" class="close"></a>
      <a href="#lightbox-image-2" class="arrow-left"></a>
      <a href="#lightbox-image-4" class="arrow-right"></a>
      <img src={Img4} alt=""/>
      <div class="image-title">Tshirt-3</div>
    </div>
  </div>
  <div class="image-lightbox" id="lightbox-image-4">
    <div class="image-lightbox-wrapper">
      <a href="#" class="close"></a>
      <a href="#lightbox-image-3" class="arrow-left"></a>
      <a href="#lightbox-image-5" class="arrow-right"></a>
      <img src={Img5} alt=""/>
      <div class="image-title">Tshirt-4</div>
    </div>
  </div>
  <div class="image-lightbox" id="lightbox-image-5">
    <div class="image-lightbox-wrapper">
      <a href="#" class="close"></a>
      <a href="#lightbox-image-4" class="arrow-left"></a>
      <a href="#lightbox-image-6" class="arrow-right"></a>
      <img src={Img6} alt=""/>
      <div class="image-title">Tshirt-5</div>
    </div>
  </div>
  <div class="image-lightbox" id="lightbox-image-6">
    <div class="image-lightbox-wrapper">
      <a href="#" class="close"></a>
      <a href="#lightbox-image-5" class="arrow-left"></a>
      <a href="#lightbox-image-1" class="arrow-right"></a>
      <img src={Img1} alt=""/>
      <div class="image-title">Tshirt-6</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Recd