import Footer from './components/Footer'
import soar from '../public/soar-logo.png'
import Image from 'next/image'
import Card from './components/card'

export default function Home() {
  return (
    <main>
      <div className='blob'></div>
      <div className='blob-1'></div>
      <div className='bg-[#161032] flex flex-wrap h-screen min-h-[600px] w-screen justify-center items-center'>
        <div className='relative z-25'>
          <h1 className='text-white text-center pl-10 font-bold text-9xl'>SOAR 2024</h1>
          <h1 className='text-white text-center font-bold text-xl'>Welcome to SOAR 2024</h1>
        </div>
        <div className='relative z-25 pl-[150px] pr-[150px]'>
          <Image src={soar} height={400} alt='image' />
        </div>
      </div>
      <div className='w-screen p-10 grid xl:grid-cols-2 grid-cols-1 grid-rows-3 gap-10 background'>
        <div className="xl:w-[100%] w-[80%] relative left-[50%] -translate-x-[50%]">
          <Card title={"Hello"} body={"bye bye"} img={soar} left={false} />
        </div>
        <div className="xl:row-start-2 xl:col-start-2 xl:w-[100%] w-[80%] relative left-[50%] -translate-x-[50%]">
          <Card title={"Hello"} body={"bye bye"} img={soar} left={true} />
        </div>
        <div className="xl:row-start-3 xl:w-[100%] w-[80%] relative left-[50%] -translate-x-[50%]">
          <Card title={"Hello"} body={"bye bye"} img={soar} left={false} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
