import Navbar from './components/Navbar'
import soar from '../public/soar-logo.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className='blob'></div>
      <div className='blob-1'></div>
      <Navbar />
      <div className='bg-[#161032] flex flex-wrap h-screen min-h-[600px] w-screen justify-center items-center'>
        <div className='relative z-25'>
          <h1 className='text-white text-center pl-10 font-bold text-9xl'>SOAR 2024</h1>
          <h1 className='text-white text-center font-bold text-xl'>Welcome to SOAR 2024</h1>
        </div>
        <div className='relative z-25 pl-[150px] pr-[150px]'>
          <Image src={soar} height={500} alt='image' />
        </div>
      </div>
      <div className='h-screen w-screen bg-white'></div>
    </main>
  )
}
