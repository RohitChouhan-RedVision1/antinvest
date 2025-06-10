"use client";

import React, { useEffect, useState } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import axios from "axios";
import NewsCard from "@/components/newscard";

export default function LatestNews() {
  const [ipodata, setIpodata] = useState([]);

  const [marketdata, setMarketdata] = useState([]);

  const [populardata, setPopulardata] = useState([]);

  const [activeCategory, setActiveCategory] = useState("ipo"); // Track selected category

  const [data, setData] = useState([]); // Data to be displayed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ipoRes, marketRes, popularRes] = await Promise.all([
          axios.get(
            `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/ipo-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
          ),

          axios.get(
            `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/market-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
          ),

          axios.get(
            `${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/upcoming-news/popular-news?apikey=${process.env.NEXT_PUBLIC_API_KEY}`
          ),
        ]);

        if (
          ipoRes.status === 200 &&
          marketRes.status === 200 &&
          popularRes.status === 200
        ) {
          setIpodata(ipoRes.data);

          setMarketdata(marketRes.data);

          setPopulardata(popularRes.data);

          // Set the initial data to display based on the active category

          if (activeCategory === "ipo") setData(ipoRes.data);
          else if (activeCategory === "market") setData(marketRes.data);
          else setData(popularRes.data);
        }
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run this only once

  useEffect(() => {
    // Update displayed data when active category changes

    if (activeCategory === "ipo") setData(ipodata);
    else if (activeCategory === "market") setData(marketdata);
    else setData(populardata);
  }, [activeCategory, ipodata, marketdata, populardata]);

  return (
    <section className="">
        <div className="flex bg-center bg-no-repeat bg-cover bg-[url('/images/pay-premium/pay-premium.webp')] overflow-hidden text-start justify-start items-center h-64">
        <div className="max-w-screen-xl mx-auto">
          <h1 className="text-gray-900 text-3xl md:text-5xl font-bold">
            Financial News
          </h1>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto py-[30px] md:py-[60px]">
        {/* Buttons with active class and hover effect */}
        <div className="grid md:grid-cols-3 grid-cols-1 mb-6">
          <div
            className={`font-bold px-5 py-3 rounded-s-lg cursor-pointer text-white ${
              activeCategory !== "ipo"
                ? "bg-[var(--rv-secondary)] text-white"
                : "bg-[var(--rv-primary)] text-white"
            } text-center`}
            onClick={() => setActiveCategory("ipo")}
          >
            IPO
          </div>
          <div
            className={`font-bold px-5 py-3 cursor-pointer text-white ${
              activeCategory !== "market"
                ? "bg-[var(--rv-secondary)]"
                : "bg-[var(--rv-primary)] text-white"
            } text-center`}
            onClick={() => setActiveCategory("market")}
          >
            Market
          </div>
          <div
            className={`font-bold px-5 py-3 rounded-e-lg cursor-pointer text-white ${
              activeCategory !== "upcoming"
                ? "bg-[var(--rv-secondary)]"
                : "bg-[var(--rv-primary)] text-white"
            }  text-center`}
            onClick={() => setActiveCategory("upcoming")}
          >
            Upcoming
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2">
            {data?.map((item, index) => (
              <NewsCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
