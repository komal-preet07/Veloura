import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import "./styles/Testimonials.css";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      skinType: "Combination Skin",
      rating: 5,
      quote: "Veloura’s serum made my skin feel baby soft! Within two weeks, my acne scars were visibly lighter.",
      image: "https://via.placeholder.com/60"
    },
    {
      id: 2,
      name: "Ananya Mehta",
      skinType: "Oily Skin",
      rating: 5,
      quote: "Finally a skincare brand that delivers what it promises. My skin looks radiant every morning.",
      image: "https://via.placeholder.com/60"
    },
    {
      id: 3,
      name: "Riya Kapoor",
      skinType: "Dry Skin",
      rating: 4,
      quote: "I love how gentle it is. My skin tone is so even now, and the texture feels silky smooth.",
      image: "https://via.placeholder.com/60"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className="section-container">
        <h2 className="testimonials-title">Loved by Real Skin</h2>
        <p className="testimonials-subtitle">
          Real results. Real confidence. Hear from the Veloura glow community.
        </p>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((t) => (
            <SwiperSlide key={t.id}>
              <div className="testimonial-card">
                <div className="stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
                <p className="quote">“{t.quote}”</p>
                <div className="user-info">
                  <img src={t.image} alt={t.name} className="user-avatar" />
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.skinType}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
