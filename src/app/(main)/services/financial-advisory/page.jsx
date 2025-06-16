import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaRegCheckCircle } from "react-icons/fa";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import { FAQServices } from "@/components/landing/faqservices/faqservices";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { serviceFaqs } from "@/data/faqs";
export const metadata = {
  title: "Financial Advisory",
  description:
    "Start  with Financial Advisory in Antinvest",
};

const MutualFunds = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();
  const faqs = serviceFaqs["finamncialAdvisory"] || [];



  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto ">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Financial Advisory
          </h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        <div className=" grid md:grid-cols-3 gap-10">
          {/* Left Sticky Sidebar */}
          <div className="space-y-6 md:sticky top-24 self-start h-fit">
            {/* Services List */}
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[--rv-primary] mb-4">
                Our Service 
              </h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li
                    key={i}
                    className="flex justify-between items-center border-b pb-2 hover:text-[--rv-primary] group"
                  >
                    <Link
                      href={`/services/${service.link}`}
                      className="flex-1 transition-colors duration-300"
                    >
                      + {service.name}
                    </Link>
                    <span className="text-xl -rotate-45 transition-transform duration-300 group-hover:rotate-0">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="bg-cover bg-center rounded-xl shadow-lg p-6 md:p-8 text-white max-w-md w-full mx-auto"
              style={{ backgroundImage: "url('/stay-connected.jpg')" }}
            >
              <div className="bg-white bg-opacity-70 backdrop-blur-sm p-4 rounded-lg text-[var(--rv-secondary)]">
                <h4 className="text-2xl font-bold text-[--rv-primary] mb-4 text-center">
                  Stay Connected with Us!
                </h4>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-[24px] flex items-center justify-center text-[--rv-primary]">
                      <FaPhone className="text-xl" />
                    </div>
                    <span className="flex-1">{sitedata.mobile}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-[24px] flex items-center justify-center text-[--rv-primary]">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <span className="flex-1 break-all">{sitedata.email}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="min-w-[24px] h-[24px] flex items-center justify-center text-[--rv-primary] mt-1">
                      <FaMapLocation className="text-xl" />
                    </div>
                    <span className="flex-1">{sitedata.address}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Link href="/contact-us">
                    <button className="primarybutton px-6 py-2 rounded-md text-sm">
                      Get In Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src="/service/financial-advisory-02.webp"
                alt="loan credit card"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold  mb-4">
              Financial Advisory – Expert Guidance for Your Financial Goals
            </h2>

            <p className=" mb-4">
              <strong className="text-[--rv-primary] text-lg">G</strong>et personalized financial advice from Ant Invest’s experienced advisors to help you plan, manage, and grow your wealth confidently. Whether it’s retirement planning, tax strategies, or investment decisions, our expert guidance ensures your financial goals stay on track.
            </p>

           

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />{" "}
                Tailored Financial Plans
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />{" "}
                 Goal-Based Investment Strategies
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />{" "}
                Tax & Retirement Planning
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />{" "}
                Risk Management Insights
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />{" "}
                Ongoing Portfolio Review
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[rv-secondary)]">
                <IoMdCheckmarkCircleOutline className="text-2xl text-green-600" />{" "}
                Transparent & Trusted Advice
              </div>
            </div>

             <p className=" mb-4">
             Partner with us to make smarter financial decisions and secure your future.
            </p>
            <FAQServices faqs={faqs}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MutualFunds;
