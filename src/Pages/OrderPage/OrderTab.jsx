import FoodCards from "../../Component/FoodCards";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
const OrderTab = ({ items }) => {
  return (
    <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="grid grid-cols-2">
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <FoodCards item={item}></FoodCards>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
  );
};

export default OrderTab;