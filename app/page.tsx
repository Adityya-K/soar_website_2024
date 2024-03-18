import Navbar from './components/Navbar'
import camera from '../public/Camera.png'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='bg-[#161032] h-[95vh] min-h-[600px]'>
        <svg className="absolute bottom-0 z-1" id="trapezoid" viewBox="0 0 100 15" preserveAspectRatio="none" height="200px" width="100%">
          <path d="M20,0
                  L80,0
                  L100,10
                  L100,15
                  L0,15
                  L0,10z" fill="#931621"></path>
        </svg>
        <Image src={camera} width={200} alt="camera" className="absolute bottom-[185px] left-1/2 transform -translate-x-1/2 "/>
      </div>
      <div className='h-screen'> 
      </div>
    </main>
  )
}
