// HealthCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const HealthCard = ({ title, value, image }) => (
    <View style={styles.card}>
        <Image source={image} style={styles.cardImage} />
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardValue}>{value}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
    },
    cardImage: {
        width: 40,
        height: 40,
        marginRight: 20,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardValue: {
        fontSize: 24,
        color: '#007AFF',
    },
});

export default HealthCard;
