import React from 'react'
import Header from '../components/Header';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctor from '../components/TopDoctor';
import Banner from '../components/Banner';

 const Home = () => {
  return (
    <div>
     
     {/*  Ek functional component jisme app ek -ek kr k apne section ko call krta hai  */}
      
      <Header/>
      <SpecialityMenu/>
      <TopDoctor/>
      <Banner/>
 
    </div>
  )
}
export default Home;
