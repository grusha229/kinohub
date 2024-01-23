import { IFilmResponse, TFilmData } from "@/DataModels/Films"
import { getAllFilms, getFilmsByQuery } from "@/http/FilmsService"
import { devtools, persist } from "zustand/middleware"
import { createWithEqualityFn } from 'zustand/traditional'

export type TUseFilms = {
    query: string | null,
    films: TFilmData [] | null,
    currentPage: number | null,
    pagesCount: number,
    loading: boolean,
    filmsAmount: number,
    getAllFilms : () => Promise<void>,
    getFilmsByQuery: (query: string, page: number) => Promise<void>,
    getMoreFilms: () => Promise<void>,
}

const pageCountApiHandler = (filmsAmount: number) => {
    const k = 20
    return Math.ceil(filmsAmount/k)
} 

export const useFilms = createWithEqualityFn(
    devtools<TUseFilms>((set, getState) => ({
        query: null,
        films: null,
        currentPage: 1,
        loading: false,
        filmsAmount: 0,
        pagesCount: 1,
        getAllFilms: async () => {
            set({loading: true})
            const films = await getAllFilms()
            set({films, loading: false})
        },
        getFilmsByQuery: async (query: string, page: number) => {
            set({query: query ,loading: true, films: null})
            getFilmsByQuery(query, page)
                .then((res) => {
                    set({films: res.films, loading: false, filmsAmount: res.searchFilmsCountResult, pagesCount: pageCountApiHandler(res.searchFilmsCountResult), })
                })
        },
        getMoreFilms: async () => {
            const currentFilms = getState().films

            //@ts-ignore
            getFilmsByQuery(getState().query, getState().currentPage + 1)
                .then((res) => {
                    //@ts-ignore
                    set({films: currentFilms.concat(res.films),loading: false,filmsAmount: res.searchFilmsCountResult,pagesCount: pageCountApiHandler(res.searchFilmsCountResult),currentPage: getState().currentPage + 1})
                })
        }
    }),))