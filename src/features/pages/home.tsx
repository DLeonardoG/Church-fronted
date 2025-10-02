import { CarouselPlugin } from "@/core/components/carouselHome";


function Home() {
    return(
        <main className="w-full min-h-screen">
            <section className="flex w-full h-full justify-center">
                <CarouselPlugin></CarouselPlugin>
            </section>
            <section className="bg-red-500 w-full h-500">

            </section>
        </main>
    )
    
}

export default Home