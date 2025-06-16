"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../aboutSection/AboutSection.module.css"

const fadeInVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.5 }
  })
};

const SubscribCard = ({sitedata}) => {
  const partners = [
    { src: "/logos/antworksmoney.png", link: "https://www.antworksmoney.com" },
    { src: "/logos/antpay.png", link: "https://play.google.com/store/apps/details?id=com.antworksmoney.antpay&hl=en_IN" },
    { src: "/logos/antpay-bizhub.png", link: "https://antpay.in/affiliate-index" },
    { src: "/logos/lendsocial.png", link: "https://lendsocial.money/" },
    { src: "/logos/womingo.png", link: "https://womingo.com/" },
    { src: "/logos/bizhub-india.png", link: "https://bizhubindia.com/" },
    { src: "/logos/mii-cart.png", link: "https://www.miicart.in/" },
  ];

  return (
    <div>
        <div className="mx-auto  max-w-screen-xl px-2 lg:px-0 main_section">
     <div className={`${styles.sectiontitle2} text-center`}>
  <h3 className="text-anime-style-1">our partners</h3>
  <h2 className="text-anime-style-2" data-cursor="-opaque">
    Trusted by Leading <span className=''> Product Partners
</span>
  </h2>
  <p data-aos="fade-up" data-aos-anchor-placement="bottom">
    At {sitedata.websiteName}, we collaborate with a wide range of top AMCs and product partners to offer you the best financial solutions. Below is a showcase of our esteemed partners — click on any logo to explore more about their offerings.
  </p>
</div>


      <Marquee speed={60} gradient={false} pauseOnHover={true} className="mt-6">
        {partners.map(({ src, link }, index) => (
          <div key={index} className="mx-8 flex items-center justify-center">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <Image
                src={src}
                alt={`AMC Logo ${index + 1}`}
                width={120}
                height={100}
                className=" transition ease-in-out duration-150"
              />
            </a>
          </div>
        ))}
      </Marquee>
    </div>
    </div>
  );
};

export default SubscribCard;
