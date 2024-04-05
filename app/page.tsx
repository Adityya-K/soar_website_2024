import Navbar from './components/Navbar'
import camera from '../public/Camera.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='bg-[#161032] flex h-screen min-h-[600px] w-screen justify-center items-center'>
        <div>
          <h1 className='text-white text-center font-bold text-9xl'>SOAR 2024</h1>
          <h1 className='text-white text-center font-bold text-xl'>Welcome to SOAR 2024</h1>
        </div>
        <div className='pl-[150px] pr-[150px]'>
          <Image src={camera} height={500} alt='image' />
        </div>
      </div>
      <div className='h-screen'>
      </div>
    </main>
  )
}
