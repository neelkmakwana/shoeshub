import { useContext } from "react";
import Category from "../../components/category/Category";
import HeroSection from "../../components/heroSection/HeroSection";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";



const HomePage = () => {

    return (
        <Layout>
            <HeroSection/>
            <br />
            <div className="">
                <h1 className=" text-center mb-5 text-2xl font-semibold">Select Footwear By Category</h1>
            </div>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Testimonial/>
        </Layout>
    )
}

export default HomePage;