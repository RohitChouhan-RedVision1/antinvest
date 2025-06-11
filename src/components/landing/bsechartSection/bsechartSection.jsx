"use client";
import React, { useEffect, useState } from "react";
import styles from './bsechartSection.module.css'
import SectionHeading from "../sectionHeading";
import axios from "axios";
import { BseReturnChart } from "@/components/charts/bseReturnChart";

export default function BseChartSection() {
    const [graphData, setGraphData] = useState([]);

    const fetchGraphData = async () => {
        try {
            const response = await axios.post("https://wealthelite.in/eliteN/bse-schemes/get-sensex-data", {
                startDate: "1997-01-01",
                endDate: "2025-03-19",
            });
            console.log("Response:", response.data);
            if (response.status === 200) {
                const data = response.data.data;
                setGraphData(data);
            }
        } catch (error) {
            console.error("Error fetching graph data:", error);
        }
    };

    useEffect(() => {
        fetchGraphData();
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto main_section px-3 md:px-0">
            <div className={styles.consultationContainer}>
                {/* Heading and Description */}
                <div className={styles.imageContainer}>
                    <SectionHeading title="Right Asset Class" variant="light" align="center" />
                    <p className="mt-3 max-w-4xl text-lg mx-auto text-center">
                        Equity market has outperformed all other investment avenues

                    </p>
                </div>

                {/* Chart and Info Section */}
                <div className="flex flex-col lg:flex-row gap-4 mt-14">
                    <div className="w-full lg:w-1/2">
                        {/* <BseReturnChart data={graphData} /> */}
                        <img
    src="/graph.jpg" // Replace this with your actual image path
    alt="Graph"
    className="w-full h-auto object-contain "
  />
                    </div>
                    <div className="w-full lg:w-1/2 bg-gradient-to-br from-[var(--rv-secondary)] via-[var(--rv-secondary)] to-[var(--rv-primary)] rounded-xl p-4 text-white">
                        <div className="grid grid-cols-6 items-center mb-3">
                            <svg
                                version="1.1"
                                id="fi_190411_3"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 507.2 507.2"
                                style={{ fill: 'var(--rv-primary)' }}
                                xmlSpace="preserve"
                                className="w-7 col-span-1"
                            >
                                <circle cx="253.6" cy="253.6" r="253.6" />
                                <g>
                                    <path
                                        style={{ fill: "#FFFFFF" }}
                                        d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8
                                            c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"
                                    />
                                    <path
                                        style={{ fill: "#FFFFFF" }}
                                        d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2
                                            c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"
                                    />
                                </g>
                            </svg>
                            <p className="mt-4 col-span-5 text-2xl">Equity (Sensex TRI) has delivered the highest long-term returns at 14.43% CAGR, proving its strength as a wealth creator.</p>
                        </div>
                        <div className="grid grid-cols-6 items-center gap-2 mb-3">
                            <svg
                                version="1.1"
                                id="fi_190411_3"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 507.2 507.2"
                                style={{ fill: 'var(--rv-primary)' }}
                                xmlSpace="preserve"
                                className="w-7 max-w-1/2"
                            >
                                <circle cx="253.6" cy="253.6" r="253.6" />
                                <g>
                                    <path
                                        style={{ fill: "#FFFFFF" }}
                                        d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8
                                            c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"
                                    />
                                    <path
                                        style={{ fill: "#FFFFFF" }}
                                        d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2
                                            c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"
                                    />
                                </g>
                            </svg>
                            <p className="mt-2 col-span-5 text-2xl"> It has outperformed all traditional investment avenues like gold, PPF, and fixed deposits by a wide margin.
</p>
                        </div>
                        <div className="grid grid-cols-6 items-center gap-2">
                            <svg
                                version="1.1"
                                id="fi_190411_3"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                viewBox="0 0 507.2 507.2"
                                style={{ fill: 'var(--rv-primary)' }}
                                xmlSpace="preserve"
                                className="w-7"
                            >
                                <circle cx="253.6" cy="253.6" r="253.6" />
                                <g>
                                    <path
                                        style={{ fill: "#FFFFFF" }}
                                        d="M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8
                                            c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z"
                                    />
                                    <path
                                        style={{ fill: "#FFFFFF" }}
                                        d="M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2
                                            c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z"
                                    />
                                </g>
                            </svg>
                            <p className="mt-2 col-span-5 text-2xl">Investing in equities helps beat inflation and grow real wealth over time — essential for long-term financial goals.</p>
                        </div>
                    </div>
                </div>
                <h4 className="text-center my-8 text-[var(--rv-primary)]">Source: Gold & Silver – RBI Data as on Mar 2024 | Bank & Co. Deposites – RBI Data as on Sept 2023 | Inflation – RBI Data as on Mar 2024, Inflation data before 2012-13 is taken as per WPI Rate and From 2012-13 CPI rate is considered | Sensex TRI-ACE MF Data as on March 2024. </h4>
            </div>
        </div>
    );
}