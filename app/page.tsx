import Image from 'next/image'
import poster from '../public/poster.jpg'

export default function Home() {
  return (
    <main>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <h1 className="text-white font-bold underline text-8xl">SOAR</h1>
        <h1 className="text-white text-xl pt-5">2024 conference</h1>
      </div>
      <Image  
        src={poster}
        alt="background"
        layout="fill"
        objectFit='cover'
        className="z-[-1]"
      />
    </main>
  )
}
