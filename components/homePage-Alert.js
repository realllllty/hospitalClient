// AlertCard.js
import React from 'react';
import { View, Text, StyleSheet, Linking, Image, TouchableOpacity } from 'react-native';

const makeCall = (phoneNumber) => {
    Linking.openURL(`tel:${phoneNumber}`);
}

const AlertCard = ({ time, info, type, number }) => (
    <View style={[styles.card, type === 'current' && styles.currentCard]}>
        <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>{type === 'current' ? '当前报警' : '历史报警'}</Text>
            <Text style={styles.cardTime}>{time}</Text>
            <Text style={styles.cardInfo}>{info}</Text>
        </View>
        <TouchableOpacity onPress={() => makeCall(number)}>
            <Image source={require('../assets/homepage/phone.png')} style={{ width: 40, height: 40 }}/>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row'
    },
    currentCard: {
        borderWidth: 2,
        borderColor: 'red',
    },
    cardContent: {
        flexGrow: 1
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardTime: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    cardInfo: {
        fontSize: 16,
    },
});

export default AlertCard;
