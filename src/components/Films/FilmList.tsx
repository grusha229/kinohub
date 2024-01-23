"use client";
import { shallow } from "zustand/shallow";
import { TUseFilms, useFilms } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import Film from "./FilmItem";
import s from "./FilmList.module.css"

const FilmList = () => {
    const [films, filmsAmount, loading, currentPage, pagesCount, getMoreFilms] = useFilms((state : any) => [
        state.films,
        state.filmsAmount,
        state.loading,
        state.currentPage,
        state.pagesCount,
        state.getMoreFilms,
    ],
    shallow
  );

  useEffect(() => {
    // getAllFilms();
    console.log(films)
  }, []);

if ((loading) && !(films)) {
    return (
        <div className={`${s.block} container`}>
            <h3>Загрузка...</h3>
        </div>
    )
}

if (!(loading) && !(films)) {
    return (
        <div className={`${s.block} container`}>
            <h3>Введите запрос </h3>
        </div>
    )
}

  return (

    <div className={`${s.block} container`}>
        <h3> Нашли {filmsAmount} фильмов</h3>
        <ul className={s.filmGrid}>
            {
                films.map((film: any, index: number) => (
                    <Film isPriority={(index < 4)} film={film} key={film.filmId}/>
                ))
            }
        </ul>
        {
            (currentPage < pagesCount) && <button onClick={getMoreFilms}> Загрузить ещё </button>
            }
    </div>
  )
}

export default FilmList;