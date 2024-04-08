import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HealthCard from '../components/homePage-Card';

const Homepage = () => {
    const healthData = [
        { title: '心率', value: '72 bpm', image: require('../assets/homepage/heart.png') },
        { title: '血压', value: '120/80 mmHg', image: require('../assets/homepage/blood-pressure.png') },
        { title: '血糖', value: '5.2 mmol/L', image: require('../assets/homepage/blood-glucose.png') },
        { title: '步数', value: '6,542', image: require('../assets/homepage/steps.png') },
    ];

    return (
        <View style={styles.container}>
            {healthData.map((item, index) => (
                <HealthCard
                    key={index}
                    title={item.title}
                    value={item.value}
                    image={item.image}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
});

export default Homepage;
