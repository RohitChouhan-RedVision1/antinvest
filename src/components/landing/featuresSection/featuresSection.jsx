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
            title: 'Investment Calculator',
            description: 'Estimate your future returns with SIP or lump sum plans, helping you invest with clarity and confidence.',
            images: {
                default: '/images/calculator.svg',
                hover: '/images/calculator.svg'
            }
        },
        {
            animation: "fade-up",
            link: "/tools/financial-health",
            title: ' Financial Health Monitor',
            description: 'Track income, expenses, savings, and overall financial well-being to stay on top of your goals.',
            images: {
                default: '/images/medical-report.svg',
                hover: '/images/medical-report.svg'
            }
        },
        {
            link: "/tools/risk-profile",
            animation: "fade-up",
            title: 'Risk Assessment Tool',
            description: 'Determine your investment risk profile to get matched with portfolios that fit your comfort level.',
            images: {
                default: '/images/profile-account.svg',
                hover: '/images/profile-account.svg'
            }
        },
        {
            link: "/tools/pay-premium-online",
            animation: "fade-right",
            title: 'Online Premium Payment',
            description: 'Make hassle-free and secure payments for your mutual fund or insurance premiums online.',
            images: {
                default: '/images/vip-card.svg',
                hover: '/images/vip-card.svg'
            }
        },
        {
            link: "/blogs",
            animation: "fade-right",
            title: 'Knowledge Hub',
            description: 'Learn through curated articles, tips, and expert insights to make smarter financial choices.',
            images: {
                default: '/images/link.svg',
                hover: '/images/link.svg'
            }
        },
        {
            animation: "fade-right",
            link: "/",
            title: ' Paperless Onboarding',
            description: 'Get started instantly with a fully digital, secure, and paperless KYC and investment process.',
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
                                Empowering You with <span>Smart Financial Tools</span>
                            </h2>
                            <p data-aos="fade-up" data-aos-anchor-placement="bottom">
                               Access a suite of powerful, easy-to-use tools designed to simplify investing, improve financial decision-making, and streamline your wealth journey — all in one secure platform.
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