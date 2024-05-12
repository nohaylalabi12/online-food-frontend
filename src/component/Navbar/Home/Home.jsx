import React from 'react';
import "./Home.css"
import MultiItemCarousel from './MultiItemCarousel';
import RestaurantCart from '../../Restaurant/RestaurantCart';

const restaurant=[1,1,1,1,1,1,1,1]

const Home = () => {
    return (
        <div className='pb-10'>
          <section className='banner -z-50 relative flex flex-col justify-center
          items-center'>

            <div className='w-[50vw] z-10 text-center'>
              
              <h1 className=' text-white '> Your Favorite Food Delivered Hot  Fresh </h1>
            </div>
              
              <div className='cover absolute top-0 left-0 right-0'>

              </div>

              <div className='fadout'>

              </div>

          </section>
          <section className='p-10 lg:py-10 lg:px-20 pt-10'>
          <div className="flex justify-center">
    <p className='text-2xl font-semibold text-orange-500 py-3 pb-10'>Top Meels</p>
</div>

            <MultiItemCarousel/>
          </section>
          <section className='px-5 lg:px-20'>
            <h1 className='text-2xl font-semiblod text-orange-500 pb-8'>Explore our top picks, ready for ordering!</h1>
          
          <div className='flex flex-wrap items-center justify-around gap-5'>
            {
              restaurant.map((item) => <RestaurantCart/>)
            }
          </div>
          </section>
        </div>
    )
}
export default Home