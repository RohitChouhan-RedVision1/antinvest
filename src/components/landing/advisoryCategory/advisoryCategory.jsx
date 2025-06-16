"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import CryptoJS from "crypto-js";

export default function AdvisorCategory() {
  const [categories, setCategories] = useState([]);
  const [categoriesFunds, setCategoriesFunds] = useState([]);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

  const arnId = process.env.NEXT_PUBLIC_ARN_ID;
  const schemeCategory = "selectByAdvisor";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://redvisionweb.com/api/advisor-scheme-category?apikey=351b03c24a79d2f40796037e0d8c2c49",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ arnId }),
          }
        );

        const result = await response.json();
        if (result.status && result.data.length > 0) {
          setCategories(result.data);
          setSelectedCatId(result.data[0].catId);
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (catId) => {
    const myId = catId ? catId : selectedCatId;
    setSelectedCatId(myId);
    setLoading(true);
    setCategoriesFunds([]);

    try {
      const response = await axios.post(
        "https://redvisionweb.com/api/advisor-scheme-category-funds?apikey=351b03c24a79d2f40796037e0d8c2c49",
        { arnId, category: myId, schemeCategory }
      );
      console.log(response);
      setImageUrl(response.data.imageUrl);
      setCategoriesFunds(response?.data?.data || []);
    } catch (error) {
      console.error("Error fetching schemes:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    handleCategoryClick();
  }, [selectedCatId]);

  const renderStars = (rating) => {
    const totalStars = 5;
    const filled = Math.round(rating) || 0;
    const empty = totalStars - filled;
    return (
      <div className="flex items-center">
        {Array(filled)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-yellow-400">
              ★
            </span>
          ))}
        {Array(empty)
          .fill()
          .map((_, i) => (
            <span key={i} className="text-gray-300">
              ★
            </span>
          ))}
      </div>
    );
  };

  const handleSearch = (pcode) => {
    const dataToStore = {
      pcode,
      timestamp: Date.now(),
    };
    const encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(dataToStore),
      SECRET_KEY
    ).toString();

    localStorage.setItem("encryptedFundData", encrypted);
    window.location.href = "/performance/single-fund";
  };

  return (
    <div className="main_section bg-[var(--rv-secondary)]">
      <section className=" text-white   overflow-hidden">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-4 items-start">
          {/* Left - Categories & Funds */}
          <div className="w-full lg:w-1/2 bg-[#3c79b33f] rounded-2xl  p-4 lg:p-10">
            <h2 className="text-white text-center text-3xl font-bold mb-2">
              Popular Funds
            </h2>

            {/* Category Tabs */}
            <div className="flex gap-2 mb-6 flex-wrap items-center justify-center">
              {categories.map((cat) => (
                <button
                  key={cat.catId}
                  onClick={() => handleCategoryClick(cat.catId)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    selectedCatId === cat.catId
                      ? "bg-[var(--rv-primary)] text-white"
                      : "bg-[var(--rv-secondary)] text-white hover:bg-[var(--rv-primary)]"
                  }`}
                >
                  {cat.categoryName}
                </button>
              ))}
            </div>

            {/* Funds List */}
            <div className="space-y-4">
              {loading ? (
                <p>Loading funds...</p>
              ) : categoriesFunds.length > 0 ? (
                categoriesFunds.slice(0, 3).map((fund, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleSearch(fund.pcode)}
                    className="bg-white text-black p-4 rounded-lg flex cursor-pointer  items-center justify-between shadow"
                  >
                    <div className="flex items-center gap-4">
                      <div className="min-w-[50px] min-h-[50px]">
                        <Image
                          src={
                            fund.amcLogo
                              ? `${imageUrl}${fund.amcLogo}`.replace(
                                  "http://",
                                  "https://"
                                )
                              : "/default-logo.png"
                          }
                          alt="Fund Logo"
                          width={50}
                          height={50}
                          className="rounded-full border"
                        />
                      </div>
                      <div>
                        <div className="flex flex-col">
                          <p className="font-semibold truncate max-w-[260px]">
                            {fund.schemeName}
                          </p>
                          <p className="text-gray-500  text-sm">
                            {fund.subcatogary || "Equity"}{" "}
                            {fund.schemeType ? ` - ${fund.schemeType}` : ""}
                          </p>
                        </div>
                        <div className="md:hidden">
                          <p className="text-green-600 font-bold">
                            {fund.oneYearPer || "0.00"}%
                          </p>
                          <div className="text-sm">
                            {renderStars(fund.starRating)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-green-600 font-bold">
                        {fund.oneYearPer || "0.00"}%
                      </p>
                      <div className="text-sm">
                        {renderStars(fund.starRating)}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No fund data available</p>
              )}
            </div>
          </div>

          {/* Right - Explore Mutual Funds */}
          <motion.div
            className="w-full lg:w-1/2 text-white p-6 lg:py-12 rounded-xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="section-title dark-section">
              <h3 className="text-anime-style-1">Explore Mutual Funds</h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Find Investment Opportunities 
                <span className="">That Match Your Goals</span>
              </h2>
              <p data-aos="fade-up" data-aos-anchor-placement="bottom">
                Browse a curated selection of mutual funds designed to align perfectly with your unique financial objectives and risk appetite. Whether you’re planning for steady, long-term wealth creation or seeking short-term returns, our platform provides expert-backed insights, detailed fund analysis, and easy-to-use tools to help you make informed, confident investment decisions every step of the way.

              </p>
              <Link href="/performance/fund-performance">
                <button className="secondarybutton mt-6">Explore More</button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
