import headerImg from '../assets/homebg.jpg'

const Header = () => {
  return (
 <div className='relative flex h-screen w-full'>

  
        <div style={{
            backgroundImage:`url(${headerImg})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
        
        }} 
          className='h-full w-full blur-[1px]'
        >
         
        </div>
        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 px-10 mx-3'>
            <h2 className='font-bold text-white text-5xl leading-16'>Order your favourite food here</h2>
            <p className='text-white leading-8 my-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente non repellendus provident totam Sapiente non repellendus provident totam  </p>
            <button className='px-6 py-2.5 bg-white border-none text-m rounded-4xl'>View Menu</button>
        </div>
       </div>
    
  )
}

export default Header
