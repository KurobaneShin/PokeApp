import React from 'react';
import Api from '../../services/api';
import {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/RootStackParamList';

const Home = () => {
  const navigation = useNavigation<RootStackParamList>();

  const [pokemonList, setPokemonList] = useState<any>([]);
  const [nextPageUrl, setNextPageUrl] = useState<string>('');
  const [previousPageUrl, setPreviousPageUrl] = useState<string>('');

  const fetchPokemonList = async () => {
    try {
      let response = await Api.getPokemons();
      if (response) {
        setPokemonList(response.results);
        setNextPageUrl(response.next);
        setPreviousPageUrl(response.previous);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNextButton = async () => {
    try {
      let response = await Api.getPokemonDetails(nextPageUrl);
      if (response) {
        setPokemonList(response.results);
        setPreviousPageUrl(response.previous);
        setNextPageUrl(response.next);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handlePreviousButton = async () => {
    try {
      let response = await Api.getPokemonDetails(previousPageUrl);
      if (response) {
        setPokemonList(response.results);
        setPreviousPageUrl(response.previous);
        setNextPageUrl(response.next);
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
      <View style={styles.row}>
        <TouchableOpacity onPress={() => handlePreviousButton()}>
          <Text>Teste</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNextButton()}>
          <Text>Teste</Text>
        </TouchableOpacity>
      </View>
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
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});

export default Home;
