import HeroInfo from "@/components/ui/heroinfo";
import HeroProduct from "@/components/ui/heroproduct";
import HeroStatement from "@/components/ui/herostatement";
import ImageWithBackGround from "@/components/ui/imagebackground";
import Socials from "@/components/ui/socials";
import { HeroCarousel } from "@/components/ui/testimonialcarousel";


export default function Home() {
  return (
   <div className="">
      <div className="-z-10" id="hero">
       <ImageWithBackGround 
            heading="Kente Mall"
            subHeading="Your home of quality products, giving you the Ghana culture vibes and luxury of kente products."   
        />  
        </div>
        <div id="services">
        <HeroInfo 
          className=""
        />
        </div>

        <HeroStatement 
           className="mt-24  text-white "
        />

        <HeroCarousel
        />
        <HeroProduct 
        className=""
        />
        <Socials 
        className=""
        />
   </div>
  );
}

