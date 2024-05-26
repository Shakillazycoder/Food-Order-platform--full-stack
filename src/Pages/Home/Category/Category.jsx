import SectionTitle from "../../../Component/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <section className="px-2">
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper mb-20"
        >
          <SwiperSlide>
            <img src={slide1} alt="" />
            <p className=" lg:text-4xl text-center -mt-16 text-white">SALADS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="" />
            <p className=" lg:text-4xl text-center -mt-16 text-white">PIZZAS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide3} alt="" />
            <p className=" lg:text-4xl text-center -mt-16 text-white">SOUPS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="" />
            <p className=" lg:text-4xl text-center -mt-16 text-white">DESSERTS</p>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide5} alt="" />
            <p className=" lg:text-4xl text-center -mt-16 text-white">SALADS</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Category;
