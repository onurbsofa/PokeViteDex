import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
    const response = await axios.get(`${baseURL}/pokemon?limit=151`);
    return response.data;
};