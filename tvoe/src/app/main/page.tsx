
import CardFilm from "@/entities/Cards-Film/ui/CardFilm";
import FilmsTrailer from "@/entities/Trailer/components/Films-Trailer/film/FilmsTrailer";
import PromoBanner from "@/widgets/promo-banner/ui/PromoBanner";




export default function main() {
    return (
        <div>
        <FilmsTrailer/>
        <CardFilm/>
        <PromoBanner/>
        </div>
    )
}