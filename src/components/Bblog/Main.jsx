import React, { useState } from 'react'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import blog4 from '../../assets/blog4.jpg'
import blog5 from '../../assets/blog5.jpg'
const Main = () => {
  return (
    <div>
           <div class="flex justify-center">
<div class="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
    
    <div
        class="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col justify-center text-black hover:text-white hover:bg-pink-500 hover:scale-105 rounded">
        <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?car" alt="" class="" /> </div>
        <div class="text-sm m-2">30 March, 2023</div>
        <div class="font-medium text-normal m-2">It is a never ending battle of making your cars better and also
            trying to be better yourself. </div> 
    </div>
    <div
        class="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col justify-center text-black hover:text-white hover:bg-pink-500 hover:scale-105 rounded">
        <div class="h-26 w-full overflow-hidden"><img
                    src="https://source.unsplash.com/random/500x400/?plane" alt="" class="" /> </div>
        <div class="text-sm m-2">30 March, 2023</div>
        <div class="font-medium text-normal m-2">The moment you doubt whether you can fly, you cease forever to be
            able to do it.</div> 
    </div>
    <div
        class="overflow-hidden md:w-1/4 bg-white m-4 shadow-lg flex flex-col justify-center text-black hover:text-white hover:bg-pink-500 hover:scale-105 rounded">
        <div class="h-26 w-full overflow-hidden"> <img
                    src="https://source.unsplash.com/random/500x400/?ship" alt="" class="" /> </div>
        <div class="text-sm m-2">30 March, 2023</div>
        <div class="font-medium text-normal m-2">Those freckles make you seem like a galaxy of stars, just waiting
            to be explored and loved. </div> 
    </div>
</div>
</div>
<script src="https://cdn.tailwindcss.com"></script>
    </div>
  )
}

export default Main
