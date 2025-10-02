import { CarouselPlugin } from "@/core/components/carouselHome";


function Home() {
    return(
        <main className="w-full min-h-screen">
            <section className="w-full pt-21">
                <CarouselPlugin></CarouselPlugin>
            </section>
        </main>
    )
    
}

export default Home