"use client";
// import useSWR from "swr";
import { TUseFilms, useFilms } from "@/store";
import Debounce from "@/utils/Debounce";
import { FormEventHandler, useEffect, useState } from "react";

const FilmSearch = () => {
  const [search, setSearch] = useState<string | null>(null);

  const getFilmsByQuery = useFilms((state : any) => state.getFilmsByQuery);

  useEffect(() => {
    (search) && getFilmsByQuery(search, 1);
  },[search])


  return (
    <div className={`container`}>
        <input
            type="search"
            placeholder="search"
            onChange={
              Debounce((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
                setSearch(e.target.value)
              }, 500)
          }
        />
    </div>
  );
};

export { FilmSearch };