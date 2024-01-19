import { getAllFilms, getFilmsByQuery } from "@/http/FilmsService"
import { create } from "zustand"
import { createWithEqualityFn } from 'zustand/traditional'

type TUseFilms = {
    films: any [] | null,
    loading: boolean,
    filmsAmount: number,
    getAllFilms : () => Promise<void>,
    getFilmsByQuery: (query: string, page: number) => Promise<void>,
}

export const useFilms = createWithEqualityFn<TUseFilms>((set) => ({
    films: null,
    loading: false,
    filmsAmount: 0,
    getAllFilms: async () => {
        set({loading: true})
        const films = await getAllFilms()
        set({films, loading: false})
    },
    getFilmsByQuery: async (query: string, page: number) => {
        set({loading: true, films: null})
        const films = await getFilmsByQuery(query, page)
        set({films: films.films, loading: false, filmsAmount: films.searchFilmsCountResult})
        console.log(films.films)
    },
}))