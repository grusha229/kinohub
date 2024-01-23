import Image from "next/image";
import s from "./SiteSection.module.css"
import Link from "next/link";
import Rating from "../Rating/RatingStars";

type Props = {
    name: string,
    desc: string,
    link: string,
    imgSrc: string
};


export default function SiteSection (props: Props) {
    return (
        <article className={s.section}>
            <Link href={`/films/${props.imgSrc}`} className={s.movieLink}>
                <Image 
                    className={s.movieImage}
                    height={400} width={300} 
                    src={props.imgSrc}
                    alt={props.name}
                    quality={70}
                    sizes="100vh"
                    placeholder = 'blur'
                />
                <div className={s.movieDescription}>
                    <h4 className={s.movieDescription__title}>
                        {props.name}
                    </h4>
                    <div className={s.movieFooter}>
                        <div className={s.movieFooter_genre}>
                            {props.desc}
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
  }