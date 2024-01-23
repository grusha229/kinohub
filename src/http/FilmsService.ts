import { IFilmResponse } from "@/DataModels/Films";


export const getAllFilms = async () => {
const response = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301",{
    method: 'GET',
    headers: {
        'X-API-KEY': 'fd1bb711-1092-49c7-a6f2-16e708992674',
        'Content-Type': 'application/json',
    },
});
if (!response.ok) throw new Error("Unable to fetch films.");
    return response.json();
};

export const getFilmsByQuery = async (query: string, page: number) : Promise<IFilmResponse> => {
const response = await fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${query}&page=${page}`,{
    method: 'GET',
    headers: {
        'X-API-KEY': 'fd1bb711-1092-49c7-a6f2-16e708992674',
        'Content-Type': 'application/json',
    },
});

if (!response.ok) throw new Error("Unable to fetch posts.");
    return response.json();
};

export const getTestFilm = async () => {
    const response = await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/301",{
        method: 'GET',
        headers: {
            'X-API-KEY': 'fd1bb711-1092-49c7-a6f2-16e708992674',
            'Content-Type': 'application/json',
        },
    });
  
    if (!response.ok) throw new Error("Unable to fetch films.");
  
    return response.json();
  };
  