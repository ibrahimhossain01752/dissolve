import React from 'react';
import './Home.css';
import card from '../../assets/image/image 2 (1).png';

const Home = () => {
    return (
        <div class="bg">
           <div class=" mb-3">
           <i class="bi bi-arrow-left arrow"></i>
   <img src={card} class="card-img-top card mx-auto" alt="..."/> 
  <div class="card-body bg">
    <h5 class="card-title text-white">Sanchit Bhat</h5>
    <p class="text-white">Full Name</p>
    <hr class="text-white"/>
    <p class="text-white text_one"><span class="mx-5">Birthday</span>   <span class="date_one mx-5" >18/12/1997</span></p>
    <hr class="text-white"/>
    <p class="text-white text_two"><span class="ml">Mobile Number</span>   <span class="date_two mx-5">9358385848</span></p>
    <hr class="text-white"/>
    <p class="text-white text_th"><span class="mx-2">Email Address</span>  <span class="mx-5">sahil.khanna@gmail.com</span></p>
    <hr class="text-white"/>
    <p class="text-white text_fo"><span class="mx-4">Profession</span>    <span class="mx-5">Social Media Influencer</span></p>
    <hr class="text-white"/>
  </div>
</div>
        </div>
    );
};

export default Home;