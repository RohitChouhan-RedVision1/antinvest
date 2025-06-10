import styles from './FeaturesSection.module.css';
import React from 'react';
import { calculators } from '@/data/calculators'; // Assuming this import is still needed elsewhere
import Image from 'next/image';
import Link from 'next/link';

const TopFeatures = () => {
    const cardData = [
        {
            animation: "fade-right",
            link: "/tools/calculators",
            title: 'Financial Calculator',
            description: 'Utilize our powerful financial calculators to plan your investments, loans, and savings with precision.',
            images: {
                default: '/images/calculator.svg',
                hover: '/images/calculator.svg'
            }
        },
        {
            animation: "fade-up",
            link: "/tools/financial-health",
            title: 'Financial Health',
            description: 'Assess your current financial standing and get personalized recommendations for improvement and growth.',
            images: {
                default: '/images/medical-report.svg',
                hover: '/images/medical-report.svg'
            }
        },
        {
            link: "/tools/risk-profile",
            animation: "fade-up",
            title: 'Risk Profile',
            description: 'Understand your investment risk tolerance to align your portfolio with your comfort level and financial goals.',
            images: {
                default: '/images/profile-account.svg',
                hover: '/images/profile-account.svg'
            }
        },
        {
            link: "/tools/pay-premium-online",
            animation: "fade-right",
            title: 'Pay Premium Online',
            description: 'Conveniently pay your insurance premiums online, ensuring your policies stay active and secure.',
            images: {
                default: '/images/vip-card.svg',
                hover: '/images/vip-card.svg'
            }
        },
        {
            link: "/tools/useful-links",
            animation: "fade-right",
            title: 'Useful Links',
            description: 'Access a curated collection of valuable external resources and links related to finance and investment.',
            images: {
                default: '/images/link.svg',
                hover: '/images/link.svg'
            }
        },
        {
            animation: "fade-right",
            link: "/financial-news",
            title: 'Financial News',
            description: 'Stay updated with the latest financial news, market insights, and expert analysis to make informed decisions.',
            images: {
                default: '/images/cloud-file.svg',
                hover: '/images/cloud-file.svg'
            }
        },
    ];

    return (
        <div className={`${styles.ourFeature} main_section`}>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 section-row items-center">
                    <div>
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
                                    {/* Use item.description here */}
                                    <p>{item.description}</p>
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