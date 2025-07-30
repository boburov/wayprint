import React from 'react'
import CallToAction from './CTA'
import Image from 'next/image'
import tshirt1 from "../images/wayprint (1).png"
import tshirt2 from "../images/Untitled design (1).png"
import tshirt3 from "../images/Untitled design (2).png"

const Hero = () => {
  return (
    <section className="container mx-auto px-6 mt-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
      
      {/* Matn qismi */}
      <div className="text-start">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
          O‘z dizayningni kiyimga aylantir
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
          WayPrint bilan o‘z unikal dizaynlaringni futbolka, hoodie va boshqa mahsulotlarga joylashtir, bosib chiqar va yetkazib ber – barchasi biz bilan oson.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-[#536451] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#5b6e59] transition">
            Boshlash
          </button>
          <button className="border border-[#536451] text-[#536451] px-6 py-3 rounded-xl font-medium hover:bg-[#536451] hover:text-white transition">
            Batafsil
          </button>
        </div>
      </div>

      {/* Futbolkalar ustma-ust */}
      <div className="relative w-full h-[400px] flex justify-center items-center">
        {/* 1-rasm */}
        <Image
          src={tshirt1}
          alt="tshirt1"
          className="absolute z-10 rotate-[-8deg] scale-95  rounded-xl -left-10 drop-shadow-2xl "
          width={400}
          height={220}
        />

        {/* 2-rasm */}
        <Image
          src={tshirt2}
          alt="tshirt2"
          className="absolute z-20 rotate-[0deg] scale-100  rounded-xl -top-10 drop-shadow-2xl"
          width={400}
          height={240}
        />

        {/* 3-rasm */}
        <Image
          src={tshirt3}
          alt="tshirt3"
          className="absolute z-10 rotate-[8deg] scale-110  rounded-xl -right-10 drop-shadow-2xl"
          width={400}
          height={220}
        />

        {/* CTA pastga markazda */}
        <div className="absolute bottom-[-160px] -left-40 z-30">
          <CallToAction />
        </div>
      </div>
    </section>
  )
}

export default Hero
