import React from 'react';
import type {Node} from 'react';
//mport './Coin.css';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
  } from 'react-native';

  const styles = StyleSheet.create({
    image: {
        width: 35,
        height: 35,
        resizeMode: 'stretch',
    },
    headerText: {
        fontSize: 16,
        color: '#333',
    },
    coinContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    coinRow: {
        flex: 1,
        flexDirection: 'row',
        justifyItems: 'start',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#f1f1f1',
    },
    coin: {
        flex: 1,
        alignItems: 'center',
        paddingRight: 12,
    },
    coinSymbol: {
        textTransform: 'uppercase',
        color: '#333',
        fontSize: 10,
    },
    coinData: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    coinPrice: {
        width: 110,
        color: '#333',
        fontSize: 12,
    },
    coinVolume: {
        width: 200,
        color: '#333',
        fontSize: 12,
    },
    coinMarketCap: {
        width: 240,
        color: '#333',
        fontSize: 12,
    },
    coinPercent: {
        width: 80,
        fontSize: 12,
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    },
  });

const Coin = ({name, image, symbol, price, volume, priceChange, marketCap}): Node => {
  return (
    <SafeAreaView style={styles.coinContainer}>
        <View style={styles.coinRow}>
            <View style={styles.coin}>
                <Image source={[image]} style={styles.image}/>
                <Text style={styles.headerText}>{name}</Text>
                <Text style={styles.coinSymbol}>{symbol}</Text>
            </View>
            <View style={styles.coinData}>
                <Text style={styles.coinPrice}>${price}</Text>
                <Text style={styles.coinMarketCap}>${marketCap.toLocaleString()}</Text>
                {priceChange < 0 ? (
                    <Text style={[styles.coinPercent, styles.red]}>{priceChange.toFixed(2)}%</Text>
                ) : (
                    <Text style={[styles.coinPercent, styles.green]}>{priceChange.toFixed(2)}%</Text>
                )}
                <Text style={styles.coinVolume}>
                    Volume : ${volume.toLocaleString()}
                </Text>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default Coin