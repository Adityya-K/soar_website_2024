import React from 'react'
import Image from 'next/image'

export default function card(props: any) {
  return (
    <main>
      {
        props.left ?
          <div className='bg-[#161032] rounded-2xl border-[1px] border-solid border-white text-white grid grid-cols-1 sm:grid-cols-5 gap-4 h-[100%]'>
            <div className="sm:col-span-2 col-span-5 flex items-center justify-center">
              <Image src={props.img} alt="image" style={{ padding: "10px", overflow: "hidden", objectFit: "cover", height: "100%", borderRadius: "1rem" }} />
            </div>
            <div className='sm:col-span-3 col-span-5 pr-5 pl-5 sm:pr-0 sm:pl-10 flex items-center'>
              <div>
                <h1 className='text-2xl sm:text-4xl text-center sm:text-left pt-10 sm:pr-10'>{props.title}</h1>
                <div className="pt-5 text-center sm:text-left text-sm sm:text-base pb-10 sm:pr-10">{props.children}</div>
              </div>
            </div>
          </div>
          :
          <div className='bg-[#161032] rounded-2xl border-[1px] border-solid border-white text-white grid grid-cols-1 sm:grid-cols-5 gap-4 h-[100%]'>
            <div className='sm:col-span-3 col-span-5 pr-5 pl-5 sm:pl-0 sm:pr-10 h-[100%] flex items-center'>
              <div>
                <h1 className='text-2xl sm:text-4xl text-center sm:text-right pt-10 sm:pl-10'>{props.title}</h1>
                <div className="pt-5 pb-10 sm:pl-5 text-center sm:text-right text-sm sm:text-base">{props.children}</div>
              </div>
            </div>
            <div className="sm:col-span-2  col-span-5 flex items-center justify-center" >
              <Image src={props.img} alt="image" style={{ padding: "10px", overflow: "hidden", objectFit: "cover", height: "100%", borderRadius: "1rem" }} />
            </div>
          </div>
      }
    </main>
  )
}
