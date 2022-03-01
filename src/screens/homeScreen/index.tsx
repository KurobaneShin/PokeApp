import React from 'react';
import Api from '../../services/api';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStackParamList';

const Home = () => {
  const navigation = useNavigation<RootStackParamList>();

  const [pokemonList, setPokemonList] = useState<any>([]);

  const fetchPokemonList = async () => {
    try {
      let response = await Api.getPokemons();
      if (response) {
        setPokemonList(response.results);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={pokemonList}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {link: item.url})}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;
