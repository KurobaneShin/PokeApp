import axios from 'axios';

const api = axios.create({
  headers: {Accept: 'application/json'},
});

export default {
  getPokemons: async (link: String) => {
    console.log(link);
    let {data: json} = await api.get(`${link}`);
    return json;
  },
};
