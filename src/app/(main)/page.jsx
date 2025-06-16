import HeroSection from '@/components/landing/heroSection/heroSection';
import AboutSection from '@/components/landing/aboutSection/aboutSection';
import RecordsSection from '@/components/landing/recordsSection/recordsSection';
import FeaturesSection from '@/components/landing/featuresSection/featuresSection';
import ContactUs from '@/components/landing/contactSection/contactSection';
import BlogsSection from '@/components/landing/blogsSection/blogsSection';
import BseChartSection from '@/components/landing/bsechartSection/bsechartSection';
import SipCalculator from '@/components/landing/sipcalculatort';
import AnimatedContent from '@/components/AnimatedContent';
import { getLatestBlogs, getServiceData, getSiteData, getSocialMedia, getTestimonials } from '@/lib/functions';

import SocialMediaSidebar from '@/components/socialMedia/index';
import OurServices from '@/components/landing/serviceSection/ourServices';
import AdvisorCategory from '@/components/landing/advisoryCategory/advisoryCategory';
import Calculator from '@/components/landing/calculatorSection/calculatorSection';
import WhyChooseUs from '@/components/landing/whytochoose';
import TopFeatures from '@/components/landing/featuresSection/featuresSection';
import { FAQ } from '@/components/landing/faqSection/faqSection';
import WhatWeDo from '@/components/landing/whatWeDo/page';
import { Testimonials } from '@/components/landing/testimonials/testimonials';
import SubscribCard from '@/components/landing/partnersSection';

export default async function Page() {
     const sitedata = await getSiteData();
     const blogs=await getLatestBlogs();
     const testimonial=await getTestimonials()
     const services=await getServiceData()


  return (
    <AnimatedContent>
      <div className='overflow-x-hidden'>
        <HeroSection sitedata={sitedata} />
        <AboutSection sitedata={sitedata}/>
        <SubscribCard sitedata={sitedata}/>
        <AdvisorCategory/>
        <OurServices services={services} sitedata={sitedata}/>
        
        <Calculator siteData={sitedata}/>
        <WhyChooseUs sitedata={sitedata}/>
        <TopFeatures/>
       
        <WhatWeDo sitedata={sitedata}/>
         <FAQ/>
        <Testimonials sitedata={sitedata}/>
      
        <BlogsSection blogs={blogs}/>

        <SocialMediaSidebar sitedata={sitedata} />
      </div>
    </AnimatedContent>
  );
}
