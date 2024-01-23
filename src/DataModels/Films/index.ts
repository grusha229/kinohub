type TCountry = {
    country: string
}
type TGenre = {
    genre: string
}

export type TFilmData = {
    filmId: number,
    nameRu: string,
    nameEn: string,
    type: string, // ТИП поменять
    year: string,
    description: string,
    filmLength: string,
    countries: TCountry[]
    genres: TGenre[],
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string
}

export interface IFilmResponse {
    keyword: string,
    pagesCount: number,
    films: TFilmData[],
    searchFilmsCountResult: number
}