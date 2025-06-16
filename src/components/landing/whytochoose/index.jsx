"use client";
import Image from "next/image";
import React from "react";
import styles from "./WhyChooseUs.module.css";
import { CircleArrowLeft } from "lucide-react";
import Link from "next/link";

const WhyChooseUs = ({ sitedata }) => {
  const data = [
    {
      title: "Proven Financial Expertise",
      description:
        "Expert-curated strategies built on strong knowledge of mutual funds and financial planning.",
    },
    {
      title: "All-in-One Financial Services",
      description:
        "Investments, loans, and credit support — all in one convenient place.",
    },
    {
      title: "Consulting-First Approach",
      description:
        "No pressure, just honest guidance that respects your time and goals.",
    },

    {
      title: "Smart, Secure Platform",
      description:
        "Easy-to-use, transparent, and secure tools to manage and grow your wealth.",
    },
  ];
  return (
    <div className={`${styles.whyChooseUs} main_section`}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          <div className="col-lg-6">
            <div className={styles.whyChooseContent}>
              <div className="section-title">
                <h3 className="wow fadeInUp">Why Choose Us</h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Your Partner in Smarter <span>Financial Decisions</span>
                </h2>
                <p data-aos="fade-up" data-aos-anchor-placement="bottom">
                  {sitedata?.websiteName} simplifies your financial journey with
                  expert strategies, personalized support, and a secure,
                  user-friendly platform. Whether you're investing in mutual
                  funds or improving your credit, we help you make confident,
                  informed choices.
                </p>
              </div>
              <div
                className={`${styles.whyChooseBoxList} grid grid-cols-1 lg:grid-cols-2`}
                data-aos="fade-up"
                data-aos-anchor-placement="bottom"
              >
                {data.map((item, index) => (
                  <div
                    key={index}
                    className={`${styles.whyChooseBox} mb-[30px] wow fadeInUp`}
                    data-wow-delay={`${0.2 * (index + 1)}s`}
                  >
                    <div className={styles.iconBox}>
                      {/* Show different image logic based on even or odd index */}
                      {index % 2 === 0 ? (
                        // Even index: Show two images
                        <div className="flex gap-2">
                          <Image
                            src={`/images/icon-why-choose-${1}.svg`}
                            alt=""
                            width={40}
                            height={40}
                          />
                        </div>
                      ) : (
                        // Odd index: Show one image
                        <Image
                          src={`/images/icon-why-choose-${2}.svg`}
                          alt=""
                          width={50}
                          height={50}
                        />
                      )}
                    </div>

                    <div className={styles.whyChooseBoxContent}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact-us">
                <button className="secondarybutton">Get Start</button>
              </Link>
              {/* <div className={`${styles.whyChooseList}`} data-aos="fade-up" data-aos-anchor-placement="bottom" >
                                <ul>
                                    <li className='flex items-center justify-center gap-x-3'><span><CircleArrowLeft color='var(--rv-secondary)' /></span> Strategic Financial Planning</li>
                                    <li className='flex items-center justify-center gap-x-3'><span><CircleArrowLeft color='var(--rv-secondary)'/></span> Expert Investment Advisory</li>
                                </ul>
                            </div> */}
            </div>
          </div>

          <div className="col-lg-6">
            <div className={styles.whyChooseImage}>
              <div
                className={styles.whyChooseImg1}
                data-aos="fade-left"
                data-aos-anchor-placement="top-center"
              >
                <figure className="image-anime">
                  <Image
                    src="/images/why-choose-us-1.webp"
                    alt=""
                    width={500}
                    height={300}
                  />
                </figure>
              </div>
              <div
                className={styles.whyChooseImg2}
                data-aos="fade-left"
                data-aos-anchor-placement="bottom"
              >
                <figure className="image-anime">
                  <Image
                    src="/images/why-choose-us-2.webp"
                    alt=""
                    width={500}
                    height={300}
                  />
                </figure>
              </div>
              {/* <div className={styles.whyChooseContactCircle}>
                                <Image src="/images/contact-us-img.svg" alt="" width={100} height={100} />
                            </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
