"use client";

import { useState } from "react";

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = Array.from({ length: 64 }, (_, i) => `/images/image${i + 1}.jpeg`);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A0F2C] to-[#111F45] p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 drop-shadow-lg">
        Impressão Sua 3D
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg bg-gray-100"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Imagem ${i + 1}`}
              className="w-full h-auto max-h-72 object-contain transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            {/* <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-30 transition duration-300" /> */}
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Imagem ampliada"
            className="max-w-[90%] max-h-[90%] rounded-2xl shadow-2xl border-4 border-white"
          />
        </div>
      )}
    </main>
  );
}



