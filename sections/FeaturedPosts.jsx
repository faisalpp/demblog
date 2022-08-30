import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React,{useState,useEffect} from 'react'
import { FeaturedPostCard } from "../components";
import { getFeaturedPosts } from "../services";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const FeaturedPosts = () => {
  
  const [featuredPosts, setFeaturedPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setFeaturedPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
  <div>
    <Carousel 
      swipeable={false}
      draggable={false} 
      showDots={true} 
      responsive={responsive} 
      ssr={false} // means to render carousel on server-side.
      infinite={true} 
      autoPlaySpeed={1000} 
      keyBoardControl={true} 
      customTransition="all .5"
      transitionDuration={500} 
      containerClass="carousel-container" 
      removeArrowOnDeviceType={["tablet", "mobile"]} 
      dotListClass="custom-dot-list-style" 
      itemClass="carousel-item-padding-40-px">
     {dataLoaded && featuredPosts.map((post,index) => (
      <FeaturedPostCard key={index} post={post}/>
     ))} 
    </Carousel>
  </div>
)
}

export default FeaturedPosts