import React, {useEffect} from 'react';

import {SafeAreaView, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

import api from '../../services/api';

const Details = () => {
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
      console.log(response);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  });
  return (
    <SafeAreaView>
      <Text>Details Screen</Text>
    </SafeAreaView>
  );
};

export default Details;
