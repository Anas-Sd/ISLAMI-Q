import React from "react";
import { Link } from "react-router-dom";
import ReferenceData from "../assets/ReferenceData.js";

const Reference = () => {

  const { surahData, aayahData } = ReferenceData;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#052e1b] to-[#021a10] text-white px-4 sm:px-[8%] py-10 sm:py-16 font-serif">


      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 sm:mb-12">
        <Link to={-1}>
          <button className="mb-4 sm:mb-0 w-fit bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-5 py-2 rounded-lg transition duration-300">
            ← Back
          </button>
        </Link>

        <h1 className="text-2xl sm:text-4xl text-yellow-400 text-center sm:text-right w-full">
          Quran Complete Reference
        </h1>
      </div>


      <div className="w-full overflow-x-auto">


        <div className="min-w-[700px] grid grid-cols-[60px_1fr_120px_120px_100px] sm:grid-cols-[80px_1fr_150px_150px_120px] bg-emerald-900 p-3 sm:p-4 rounded-lg font-bold text-yellow-300 sticky top-0 z-10">
          <span>#</span>
          <span>Surah</span>
          <span>Ayahs</span>
          <span>Pages</span>
          <span>Ruku</span>
        </div>


        {surahData.map((surah, index) => {
          const ayahRange = aayahData[index];


          return (
            <div
              key={surah.number}
              className="min-w-[700px] grid grid-cols-[60px_1fr_120px_120px_100px] sm:grid-cols-[80px_1fr_150px_150px_120px] p-3 sm:p-4 border-b border-emerald-800 hover:bg-green-900 transition duration-200 text-sm sm:text-base"
            >
              <span>{surah.number}</span>
              <span className="whitespace-nowrap">{surah.name}</span>


              <span>
                {ayahRange.ayahStart} - {ayahRange.ayahEnd}
              </span>


              <span>
                {surah.pageStart} - {surah.pageEnd}
              </span>


              <span>

                1 - {surah.rukuEnd - surah.rukuStart + 1}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
};

export default Reference;