
import styles from './FeaturesSection.module.css';
import React from 'react';
import { calculators } from '@/data/calculators';
import Image from 'next/image';
import Link from 'next/link';

const TopFeatures = () => {
    const cardData = [
        // {
        //     animation: "fade-right",
        //     link: "/tools/download-forms",
        //     title: 'Download Form',
        //     images: {
        //         default: '/images/cloud-file.svg',
        //         hover: '/images/cloud-file.svg'
        //     }
        // },
        {
            animation: "fade-up",
            link: "/tools/calculators",
            title: 'Financial Calculator',
            images: {
                default: '/images/calculator.svg',
                hover: '/images/calculator.svg'
            }
        },
        {
            animation: "fade-up",
            link: "/tools/financial-health",
            title: 'Financial Health',
            images: {
                default: '/images/medical-report.svg',
                hover: '/images/medical-report.svg'
            }
        },
        {
            link: "/tools/risk-profile",
            animation: "fade-right",
            title: 'Risk Profile',
            images: {
                default: '/images/profile-account.svg',
                hover: '/images/profile-account.svg'
            }
        },
        {
            link: "/tools/pay-premium-online",
            animation: "fade-right",
            title: 'Pay Premium Online',
            images: {
                default: '/images/vip-card.svg',
                hover: '/images/vip-card.svg'
            }
        },
        {
            link: "/tools/useful-links",
            animation: "fade-right",
            title: 'Useful Links',
            images: {
                default: '/images/link.svg',
                hover: '/images/link.svg'
            }
        }
    ];
    return (
        <div className={`${styles.ourFeature} main_section`}>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 section-row items-center">
                    <div >
                        <div className="section-title dark-section">
                            <h3 className="wow fadeInUp">Our Feature</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">
                                Key features of our finance <span>and consulting</span>
                            </h2>
                            <p data-aos="fade-up" data-aos-anchor-placement="bottom">
              Discover a range of services designed to support your financial
              journey — from investments to loans, credit sourcing, and more.
              Our expert guidance ensures you make informed and confident
              financial decisions.
            </p>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <Link href="/contact-us">
                <button className="secondarybutton">Contact Now</button>
              </Link>
                    </div>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-3`}>
                    {cardData?.map((item, index) => (
    <Link href={item.link} key={index} className={`${styles.ourFeatureItem} wow fadeInUp`} data-wow-delay={`${index * 0.2}s`}>
        <div>
            <div className={styles.iconBox}>
                <Image src={`/images/icon-our-feature-${index + 1}.svg`} alt="Feature Icon" width={200} height={200} layout="responsive" />
            </div>
            <div className={styles.featureItemContent}>
                <h3>{item.title}</h3>
                <p>
                    Our Financial Solutions offer tailored strategies to meet your unique goals, focusing on growth and risk management.
                </p>
            </div>
        </div>
    </Link>
))}

                </div>
  
            </div>
        </div>
    );
};

export default TopFeatures;
