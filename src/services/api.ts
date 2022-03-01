import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
  headers: {Accept: 'application/json'},
});

export default {
  getPokemons: async () => {
    let {data: json} = await api.get('');
    return json;
  },
};
