import React from 'react'
import img3 from '../assets/my-calendar-android.jpg'
import { Link } from 'react-router-dom'
function Tracker() {
  return (
    <div>
      <section class="text-gray-600 body-font  py-10">
  <div class="container px-5 py-15 mt-10 mx-auto">
    <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
      <div class="sm:w-32 sm:h-32 h-40 w-40 sm:mr-10 inline-flex items-center justify-center rounded-full bg-pink-100 text-pink-500 flex-shrink-0">
       <img src={img3}></img>
      </div>
      <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
        <h2 class="text-gray-900 text-2xl title-font font-bold mb-2">Period Tracker</h2>
        <p class="leading-relaxed text-base">Keep a track of your cycle length and get to know more about it</p>
      </div>
    </div>
   
  <Link to='/tracker' ><button class="flex mx-auto mt-10 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 rounded text-lg">Get Started</button></Link> 
  </div>
</section>
    </div>
  )
}

export default Tracker
