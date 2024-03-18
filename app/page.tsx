import Navbar from './components/Navbar'

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className='bg-[#161032] h-[95vh]'>
        <svg className="absolute bottom-0" id="trapezoid" viewbox="0 0 100 15" preserveAspectRatio="none" height="200px" width="100%">
          <path d="M20,0
                  L80,0
                  L100,10
                  L100,15
                  L0,15
                  L0,10z" fill="red"></path>
        </svg>
      </div>
      <div className='h-screen'>
      </div>
    </main>
  )
}
