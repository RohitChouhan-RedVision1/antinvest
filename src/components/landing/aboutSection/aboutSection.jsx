
import styles from './AboutSection.module.css';
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";

export default function AboutSection({sitedata}) {
     const features = [
        {
            title: "Personalized Mutual Fund Plans",
            description: "Investment strategies tailored to your financial goals and risk profile."
        },
        {
            title: "Expert-Curated Portfolios",
            description: "Handpicked mutual funds backed by financial expertise."
        },
        {
            title: "Real-Time Tracking & Insights",
            description: "Monitor your portfolio and market trends anytime, anywhere."
        },
        {
            title: "Simple, Secure Platform",
            description: "Easy-to-use and fully transparent, with data privacy you can trust."
        }
    ];
    return (
        <div className={`${styles.aboutUs} main_section`}>
            <div className="mx-auto  max-w-screen-xl px-2 lg:px-0">
               <div className={`${styles.sectiontitle2} text-center`}>
                            <h3 className="text-anime-style-1">about us</h3>
                            <h2 className="text-anime-style-2" data-cursor="-opaque">Empowering Your Wealth Journey through <span className=''> Mutual Funds
</span></h2>
                            <p data-aos="fade-up" data-aos-anchor-placement="bottom" >At {sitedata?.websiteName}, we help you take control of your financial future with expert mutual fund portfolios, personalized plans, and real-time insights. Our easy-to-use platform combines technology and expertise to help you grow wealth confidently.
</p>
                        </div>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className={styles.aboutUsImages}>
                        <div className={styles.aboutImg2} data-aos="fade-left" data-aos-anchor-placement="bottom" >
                            <figure className={styles.imageAnime}>
                                <Image 
                                    src="/images/about-img-2.webp" 
                                    alt="About Image 2" 
                                    width={600} 
                                    height={400} 
                                    layout="responsive"
                                />
                            </figure>
                        </div>
                        {/* <div className={styles.contactCircle}>
                            <Image 
                                src="/images/contact-us-img.svg" 
                                alt="Contact Us" 
                                width={100} 
                                height={100} 
                            />
                        </div> */}
                    </div>
                    <div className={styles.aboutContentBody}>
                        
                        <p><span className='text-[25px] font-semibold text-[var(--rv-secondary)]'>Smart Mutual Fund Solutions for <span className='text-[var(--rv-primary)]'>Wealth Growth</span></span>  {sitedata?.websiteName} makes mutual fund investing simple and accessible for all. With expert guidance and personalized plans, we help you choose from top-rated mutual funds to grow your wealth confidently. Whether through SIPs or lump sum investments, our transparent platform offers real-time tracking and risk management tools to keep your financial goals on track. Your growth is our priority.
</p>


                        <div className={styles.aboutContentBody}>
                            <p className='mt-3'><span className='text-[20px]  font-bold text-[var(--rv-secondary)]'>What Sets Ant Invest Apart </span> </p>
                            <ul className="mt-2 space-y-4">
                                {features.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-gray-800">
                                        <FaCheckCircle className="mt-1 text-[var(--rv-primary)]" />
                                        <div>
                                            <strong>{item.title}</strong>
                                            <p className="text-sm mt-1">{item.description}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
