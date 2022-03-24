import React, {useState, useEffect} from 'react';
import SearchBar from "react-native-dynamic-search-bar";
import axios from 'axios';
import type {Node} from 'react';
import Coin from '../Coin';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Keyboard,
} from 'react-native';

const Crypto: () => Node = () => {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false').then(res => {
      setCoins(res.data)
      console.log(res.data)
    })
    .catch(error => alert('Something is wrong'))
  }, []);

  // OUTDATED DUE TO REACT NATIVE
  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  // CONTENT FOR THE PAGE
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View style={styles.coinApp}>
          <View style={styles.coinSearch}>
            <Text style={styles.coinText}>Search Cryptocurrencies</Text>
            <SearchBar placeholder="Type Here..." onChangeText={setSearch} value={search}/>
          </View>
          <View>
          {filteredCoins.map(coin => {
            return ( <Coin
              key={coin.id}
              name={coin.name}
              image={coin.image}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              price={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              />
            )
          })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// STYLING FOR THE PAGE
const styles = StyleSheet.create({
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: '#fff',
    color: '#333',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  coinApp: {
    flex: 1,
  },
  coinSearch: {
    marginBottom: 16,
    marginTop: 32,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinText: {
    marginBottom: 32,
    textAlign: 'center',
    fontSize: 24,
    color: '#3d9be9',
    fontFamily: 'avalontwo',
  }
});

export default Crypto;