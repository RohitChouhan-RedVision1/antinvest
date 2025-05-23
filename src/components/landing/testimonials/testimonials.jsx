"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import styles from './testimonials.module.css';
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from "next/image";

export function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    fetch('/api/testimonials')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(result => {
        setTestimonials(result);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function createMarkup(post) {
    return { __html: post };
  }

  return (
    <div className="main_section bg-[#F9F9F9]">
      <div className="mx-auto  max-w-screen-xl">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Left Content */}
          <div className="col-span-2">
            <div className={styles.testimonialcontent}>
              <div className="section-title">
                <h3 className="wow fadeInUp">Our Testimonial</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  1250+ Customers Say <span>About Our Finance</span>
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.2s">
                  With over 1,250 satisfied clients, our finance and consulting services have earned praise for reliability, personalized guidance, and impactful results.
                </p>
              </div>
               <Link href="/contact-us">
                <button className="primarybutton">Contact Now</button>
              </Link>
            </div>
          </div>

          {/* Right Slider */}
          <div className="col-span-3 mt-5 lg:mt-0">
            <div className={styles.testimonialsliderbox}>
              <div className={styles.testimonialslider}>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={1}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  loop={true}
                >
                  <div className="swiper-wrapper" data-cursor-text="Drag">
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-item">
                          <div className={styles.testimonialheader}>
                            <div className={styles.customerlogo}>
                              <Image
                                src="/logo.png"
                                alt="logo"
                                width={150}
                                height={50}
                                className="rounded"
                              />
                            </div>
                            <div className={styles.testimonialquotes}>
                              <Image src="/images/testimonial-quotes.svg" alt="Quotes" width={50} height={50} />
                            </div>
                          </div>
                          <div className={styles.testimonialbody}>
                            <div>
                              <p
                                className="line-clamp-3 bg-transparent"
                                dangerouslySetInnerHTML={createMarkup(testimonial.content)}
                              ></p>
                              <button
                                className="text-[var(--rv-primary)] mt-2 underline"
                                onClick={() => {
                                  setSelectedTestimonial(testimonial);
                                  setShowModal(true);
                                }}
                              >
                                Read More
                              </button>
                            </div>
                          </div>
                          <div className={styles.testimonialauthor}>
                            <div className={styles.authorimage}>
                              <figure>
                                <Image src={testimonial.image.url} alt={testimonial.authorName} width={100} height={100} />
                              </figure>
                            </div>
                            <div className={styles.authorcontent}>
                              <h3>{testimonial.author} / <span>{testimonial.designation}</span></h3>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                  <div className={styles.testimonialpagination}></div>
                </Swiper>
              </div>

              {/* Rating Boxes */}
              <div className={styles.customerratingboxes}>
                {/* <div className={styles.customerratingbox}>
                  <div className={styles.customerratingimage}>
                    <Image src="/images/icon-google.svg" alt="Google Rating" width={50} height={50} />
                  </div>
                  <div className={styles.customerratingcontent}>
                    <p>Google Rating</p>
                    <div className={styles.customerratingcounter}>
                      <h3>5.0</h3>
                      <div className={styles.customerratingstarbox}>
                        {[...Array(5)].map((_, i) => (
                          <i key={i} className="fa-solid fa-star"></i>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className={styles.customerratingbox}>
                  <div className={styles.customerratingcounter}>
                    <p>5.0 Rated</p>
                  </div>
                  <div className={styles.customerratingstarbox}>
                    <div className={styles.customerratingstar}>
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star"></i>
                      ))}
                    </div>
                    <div className={styles.starratingimg}>
                      <Image src="/images/customer-rating-img.svg" alt="Rating" width={50} height={50} />
                    </div>
                  </div>
                </div>
                <div className={`${styles.customerratingbox} ${styles.customerratingcontent}`}>
                  <p>Total Rating <span>5.0</span> based on 1250+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Full Testimonial */}
      {showModal && selectedTestimonial && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center px-4">
          <div className="bg-white max-w-lg w-full p-6 rounded-lg relative shadow-lg">
            <button
              className="absolute top-2 right-3 text-black text-2xl font-bold"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h3 className="text-lg font-semibold mb-4">{selectedTestimonial.author}</h3>
            <p dangerouslySetInnerHTML={createMarkup(selectedTestimonial.content)}></p>
          </div>
        </div>
      )}
    </div>
  );
}
