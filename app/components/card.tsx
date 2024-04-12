import React from 'react'
import Image from 'next/image'

export default function card(props: any) {
  return (
    <main>
      {
        props.left ?
          <div className='bg-white rounded grid grid-cols-5 gap-4 h-[100%]'>
            <div className="col-span-2">
              <Image src={props.img} alt="image" style={{ padding: "10px", overflow: "hidden" }} />
            </div>
            <div className='col-span-3 pl-10'>
              <h1 className='text-4xl pt-10'>{props.title}</h1>
              <p className="pt-5 text-xl">{props.body}</p>
            </div>
          </div>
          :
          <div className='bg-white rounded grid grid-cols-5 gap-4 h-[100%]'>
            <div className='col-span-3 pr-10'>
              <h1 className='text-4xl text-right pt-10'>{props.title}</h1>
              <p className="pt-5 text-right text-xl">{props.body}</p>
            </div>
            <div className="col-span-2" >
              <Image src={props.img} alt="image" layout="responsive" style={{ padding: "10px", overflow: "hidden" }} />
            </div>
          </div>
      }
    </main>
  )
}
