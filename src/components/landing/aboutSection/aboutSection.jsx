
import styles from './AboutSection.module.css';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection({mainData}) {
    return (
        <div className={`${styles.aboutUs} main_section`}>
            <div className="mx-auto  max-w-screen-xl px-2 lg:px-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={styles.aboutUsImages}>
                        <div className={styles.aboutImg2} data-aos="fade-left" data-aos-anchor-placement="bottom" >
                            <figure className={styles.imageAnime}>
                                <Image 
                                    src="/images/about-img-2.jpg" 
                                    alt="About Image 2" 
                                    width={600} 
                                    height={400} 
                                    layout="responsive"
                                />
                            </figure>
                        </div>
                        <div className={styles.contactCircle}>
                            <Image 
                                src="/images/contact-us-img.svg" 
                                alt="Contact Us" 
                                width={100} 
                                height={100} 
                            />
                        </div>
                    </div>
                    <div className={styles.aboutContentBody}>
                        <div className="section-title">
                            <h3 className="text-anime-style-1">about us</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Trusted guidance for <span className=''>financial growth</span></h2>
                            <p data-aos="fade-up" data-aos-anchor-placement="bottom" >With years of expertise in finance and consulting, we provide tailored strategies to help you achieve sustainable growth. Our commitment is to guide you with integrity, insight, and a personalized approach.</p>
                        </div>
                        <div className={styles.aboutContentBody}>
                            <div className="grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2 items-center">
                                <div className="">
                                    <div className="about-content-info" data-aos="fade-up" data-aos-anchor-placement="bottom" >
                                        <div className="about-goal-box wow fadeInUp" data-wow-delay="0.4s">
                                            <div className="icon-box">
                                                <Image 
                                                    src="/images/icon-financial-strategies.svg" 
                                                    alt="Financial Strategies Icon" 
                                                    width={40} 
                                                    height={40} 
                                                />
                                            </div>

                                            <div className="about-goal-box-content">
                                                <h3 className='text-[var(--rv-secondary)]'>financial strategies</h3>
                                                <p className='text-[var(--rv-secondary)]'>Tailored plans to meet your unique financial needs and goals.</p>
                                            </div>
                                        </div>
                                        {/* <div className="about-contact-box wow fadeInUp" data-wow-delay="0.6s">
                                            <div className="icon-box">
                                                <Image 
                                                    src="/images/icon-phone-white.svg" 
                                                    alt="Phone Icon" 
                                                    width={40} 
                                                    height={40} 
                                                />
                                            </div>

                                            <div className="about-contact-content">
                                                <p><a href="tel:658456975">{mainData?.mobile}</a></p>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="about-author-box wow fadeInUp" data-aos="fade-up" data-aos-anchor-placement="bottom" >
                                    <div className="about-info-box">
                                        <figure className="image-anime">
                                            <Image 
                                                src="/images/author-1.jpg" 
                                                alt="Author Image" 
                                                width={100} 
                                                height={100} 
                                                layout="intrinsic"
                                            />
                                        </figure>

                                        <div className="about-author-content">
                                            <h3>Sarah T.</h3>
                                            <p>Co. founder</p>
                                        </div>
                                    </div>
                                    <div className="about-info-list">
                                        <ul>
                                            <li className='flex items-center text-center gap-2'><FaCheckCircle />risk management</li>
                                            <li className='flex items-center text-center gap-2'><FaCheckCircle />communication</li>
                                            <li className='flex items-center text-center gap-2'><FaCheckCircle />24/7 support</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
