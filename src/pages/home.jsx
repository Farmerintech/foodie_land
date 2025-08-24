import { Categories } from "../components/Categories";
import { Chef } from "../components/Chef";
import { Hero } from "../components/Hero";
import { Receipe } from "../components/Receipe";

export default function Home(){
return(
    <section className="md:px-[64px] px-[16px] pb-20 pt-10 flex flex-col gap-[100px]">
        <Hero/>    
        <Categories/>
        <Receipe/>
        <Chef/>
    </section>
)
}