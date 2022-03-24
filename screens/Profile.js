import React from "react";
import { View, Text , Button, StyleSheet } from 'react-native';

const Profile = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text>Profile</Text>
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})