import {assets} from '../assets/assets'

const Header = () => {
  return (
    <div className="relative flex w-full min-h-svh lg:min-h-screen">
      <div
        style={{
          backgroundImage: `url(${assets.homebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        className="absolute inset-0 w-full h-full sm:blur-[1px]"
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 sm:px-8 lg:px-10 mx-3 w-full max-w-[90%] sm:max-w-2xl lg:max-w-3xl text-center sm:text-left">
        {/* Heading: scales smoothly; tighter line height for big screens */}
        <h2 className="font-bold text-white text-3xl xs:text-[2rem] sm:text-4xl lg:text-5xl leading-snug sm:leading-tight tracking-tight drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
          Order your favourite food here
        </h2>

        {/* Paragraph: narrow width & adjusted leading on small screens */}
        <p className="text-white mt-3 sm:mt-4 lg:mt-6 text-[0.95rem] sm:text-base lg:text-[1.05rem] leading-6 sm:leading-7 lg:leading-7 mx-auto sm:mx-0 max-w-[36rem] opacity-95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
          Chooose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.
        </p>

        {/* Button: scales a bit so it feels click/tap friendly */}
        <button className="mt-4 sm:mt-6 px-5 sm:px-6 lg:px-7 py-2 sm:py-2.5 bg-white border-none text-sm sm:text-base rounded-3xl shadow-sm hover:shadow transition">
          View Menu
        </button>
      </div>
    </div>
  )
}

export default Header