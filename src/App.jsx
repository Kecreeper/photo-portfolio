import { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";
const gibberish = 'ⷷ⒴ℕ⌷⛸⅀⁣‧⯻₎⾿⛢⑐⺞⚆ⶳⴗ⩜⏔⳰⩯▧⴩ⱜ▃⥺⿼♥☨∠⻆⾒⭅⨗⹺Ⅻ➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪⣾⯛⴯≥☁⚃Ⱬ⒗⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍₅ⵊ⛊✐ⷄⷮ⛁⿃ⵥ⬤⦓⯑⢄ⴍ↙₻⼎␈⨜⥮⹬⫳☾⼦⻱⑗ⲉ⮴⠐⭭ⷷ⒴ℕ⌷⛸⅀⁣‧⯻₎⾿⛢⑐⺞⚆ⶳⴗ⩜⏔⳰⩯▧⴩ⱜ▃⥺⿼♥☨∠⻆⾒⭅⨗⹺Ⅻ➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪⣾⯛⴯≥☁⚃Ⱬ⒗⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍₅ⵊ⛊✐ⷄⷮ⛁⿃ⵥ⬤⦓⯑⢄ⴍ↙₻⼎␈⨜⥮⹬⫳☾⼦⻱⑗ⲉ⮴⠐⭭';
const shortGibberish  = '⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍';
const shortGibberish2 = '➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪';
const images = import.meta.glob('./imgs/*.{png,JPG,jpg}', { eager: true });
const logo = import.meta.glob('./imgs/thislogo.svg', { eager: true });

function Img({ onClick, src, selectedSrc }) {
  let img = new Image();
  img.src = src;
  const dimensions = `${img.width}x${img.height}`;
  const split = src.split("/");
  const fileName = split[split.length-1].toUpperCase();
  const imgRef = useRef(null);
  let addedCSS = '';

  console.log("asdfasdf");

  const returnToOnClick = () => {
    onClick(imgRef.current.src)
  }

  return(
    <div className='flex m-2.5 font-play'>
      <div className='mr-0.5 border w-full text-cyberBlue border-l-2 border-l-cyberBlue border-cyberDim bg-cyberGray [writing-mode:vertical-lr]'>
        &nbsp;&nbsp;☐ ■&nbsp;&nbsp;
        <span className='inline-block text-[5px] align-middle'> {shortGibberish} <br /> {shortGibberish2} </span>
        <span className='text-cyberDim font-mono'> &nbsp;| </span>
      </div>
      <div onClick={returnToOnClick} className={'border border-l-4 border-cyberDim bg-cyberGray rounded-br-3xl p-5 tracking-widest box-content text-red-900/70 hover:border-cyberCoolRed hover:border-2 hover:border-l-4 hover:bg-[#0f1d22]'+addedCSS}>
        <div className='flex justify-center'>
          <div className='relative left-0 top-0 rotate-180 [writing-mode:vertical-lr]'>
            {dimensions}
          </div>
          <img ref={imgRef} src={src} />
          <div className='relative left-0 top-0 [writing-mode:vertical-lr]'>
            {fileName}
          </div>
        </div>
      </div>
    </div>
  )
}

function SelectButton({ selectedImage }) {
  const buttonCSS = 'select-none px-10 py-5 font-play font-bold text-xl bg-cyberGray text-cyberBlue ring-2 ring-cyberDim ring-l-[35px] hover:border hover:border-cyberCoolRed'
  if (selectedImage != null) {
    let img = new Image();
    img.src = selectedImage;
    const dimensions = `${img.width}x${img.height}`;
    const split = selectedImage.split("/");
    const fileName = split[split.length-1].toUpperCase();

    return (
      <button onClick={() => window.open(selectedImage)} className={buttonCSS + 'hover:border cursor-zoom-in'}>
        {fileName}
      </button>
    )
  } else {
    return (
      <button className={buttonCSS + ' cursor-default'}>
        SELECT AN IMAGE
      </button>
    )
  }
}

function App() {
  const [selectedImage, setSelectedImage] = useState(null);
  const selectImage = (src) => {
    setSelectedImage(src);
  }

  return (
    <>
      {/* SIDEBAR */}
      <div className='fixed left-0 top-0 ml-8 min-h-screen
        line-clamp-1 [writing-mode:vertical-lr] select-none
        shadow-[0px_0px_25px_10px_#481013]
        opacity-0 lg:opacity-100'>
      </div>
      <div className='tracking-[4px] text-xs text-red-900
        [writing-mode:vertical-lr] line-clamp-1 text-clip font-play font-bold select-none
        fixed left-0 top-[45%] ml-9  h-[25%]
        opacity-0 lg:opacity-100
      '>
        {gibberish}
      </div>
      <div className='tracking-[6px] text-red-900/35
        [writing-mode:vertical-lr] line-clamp-1 font-play font-bold select-none
        fixed left-0 top-0 ml-3 min-h-screen
        opacity-0 lg:opacity-100
      '>
        {gibberish}
      </div>

      {/* TOPBAR */}
      <div className='text-cyberCoolRed text-left select-none flex font-play font-bold m-4 text-sm mx-auto max-w-[92%]'>
        <img src={Object.values(logo)[0].default} className='size-16 mr-4'/>
        <div>
          EDUARDO <br /> PHOTO PORTFOLIO <br /> DATABASE
        </div>
        <div className='text-xs ml-7 text-right'>
          ALL PICTURES <br /> SHOWCASED ON THIS <br /> SITE ARE ORIGINAL <br /> WORKS CREATED BY ME
        </div>
      </div >
      <div className='max-w-[93%] mx-auto h-1.5 mb-10 z-10 
        bg-cyberRed shadow-cyberGlow border-2 border-[#480b0e]
      ' />

      {/* MAIN */}
      <div className='select-none max-w-7xl mx-auto font-play font-bold'>
        <div className='lml-1 text-2xl text-cyberRed'>
          AVAILABLE PHOTOS
        </div>
        <div className='max-w-full mx-auto h-1.5 mb-10 z-10 
          bg-cyberRed shadow-cyberGlowXS border-2 border-[#480b0e]
        ' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'> {/* ROW */}
            {
              Object.values(images).map((image, index) => (
                <Img onClick={selectImage} selectedSrc={selectedImage} src={image.default} key={index} />
              ))
            }
        </div>
      </div>
            
      {/* BUTTON */}
      <div className='flex justify-center items-center fixed bottom-0 h-24 w-screen '>
        <SelectButton selectedImage={selectedImage} />
      </div>
    </> 
  )
}

export default App