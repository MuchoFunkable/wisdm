import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Keyboard,
    Image,
    Dimensions
  } from 'react-native';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from 'react-native-chart-kit'
import Svg, {
    Circle,
    Ellipse,
    G,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask,
  } from 'react-native-svg';

import wisdmLogo from '../assets/icons/wisdmLogo.png'

const line = {
   // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [3022, 5209, 4899, 4344, 5422, 6837],
        strokeWidth: 2, // optional
      },
    ],
  };

const Home = ({navigation}) => {
    return(
        <SafeAreaView style={styles.body}>
            <ScrollView>
                <View style={styles.topBar}>
                    <Image source={wisdmLogo} style={{width: 80, resizeMode: 'contain'}}></Image>
                </View>
                <View style={styles.balanceBar}>
                    <Text>Account Value</Text>
                    <Text style={styles.balanceHeader}>$6,837.53</Text>
                    <Text>All Stocks & Cryptocurrencies</Text>
                </View>
                <View>
                    <LineChart
                        data={line}
                        width={350} // from react-native
                        height={250}
                        yAxisLabel={'$'}
                        chartConfig={{
                            backgroundColor: '#e26a00',
                            backgroundGradientFrom: '#fff',
                            backgroundGradientTo: '#fff',
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => `#3d9be9`,
                            style: {
                                borderRadius: 16,
                            }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        alignItems: 'center',
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;

const styles = StyleSheet.create({
    body: {
        margin: 0,
        padding: 0,
        backgroundColor: '#fff',
    },
    topBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
    },
    balanceBar: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        textAlign: 'center',
    },
    balanceHeader: {
        fontFamily: 'avalontwo',
        fontSize: 32,
        color: '#3d9be9',
    }
})