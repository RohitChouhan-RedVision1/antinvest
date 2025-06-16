"use client";
import styles from "./ourservice.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const OurServices = ({ services,sitedata }) => {
  return (
    <div className={`${styles.serviceSectionArea} main_section`}>
      <div class="max-w-screen-xl mx-auto px-2 lg:px-0">
        <div className="w-full ">
          <div className="section-title text-center">
            <h3 className="text-anime-style-1">our services</h3>
            <h2 className="text-anime-style-2" data-cursor="-opaque">
              Smart Services to Build, Manage & Grow <span className="">Your Wealth</span>
            </h2>
            <p data-aos="fade-up" data-aos-anchor-placement="bottom">
              At <strong>{sitedata.websiteName}</strong>, we go beyond mutual fund investments to offer a complete suite of financial services designed to support your life goals. Whether you're growing your savings, improving your credit, or seeking funding, our expert team is here to guide you every step of the way.

            </p>
          </div>
        </div>
        <div className={styles.serviceSingleSlider}>
          <Swiper
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  modules={[Autoplay]}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <Link key={index} href={`/services/${service.link}`}>
                  <div className={styles.serviceBoxarea} key={index}>
                    <div className={styles.img1}>
                      <img src={`/service/${service.imageSrc}`} alt="" />
                      <div className={styles.arrow}>
                        <a href={`/services/${service.link}`}>
                          <ArrowRight />
                        </a>
                      </div>
                    </div>
                    <div className={styles.contentArea}>
                      <div className={styles.icons}>
                        <img src="/favicon.ico" alt="" />
                      </div>
                      <div class="space24"></div>
                      <h3>{service?.name}</h3>
                      <div class="space24"></div>
                      <p className="line-clamp-2">{service?.description}</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <div class="space48"></div>
          {/* <div class="btn-area1 text-center">
                        <a href="service.html" class="vl-btn1">View More All Services</a>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
