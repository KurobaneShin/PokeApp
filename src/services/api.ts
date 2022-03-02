import axios from 'axios';

const api = axios.create({
  headers: {Accept: 'application/json'},
});

export default {
  getPokemons: async () => {
    let {data: json} = await api.get('https://pokeapi.co/api/v2/pokemon');
    return json;
  },
  getPokemonDetails: async (link: String) => {
    console.log(link);
    let {data: json} = await api.get(`${link}`);
    return json;
  },
};
