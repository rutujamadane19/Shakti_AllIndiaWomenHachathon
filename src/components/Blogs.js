import React from 'react'

function Blogs() {
  return (
    <div>
        <div class="flex flex-col justify-center items-center ">
                                                    <div class="text-xl md:text-3xl text-pink-600 font-bold uppercase">Articles</div>
                                                    <div class="border-b-4 border-purple-500 -mt-2"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</div>
                                                    <div class="text-black text-md text-center mt-5">
                                                    </div>
                                                </div>
       <div class="flex justify-center">
   <div class="flex flex-col md:flex-row max-w-7xl justify-center items-center">
      
       <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
           <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?thinking?woman "
                   alt="" class="" /> </div>
           <div class="text-sm text-gray-500 m-2">30 March, 2023</div>
           <div class="font-bold text-2xl text-red-400 m-2">Myths VS Facts</div>
           <div class="text-gray-500 m-2 text-sm"><a href="">
Myth: Menstruation makes women emotionally unstable. Fact: Hormonal fluctuations may affect mood, but it doesn't make women emotionally unstable.Myth: Menstrual blood is dirty. Fact: Menstrual blood is a natural bodily function and not dirty or impure.</a></div>
           <div class="flex justify-between">
               
               <div class="m-2">
                   <ion-icon name="share-social-outline"
                       class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "> </ion-icon>
               </div>
           </div>
       </div>

       <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
           <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?gym?equipments "
                   alt="" class="" /> </div>
           <div class="text-sm text-gray-500 m-2">2 Jan, 2023</div>
           <div class="font-bold text-2xl text-red-400 m-2">Fitness</div>
           <div class="text-gray-500 m-2 text-sm"><a href="">Moderate exercise can help alleviate menstrual symptoms like cramps, bloating, and mood swings by releasing endorphins and improving blood flow.Understand that your energy levels and performance may vary during menstruation, and that's perfectly normal. </a></div>
           <div class="flex justify-between">
            
               <div class="m-2">
                   <ion-icon name="share-social-outline"
                       class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "> </ion-icon>
               </div>
           </div>
       </div>

       <div class="overflow-hidden w-3/4 md:w-1/3 bg-white m-4 shadow-sm flex flex-col justify-center">
           <div class="h-26 w-full overflow-hidden"> <img src="https://source.unsplash.com/random/500x400/?fruits "
                   alt="" class="" /> </div>
           <div class="text-sm text-gray-500 m-2">12 Dec, 2022</div>
           <div class="font-bold text-2xl text-red-400 m-2">Diet</div>
           <div class="text-gray-500 m-2 text-sm"><a href="">Drink plenty of water to reduce bloating and help with digestion. Herbal teas, coconut water, and fresh fruit juices are also good options. It's normal to have cravings during periods. While it's okay to indulge occasionally, try to strike a balance with healthier choices.</a></div>
           <div class="flex justify-between">
              
               <div class="m-2">
                   <ion-icon name="share-social-outline"
                       class="m-1 text-blue-500 hover:text-pink-400 cursor-pointer text-xl "> </ion-icon>
               </div>
           </div>
       </div>

       
   </div>


</div>
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    </div>
  )
}

export default Blogs
