import { useEffect, useRef, useState } from 'react'
const gibberish = 'ⷷ⒴ℕ⌷⛸⅀⁣‧⯻₎⾿⛢⑐⺞⚆ⶳⴗ⩜⏔⳰⩯▧⴩ⱜ▃⥺⿼♥☨∠⻆⾒⭅⨗⹺Ⅻ➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪⣾⯛⴯≥☁⚃Ⱬ⒗⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍₅ⵊ⛊✐ⷄⷮ⛁⿃ⵥ⬤⦓⯑⢄ⴍ↙₻⼎␈⨜⥮⹬⫳☾⼦⻱⑗ⲉ⮴⠐⭭ⷷ⒴ℕ⌷⛸⅀⁣‧⯻₎⾿⛢⑐⺞⚆ⶳⴗ⩜⏔⳰⩯▧⴩ⱜ▃⥺⿼♥☨∠⻆⾒⭅⨗⹺Ⅻ➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪⣾⯛⴯≥☁⚃Ⱬ⒗⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍₅ⵊ⛊✐ⷄⷮ⛁⿃ⵥ⬤⦓⯑⢄ⴍ↙₻⼎␈⨜⥮⹬⫳☾⼦⻱⑗ⲉ⮴⠐⭭';
const shortGibberish  = '⛛ℌ⿭⢧⸧ⶵ⚋⮕⍡⢍';
const shortGibberish2 = '➬⤝⟒ⓡ⚲⑁▵⤲ⷠ⎵⭃≪';
const images = import.meta.glob('./imgs/*.{png,JPG,jpg}', { eager: true });

function Img({ onClick, src }) {
  let img = new Image();
  img.src = src;
  const dimensions = `${img.width}x${img.height}`;
  const filename = src.substring(src.lastIndexOf('/') + 1).toUpperCase();
  const imgRef = useRef(null);

  const returnToOnClick = () => {
    onClick(imgRef.current.src)
  }

  return(
    <div className='flex m-2.5 font-play'>
      <div className='mr-0.5 border w-full text-[#58dee2] border-l-2 border-l-[#58dee2] border-[#391c27] bg-[#0e0d16] [writing-mode:vertical-lr]'>
        &nbsp;&nbsp;☐ ■&nbsp;&nbsp;
        <span className='inline-block text-[5px] align-middle'> {shortGibberish} <br /> {shortGibberish2} </span>
        <span className='text-[#391c27]'> &nbsp;| </span>
      </div>
      <div onClick={returnToOnClick} className='border border-l-4 border-[#391c27] bg-[#0e0d16] rounded-br-3xl p-5 tracking-widest box-content text-red-900/70 hover:border-[#d7645a] hover:border-2 hover:border-l-4 hover:bg-[#0f1d22]'>
        <div className='flex justify-center'>
          <div className='relative left-0 top-0 rotate-180 [writing-mode:vertical-lr]'>
            {dimensions}
          </div>
          <img ref={imgRef} src={src} />
          <div className='relative left-0 top-0 [writing-mode:vertical-lr]'>
            {filename}
          </div>
        </div>
      </div>
    </div>
    
  )
}

function SelectButton({ selectedImage }) {
  const buttonCSS = 'px-10 py-5 font-play font-bold text-xl bg-[#0a0b10] text-[#58dee2] ring-2 ring-[#2a0b0a] ring-l-[35px] hover:border hover:border-[#2a0b0a] active:border-[#58dee2]'
  if (selectedImage != null) {
    let img = new Image()
    img.src = selectedImage
    const dimensions = `${img.width}x${img.height}`
    const split = selectedImage.split("/")
    const fileName = split[split.length-1]

    return (
      <button onClick={() => window.open(selectedImage)} className={buttonCSS + 'hover:border cursor-zoom-in'}>
        {fileName.toUpperCase()}
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
    setSelectedImage(src)
  }

  return (
    <>
      <div className='fixed left-0 top-0 ml-8 line-clamp-1 [writing-mode:vertical-lr] min-h-screen
        shadow-[0px_0px_25px_10px_#481013]
        opacity-0 lg:opacity-100'>
      </div>
      <div className='tracking-[4px] text-xs text-red-900 [writing-mode:vertical-lr] line-clamp-1 text-clip font-play font-bold
        fixed left-0 top-[45%] ml-9  h-[25%]
        opacity-0 lg:opacity-100
      '>
        {gibberish}
      </div>
      <div className='tracking-[6px] text-red-900/35 [writing-mode:vertical-lr] line-clamp-1 font-play font-bold
        fixed left-0 top-0 ml-3 min-h-screen
        opacity-0 lg:opacity-100
      '>
        {gibberish}
      </div>
      <div className='text-[#803533] text-left  flex font-play font-bold mt-4 mb-2 text-sm mx-auto max-w-[92%]'>
        <img src='/src/assets/thislogo.svg' className='size-16 mx-4'/>
        <div className=''>
          EDUARDO <br /> PHOTO PORTFOLIO <br /> DATABASE
        </div>
        <div className='text-xs ml-5 text-right'>
          ALL PICTURES <br /> SHOWCASED ON THIS <br /> SITE ARE ORIGINAL <br /> WORKS CREATED BY ME
        </div>
      </div >
      
      <div className='max-w-[93%] mx-auto h-1.5 mb-10 z-10 
        bg-[#a9595c] shadow-[0px_0px_100px_50px_#481013] border-2 border-[#480b0e]
      ' />
      <div className='max-w-5xl mx-auto font-play font-bold'>
        <div className='ml-1 text-2xl text-[#e97877]'>
          AVAILABLE PHOTOS
        </div>
        <div className='max-w-full mx-auto h-1.5 mb-10 z-10 
          bg-[#a9595c] shadow-[0px_0px_50px_25px_#481013] border-2 border-[#480b0e]
        ' />
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'> {/* ROW */}
            {
              Object.values(images).map((image, index) => (
                <Img onClick={selectImage} src={image.default} key={index} />
              ))
            }
        </div>
      </div>
      
      <div className='flex justify-center items-center fixed bottom-0 h-24 w-screen '>
        <SelectButton selectedImage={selectedImage} />
      </div>
    </> 
  )
}

export default App