"use client";
import { shallow } from "zustand/shallow";
import { useFilms } from "@/store";
import Link from "next/link";
import { useEffect } from "react";
import SiteSection from "./SiteSection";
import s from "./SiteSectionList.module.css"

export default function SiteSectionList () {
  return (

    <div className={`${s.block} container`}>
        <ul className={s.filmGrid}>
            <SiteSection name={"Фильмы"} desc={"Поиск по фильма"} link={`/films`} imgSrc={"/"}/>
            <SiteSection name={"Актеры"} desc={"Поиск актёров"} link={`/films`} imgSrc={"/"}/>
        </ul>
    </div>
  )
}