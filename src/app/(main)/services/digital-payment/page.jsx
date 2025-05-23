import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaEnvelope, FaMapLocation, FaPhone } from "react-icons/fa6";
import Image from "next/image";
import { getServiceData, getSiteData } from "@/lib/functions";
import { FAQServices } from "@/components/landing/faqservices/faqservices";

export const metadata = {
  title: "Digital Payment",
  description:
    "Experience seamless and secure financial transactions with our digital payment solutions tailored for modern users.",
};

const DigitalPayment = async () => {
  const services = await getServiceData();
  const sitedata = await getSiteData();

  return (
    <div>
      <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] bg-gray-500 overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">Digital Payment</h1>
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
                src="/service/digital-payment.jpg"
                alt="Digital Payment"
                width={800}
                height={400}
                className="rounded-xl w-full object-cover"
              />
            </div>

            <h2 className="text-3xl font-bold mb-4">
              Simplify Transactions with Digital Payment Solutions
            </h2>

            <p className="mb-4">
              <strong className="text-[--rv-primary] text-lg">D</strong>igital payments have revolutionized the way we transact, offering convenience, speed, and enhanced security. Whether it’s a bill payment, fund transfer, or retail transaction, going digital saves time and effort.
            </p>

            <p className="mb-4">
              Our digital payment services ensure that you can pay, receive, and manage your money efficiently across various channels including mobile wallets, UPI, net banking, and more.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Fast & Secure Transactions
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Multiple Payment Modes (UPI, Wallets, Cards)
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Real-Time Tracking & Notifications
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ 24/7 Access Anytime, Anywhere
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Safe & Encrypted Transactions
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-[var(--rv-secondary)]">
                ✅ Suitable for Individuals & Businesses
              </div>
            </div>

            <FAQServices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalPayment;
