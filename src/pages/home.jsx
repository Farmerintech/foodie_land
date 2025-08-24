import { Categories } from "../components/Categories";
import { Chef } from "../components/Chef";
import { Delicious } from "../components/Delicious";
import { Hero } from "../components/Hero";
import { Instagram } from "../components/Instagram";
import { Receipe } from "../components/Receipe";

export default function Home(){
return(
    <>
    <section className="md:px-[64px] lg:px-[86px] xl:px-[128px] px-[16px] pb-20 pt-10 flex flex-col gap-[100px]">
        <Hero/>    
        <Categories/>
        <Receipe/>
        <Chef/>
    </section>
    <Instagram/>
    <Delicious/>
    </>
)
}