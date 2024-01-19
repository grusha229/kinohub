"use client";
// import useSWR from "swr";
import { useFilms } from "@/store";
import { FormEventHandler, useState } from "react";

const FilmSearch = () => {
  const [search, setSearch] = useState("");

  const getFilmsByQuery = useFilms((state) => state.getFilmsByQuery);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await getFilmsByQuery(search, 1);
  };

  return (
    <div className={`container`}>
        <form onSubmit={handleSubmit}>
        <input
            type="search"
            placeholder="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">Search</button>
        </form>
    </div>
  );
};

export { FilmSearch };