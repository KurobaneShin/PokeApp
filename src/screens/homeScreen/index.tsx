import React from 'react';
import Api from '../../services/api';
import {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStackParamList';

const Home = () => {
  const navigation = useNavigation<RootStackParamList>();

  const [pokemonList, setPokemonList] = useState<any>([]);

  const fetchPokemonList = async () => {
    let response = await Api.getPokemons();
    if (response) {
      setPokemonList(response.results);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {link: item.url})}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
