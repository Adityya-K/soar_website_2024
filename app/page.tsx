"use client";
import Footer from './components/Footer'
import soar from '../public/soar-logo.png'
import Image from 'next/image'
import Card from './components/card'
import img1 from '../public/soar-1.jpg'
import img2 from '../public/soar-2.png'
import img3 from '../public/soar-3.png'
import Link from 'next/link'
import { IoCloseSharp } from "react-icons/io5";
import React, { useState } from "react";

export default function Home() {
  const [isClosed, setIsClosed] = useState(false);

  const closeBanner = () => {
    setIsClosed(true);
  };
  return (
    <main className='overflow-hidden'>
      {!isClosed &&
        <div className='fixed bg-red-900 hover:bg-red-700 w-screen z-50 items-center text-xl text-white flex justify-between text-center pl-6 pr-6 pt-3 pb-3'>
          <div></div>
          <div className='pl-2 pr-2'>
            <p>Delegate Applications Out Now! Register to be a SOAR delegate on June 1, 2024!</p>
            <p>Applications are due May 26, 2024 at 11:59pm.</p>
            <Link href="https://forms.gle/VUNcH1B9aEzKrtYU6" className='underline decoration-sky-300 text-sky-300'><b>Click here to apply!</b></Link>
          </div>
          <div>
            <button onClick={closeBanner}><IoCloseSharp className='scale-[200%]' /></button>
          </div>
        </div>}
      <div className='relative xl:top-[20vh]'>
        <div className='blob'></div>
        <div className='blob-1'></div>
      </div>
      <div className='bg-[#161032] flex flex-wrap h-screen min-h-[600px] w-screen justify-center items-center'>
        <div className='relative z-25'>
          <h1 className='text-white text-center lg:pl-10 font-bold text-9xl'>SOAR 2024</h1>
          <h1 className='text-white text-center font-bold text-xl'>Welcome to SOAR 2024</h1>
        </div>
        <div className='relative z-25 sm:pl-[150px] sm:pr-[150px]'>
          <Image src={soar} height={400} alt='image' />
        </div>
      </div>
      <div className='w-screen p-10 sm:p-5 grid xl:grid-cols-2 grid-cols-1 grid-rows-3 gap-10 sm:gap-5 background'>
        <div className="xl:w-[100%] flex">
          <Card title={"What is SOAR?"} img={img1} left={false}>
            <p>Suddenly Opportunities Are Reachable, <b>SOAR</b> is a leadership conference for grade 7 & 8 students in the Peel District School Board. Our mission statement is <q className='underline hover:decoration-dotted decoration-sky-500 decoration-2'>bridging the gap from middle school to high school for grade 7 and 8 students, creating the leaders of tomorrow.</q> This conference equips students with necessary skills such as communication, leadership, and a burning passion, preparing students for a rewarding high school experience. We strive to provide a valuable experience for each delegate and equip them with exceptional skill sets, positively impacting our communities and initiating leadership.</p>
          </Card>
        </div>
        <div className="xl:row-start-2 xl:col-start-2 flex">
          <Card title={"Why should students attend SOAR?"} img={img2} left={true}>
            <p>If you want your child to be part of a transformative summer program designed for academic excellence and development, SOAR is the conference to attend. With a focus on personalized attention and collaborative activities, SOAR ensures your child receives individualized support to build confidence and crucial life skills. This unique experience fosters lasting friendships and prepares students for future success, making SOAR the best choice for parents in pursuit of a program that uniquely shapes their child&apos;s growth and potential.</p>
            <p className='pt-5'>Delegate Applications Out Now! Register to be a SOAR delegate on June 1, 2024!</p>
            <p>Applications are due May 26, 2024 at 11:59pm.</p>
            <Link href="https://forms.gle/VUNcH1B9aEzKrtYU6" className='underline decoration-sky-300 text-sky-300'><b>Click here to apply!</b></Link>
          </Card>
        </div>
        <div className="xl:row-start-3 flex">
          <Card title={"WHEN + WHERE?"} img={img3} left={false}>
            <p>The SOAR 2024 conference will take place at <u className='underline hover:decoration-dotted decoration-sky-500 decoration-2'> Turner Fenton Secondary School on Saturday, June, 1st, 2024. </u> Delegates will be expected to arrive at <b> 7:00 am. </b></p>
          </Card>
        </div>
      </div>
      <div className='flex items-center justify-center background p-10'>
        <div className='bg-[#161032] rounded-2xl border-[1px] border-solid border-white p-10'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/wwmHNp9gz8k?si=s9e0MTJZ9fEhol2H" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
      <Footer />
    </main>
  )
}
