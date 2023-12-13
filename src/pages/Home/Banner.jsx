import React from "react";
import img1 from "../../assets/banner/img1.jpg";
import img2 from "../../assets/banner/img2.jpg";
import img3 from "../../assets/banner/img3.jpg";
import img4 from "../../assets/banner/img4.jpg";

const Banner = () => {
  return (
    <div className="carousel h-[550px] w-full my-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="w-1/2 space-y-7 text-white pl-12">
            <h2 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              earum, sint, illum aliquid. Nulla molestiae sit obcaecati ea
              architecto error nobis distinctio.
            </p>
            <div>
              <button className="btn btn-outline mr-5 text-white">Discover more</button>
              <button className="btn btn-primary">Latest project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="w-1/2 space-y-7 text-white pl-12">
            <h2 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              earum, sint, illum aliquid. Nulla molestiae sit obcaecati ea
              architecto error nobis distinctio.
            </p>
            <div>
              <button className="btn btn-outline mr-5 text-white">Discover more</button>
              <button className="btn btn-primary">Latest project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="w-1/2 space-y-7 text-white pl-12">
            <h2 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              earum, sint, illum aliquid. Nulla molestiae sit obcaecati ea
              architecto error nobis distinctio.
            </p>
            <div>
              <button className="btn btn-outline mr-5 text-white">Discover more</button>
              <button className="btn btn-primary">Latest project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full rounded-xl" />
        <div className="absolute rounded-xl flex items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] h-full">
          <div className="w-1/2 space-y-7 text-white pl-12">
            <h2 className="text-6xl font-bold ">
              Affordable Price For Car Servicing
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
              earum, sint, illum aliquid. Nulla molestiae sit obcaecati ea
              architecto error nobis distinctio.
            </p>
            <div>
              <button className="btn btn-outline mr-5 text-white">Discover more</button>
              <button className="btn btn-primary">Latest project</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
