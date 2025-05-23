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
import SubscribCard from '@/components/partners/partners';
import SocialMediaSidebar from '@/components/socialMedia/index';
import OurServices from '@/components/landing/serviceSection/ourServices';
import AdvisorCategory from '@/components/landing/advisoryCategory/advisoryCategory';
import Calculator from '@/components/landing/calculatorSection/calculatorSection';
import WhyChooseUs from '@/components/landing/whytochoose';
import TopFeatures from '@/components/landing/featuresSection/featuresSection';
import { FAQ } from '@/components/landing/faqSection/faqSection';
import WhatWeDo from '@/components/landing/whatWeDo/page';
import { Testimonials } from '@/components/landing/testimonials/testimonials';

export default async function Page() {
     const sitedata = await getSiteData();
     const blogs=await getLatestBlogs();
     const testimonial=await getTestimonials()
     const services=await getServiceData()


  return (
    <AnimatedContent>
      <div className='overflow-x-hidden'>
        <HeroSection sitedata={sitedata} />
        <AboutSection/>
        <OurServices services={services}/>
        <AdvisorCategory/>
        <Calculator siteData={sitedata}/>
        <WhyChooseUs/>
        <TopFeatures/>
        <FAQ/>
        <WhatWeDo/>
        <Testimonials/>
      
        <BlogsSection blogs={blogs}/>

        <SocialMediaSidebar sitedata={sitedata} />
      </div>
    </AnimatedContent>
  );
}
