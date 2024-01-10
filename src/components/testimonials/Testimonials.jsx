import "./testimonials.min.css";
import { RxAvatar } from "react-icons/rx";

import { Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    review:
      "Długi czas kombinowałem z różnymi budżetowymi stolikami aż trafiłem na tą firmę. Ja polecam. Kontakt, uzgodnienia projektu, wysyłka.... wszystko na najwyższym poziomie 👍😊Ps. Zamówiłem już drugą.",
  },
  {
    id: 2,
    review:
      "Konkretna szafka widać przemyślana a wykonanie to mistrzostwo, gratuluję😏",
  },
  {
    id: 3,
    review:
      "Wykonanie pierwsza klasa, super kontakt, bardzo przystępna cena. Jest to mój pierwszy mebel wykonany przez tą firmę, ale na pewno nie ostatni. Szczerze polecam.",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Co piszą o nas nasi klienci?</h5>
      <h2>Opinie</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__review-container">
                <div>
                  <RxAvatar className="client__review-icon"/>
                </div>
                <div className="client__review-text">
                  <h4 className="client__review-name">Tajemne Nazwisko</h4>
                  <p>{review}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
