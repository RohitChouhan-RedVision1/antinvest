import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";
import { FAQServices } from "@/components/landing/faqservices/faqservices";

export const metadata = {
  title: "Loan Sourcing",
  description:
    "Find the best personal, home, or business loans tailored to your financial needs, with expert guidance and trusted lending partners.",
};

const LoanSourcing = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">Loan Sourcing</h1>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        <div className="py-10 grid md:grid-cols-3 gap-10">

          {/* Left Sticky Sidebar */}
          <div className="space-y-6 md:sticky top-24 self-start h-fit">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold text-[--rv-primary] mb-4">Our Services</h3>
              <ul className="space-y-3">
                {services.map((service, i) => (
                  <li key={i} className="flex justify-between items-center border-b hover:text-[--rv-primary] pb-2">
                    <Link href={`/${service.link}`} className="flex-1 transition-colors duration-300">
                      + {service.name}
                    </Link>
                    <span>→</span>
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
                    <FaPhone className="text-xl text-[--rv-primary]" />
                    <span>{sitedata.mobile}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaEnvelope className="text-xl text-[--rv-primary]" />
                    <span>{sitedata.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaMapLocation className="text-xl text-[--rv-primary]" />
                    <span>{sitedata.address}</span>
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="/contact-us">
                    <button className="primarybutton px-6 py-2 rounded-md text-sm">Get In Touch</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden mb-6">
              <Image
                src="/loan-sourcing-banner.jpg"
                alt="Loan Sourcing"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Find the Right Loan to Meet Your Financial Goals
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">L</strong>oans provide the financial support you need for personal, home, or business purposes. Whether you seek low interest rates, flexible repayment terms, or quick approval, our sourcing experts connect you with top lenders.
            </p>

            <p className="mb-4">
              We evaluate your credit profile and requirements to recommend loans that suit your situation. Benefit from expert assistance in documentation, eligibility checks, and application processes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Access to Leading Lending Institutions
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Tailored Loan Options & Terms
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Guidance on Documentation & Approval
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Support for First-Time Borrowers
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Competitive Interest Rates & Offers
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Transparent & Fast Loan Processing
              </div>
            </div>

            <FAQServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanSourcing;
