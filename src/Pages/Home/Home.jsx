import React from 'react'
import SearchBar from '../../Components/SearchBar/SearchBar'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import HotelCard from '../../Components/HotelCard/HotelCard'
const Home = () => {
  return (
    <div>
        <Header />
        <SearchBar />
        <HotelCard />
        <Footer />
    </div>
  )
}

export default Home