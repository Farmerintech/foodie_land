import { Categories } from "../components/Categories";
import { Hero } from "../components/Hero";

export default function Home(){
return(
    <section className="md:px-[64px] px-[16px] pb-20 flex flex-col gap-[32px]">
        <Hero/>    
        <Categories/>
    </section>
)
}