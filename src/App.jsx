import { useEffect, useState } from 'react'
const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod vulputate lorem. Donec nec eros consectetur, consectetur magna quis, suscipit felis. Mauris commodo posuere diam, quis accumsan nulla congue volutpat.'
const images = import.meta.glob('./imgs/*.{png,JPG}', { eager: true });

function Img({ src }) {
  let img = new Image()
  img.src = src
  const dimensions = `${img.width}x${img.height}`
  const filename = src.substring(src.lastIndexOf('/') + 1);

  return(
    <div className='size-72 border p-5 m-5 tracking-widest text-xs box-content text-red-900/60'>
      <div className='relative left-0 top-0 text-right'>
      {dimensions}
      </div>
      <div className='flex justify-center'>
        <div className='relative left-0 top-0 rotate-180 [writing-mode:vertical-lr]'>
          {filename}
        </div>
        <img className='rounded-xl ring' src={src} />
        <div className='relative left-0 top-0 [writing-mode:vertical-lr]'>
          {filename}
        </div>
      </div>
      <div className='relative left-0 top-0'>
        {dimensions}
      </div>
    </div>
  )
}

function App() {

  return (
    <>
      <div className='fixed left-0 top-0 ml-4 line-clamp-1 [writing-mode:vertical-lr] text-clip min-h-screen shadow-[9px_25px_25px_10px_#481013]'>
      </div>
      <div className='tracking-[6px] text-red-900 fixed left-0 top-0 ml-4 line-clamp-1 [writing-mode:vertical-lr] text-clip min-h-screen'>
        {LoremIpsum}
      </div>
      
      
      <div className='text-left font-play mt-4 mb-2 font-bold text-3xl mx-auto max-w-[92%]'>
        Photo Portfolio
        <div className='max-w-[10%] h-1 -ml-1 z-20 relative
          bg-[#58e791]
        ' />
        
      </div>
      
      <div className='max-w-[93%] mx-auto h-2 mb-10 z-10 
        bg-[#a9595c] shadow-[0px_0px_100px_50px_#481013] border-2 border-[#480b0e]
      ' />
      <div className='flex justify-center'>
        {
          Object.values(images).map((image, index) => (
            <Img src={image.default} key={index} />
          ))
        }
      </div>
      
    </>
  )
}

export default App
