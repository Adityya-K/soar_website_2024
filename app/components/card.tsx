import React from 'react'
import Image from 'next/image'

export default function card(props: any) {
  return (
    <main>
      {
        props.left ?
          <div className='bg-[#161032] rounded-2xl border-[1px] border-solid border-white text-white grid grid-cols-5 gap-4 h-[100%]'>
            <div className="col-span-2 flex items-center justify-center">
              <Image src={props.img} alt="image" style={{ padding: "10px", overflow: "hidden", objectFit: "cover", height: "100%", borderRadius: "1rem" }} />
            </div>
            <div className='col-span-3 pl-10'>
              <h1 className='text-4xl pt-10 pr-10'>{props.title}</h1>
              <div className="pt-5 text-l pb-10 pr-10">{props.children}</div>
            </div>
          </div>
          :
          <div className='bg-[#161032] rounded-2xl border-[1px] border-solid border-white text-white grid grid-cols-5 gap-4 h-[100%]'>
            <div className='col-span-3 pr-10'>
              <h1 className='text-4xl text-right pt-10 pl-10'>{props.title}</h1>
              <div className="pt-5 pb-10 pl-5 text-right text-l">{props.children}</div>
            </div>
            <div className="col-span-2 flex items-center justify-center" >
              <Image src={props.img} alt="image" style={{ padding: "10px", overflow: "hidden", objectFit: "cover", height: "100%", borderRadius: "1rem" }} />
            </div>
          </div>
      }
    </main>
  )
}
