
import CardFilm from "@/entities/Cards-Film/ui/CardFilm";
import FilmsTrailer from "@/entities/Trailer/components/Films-Trailer/film/FilmsTrailer";
import SliderMovie from "@/features/sliderMovie/ui/SliderMovie";
import PromoBanner from "@/widgets/promo-banner/ui/PromoBanner";
import { Hero } from "@/widgets/Slider-Movie/hero";




export default function main() {
    return (
        <div>
        <Hero />
        <CardFilm/>
        <PromoBanner/>
        </div>
    )
}