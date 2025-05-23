import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  FaEnvelope,
  FaMapLocation,
  FaPhone,
} from "react-icons/fa6";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";
import { FAQServices } from "@/components/landing/faqservices/faqservices";

export const metadata = {
  title: "P2P Financing",
  description:
    "Unlock new lending and borrowing opportunities with Peer-to-Peer Financing platforms.",
};

const P2PFinancing = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">P2P Financing</h1>
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
                src="/p2p-financing-banner.jpg"
                alt="P2P Financing"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Revolutionize Lending & Borrowing with P2P Financing
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">P</strong>eer-to-Peer (P2P) Financing connects borrowers directly with lenders, eliminating traditional intermediaries like banks. It offers better interest rates, more transparency, and quicker processes.
            </p>

            <p className="mb-4">
              Whether you're looking to borrow funds for personal needs or invest in loans for higher returns, P2P platforms provide the flexibility and control you need.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Direct Lender-to-Borrower Model
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Higher Returns for Lenders
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Flexible Loan Terms
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Quick Online Processing
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Transparent & Secure Transactions
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Ideal for Personal & Business Needs
              </div>
            </div>

            <FAQServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default P2PFinancing;
