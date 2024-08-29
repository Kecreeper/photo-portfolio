import { useEffect, useState } from 'react'
const gibberish = 'ⷷ⒴ℕ⌷⛸⅀⁣‧⯻₎⾿⛢⑐⺞⚆ⶳⴗ⩜⏔⳰⩯▧⴩ⱜ▃⥺⿼♥☨∠⻆⾒⭅⨗⹺Ⅻ➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪⣾⯛⴯≥☁⚃Ⱬ⒗⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍₅ⵊ⛊✐ⷄⷮ⛁⿃ⵥ⬤⦓⯑⢄ⴍ↙₻⼎␈⨜⥮⹬⫳☾⼦⻱⑗ⲉ⮴⠐⭭ⷷ⒴ℕ⌷⛸⅀⁣‧⯻₎⾿⛢⑐⺞⚆ⶳⴗ⩜⏔⳰⩯▧⴩ⱜ▃⥺⿼♥☨∠⻆⾒⭅⨗⹺Ⅻ➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪⣾⯛⴯≥☁⚃Ⱬ⒗⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍₅ⵊ⛊✐ⷄⷮ⛁⿃ⵥ⬤⦓⯑⢄ⴍ↙₻⼎␈⨜⥮⹬⫳☾⼦⻱⑗ⲉ⮴⠐⭭'
const shortGibberish  = '⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍'
const shortGibberish2 = '➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪'
const images = import.meta.glob('./imgs/*.{png,JPG,jpg}', { eager: true });

function Img({ src }) {
  let img = new Image()
  img.src = src
  const dimensions = `${img.width}x${img.height}`
  const filename = src.substring(src.lastIndexOf('/') + 1);

  return(
    <div className='flex m-5'>
      <div className='mr-0.5 border w-full text-[#58dee2] border-l-2 border-l-[#58dee2] border-[#391c27] bg-[#0e0d16] [writing-mode:vertical-lr]'>
        {' ☐ ■ ' }
        <span className='inline-block text-[5px] align-middle'> {shortGibberish} <br /> {shortGibberish2} </span>
        <span className='text-[#391c27]'> &nbsp;&nbsp;| </span>
      </div>
      <div className='border border-l-4 border-[#391c27] bg-[#0e0d16] rounded-br-3xl p-5 tracking-widest box-content text-red-900/70 hover:border-[#d7645a] hover:border-2 hover:border-l-4 hover:bg-[#0f1d22]'>
        <div className='flex justify-center'>
          <div className='relative left-0 top-0 rotate-180 [writing-mode:vertical-lr]'>
            {dimensions}
          </div>
          <img src={src} />
          <div className='relative left-0 top-0 [writing-mode:vertical-lr]'>
            {filename}
          </div>
        </div>
      </div>
    </div>
    
  )
}

function SelectButton() {


  return (
    <button className='mx-auto max-w-2xl border '>
      Select an image.
    </button>
  )
}

function App() {

  return (
    <>
      <div className='fixed left-0 top-0 ml-8 line-clamp-1 [writing-mode:vertical-lr] min-h-screen shadow-[0px_0px_25px_10px_#481013]'>
      </div>
      <div className='tracking-[4px] text-xs text-red-900 [writing-mode:vertical-lr] line-clamp-1 text-clip font-play font-bold
        fixed left-0 top-[45%] ml-9  h-[25%]
        opacity-0 sm:opacity-100
      '>
        {gibberish}
      </div>
      <div className='tracking-[6px] text-red-900/35 [writing-mode:vertical-lr] line-clamp-1 font-play font-bold
        fixed left-0 top-0 ml-3 min-h-screen
        opacity-0 sm:opacity-100
      '>
        {gibberish}
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

      <div className='grid grid-cols-1 border max-w-5xl mx-auto sm:grid-cols-2 lg:grid-cols-4'> {/* ROW */}
          {
            Object.values(images).map((image, index) => (
              <Img src={image.default} key={index} />
            ))
          }
      </div>
      <div className='fixed bottom-0 h-10 w-screen border'>
       <SelectButton />
      </div>
    </> 
  )
}

export default App
