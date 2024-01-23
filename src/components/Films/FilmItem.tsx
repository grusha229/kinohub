import Image from "next/image";
import s from "./FilmItem.module.css"
import Link from "next/link";
import Rating from "../Rating/RatingStars";

type Props = {
    params?: {
      id: string;
    },
    isPriority: boolean,
    film: {
        nameRu: string,
        nameEn: string,
        description: string,
        posterUrl: string,
        posterUrlPreview: string,
        year: string,
        filmId: number,
        rating: string,
        genres: any[]
    }
  };


export default function Film (props: Props) {
    console.log(props)
    return (
        <article className={s.movie}>
            <Link href={`/films/${props.film.filmId}`} className={s.movieLink}>
                <Image 
                    className={s.movieImage}
                    height={400} width={300} 
                    src={props.film.posterUrl}
                    alt={props.film.nameEn}
                    quality={70}
                    sizes="100vh"
                    placeholder = 'blur'
                    blurDataURL={props.film.posterUrlPreview}
                    priority={props.isPriority}
                />
                <div className={s.movieDescription}>
                    <div>
                        <Rating value={parseInt(props.film.rating)}/>
                    </div>
                    <h4 className={s.movieDescription__title}>
                        {props.film.nameRu}
                        {
                            !(props.film.nameRu) && <p>{props.film.nameEn}</p>
                        }
                    </h4>
                    <div className={s.movieFooter}>
                        <div className={s.movieFooter_genre}>
                            {(props.film.genres.length > 0) && props.film.genres[0].genre}
                        </div>
                        <div className={s.movieFooter_year}>
                            {(props.film.year) && props.film.year}
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
  }