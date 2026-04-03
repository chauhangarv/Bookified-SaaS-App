"use client";
import React from "react";
import { Plus } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full pt-12 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main beige card container */}
        <div className="bg-yellow-50 rounded-2xl p-12 flex items-center gap-12">
          {/* Left Section - Text and Button */}
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Library
            </h1>
            <p className="text-gray-700 text-base leading-relaxed mb-8">
              Convert your books into interactive AI conversations. Listen,
              learn, and discuss your favorite reads.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-shadow duration-200 border border-gray-200">
              <Plus size={20} />
              Add new book
            </button>
          </div>

          {/* Center Section - Illustration */}
          <div className="flex-1 flex items-center justify-center">
            <div className="w-80 h-80 relative">
              {/* SVG Illustration of Vintage Books and Globe */}
              <svg
                viewBox="0 0 300 300"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Books Stack - Left side */}
                <rect x="40" y="180" width="60" height="80" fill="#8B4513" rx="2" />
                <rect x="50" y="170" width="60" height="80" fill="#A0522D" rx="2" />
                <rect x="60" y="160" width="60" height="80" fill="#D2691E" rx="2" />

                {/* Globe */}
                <circle
                  cx="180"
                  cy="140"
                  r="55"
                  fill="#CD853F"
                  stroke="#8B7355"
                  strokeWidth="2"
                />
                {/* Globe details - continents */}
                <path
                  d="M 160 120 Q 180 130 190 140"
                  stroke="#8B7355"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="175" cy="150" r="8" fill="#8B7355" opacity="0.6" />

                {/* Lamp - Top right */}
                <line
                  x1="240"
                  y1="80"
                  x2="240"
                  y2="40"
                  stroke="#A0826D"
                  strokeWidth="4"
                />
                <ellipse cx="240" cy="35" rx="20" ry="12" fill="#FFD700" />
                <path
                  d="M 220 35 Q 220 25 240 20 Q 260 25 260 35"
                  fill="#FFD700"
                  stroke="#DAA520"
                  strokeWidth="1"
                />

                {/* Open Book - Center bottom */}
                <path
                  d="M 150 220 L 130 240 L 170 240 Z"
                  fill="#8B4513"
                  stroke="#654321"
                  strokeWidth="1"
                />
                <rect x="110" y="240" width="120" height="40" fill="#D2B48C" rx="3" />
                <line
                  x1="170"
                  y1="240"
                  x2="170"
                  y2="280"
                  stroke="#8B4513"
                  strokeWidth="2"
                />
                {/* Page lines */}
                <line
                  x1="125"
                  y1="250"
                  x2="160"
                  y2="250"
                  stroke="#8B4513"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="125"
                  y1="263"
                  x2="160"
                  y2="263"
                  stroke="#8B4513"
                  strokeWidth="1"
                  opacity="0.5"
                />
                <line
                  x1="125"
                  y1="276"
                  x2="160"
                  y2="276"
                  stroke="#8B4513"
                  strokeWidth="1"
                  opacity="0.5"
                />
              </svg>
            </div>
          </div>

          {/* Right Section - White Card with Steps */}
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              {/* Step 1 */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Upload PDF
                  </h3>
                  <p className="text-gray-600 text-sm">Add your book file</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    AI Processing
                  </h3>
                  <p className="text-gray-600 text-sm">We analyze the content</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Voice Chat
                  </h3>
                  <p className="text-gray-600 text-sm">Discuss with AI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
