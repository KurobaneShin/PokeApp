import React, {useState, useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import api from '../../services/api';

const Details = () => {
  const [pokemon, setPokemon] = useState<any>([]);
  type DetailsScreenRouteProp = {
    name: string;
    key: string;
    params: {
      link: string;
    };
  };
  const route = useRoute<DetailsScreenRouteProp>();
  const link = route.params.link;

  const fetchPokemonDetails = async () => {
    let response = await api.getPokemonDetails(link);
    if (response) {
      setPokemon(response);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  });
  return (
    <SafeAreaView>
      <Text>{pokemon.name}</Text>
    </SafeAreaView>
  );
};

export default Details;
