/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import Api from './src/services/api';
import {useState, useEffect} from 'react';

import {SafeAreaView, FlatList, Text} from 'react-native';

const App = () => {
  const [pokemonList, setPokemonList] = useState<any>([]);
  const teste = async () => {
    let response = await Api.getPokemons();
    if (response) {
      setPokemonList(response.results);
    }
  };

  useEffect(() => {
    teste();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
};

export default App;
