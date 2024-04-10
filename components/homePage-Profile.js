import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ElderInfoCard = ({ info }) => (
    <View style={styles.card}>
        <Image source={ info.avatar ? info.avatar : '../assets/homepage/avatar-default.png' } style={styles.avatar} />
        <View style={styles.content}>
            <Text style={styles.name}>{info.name}</Text>
            <Text style={styles.age}>{info.age}岁</Text>
            <Text style={styles.guardian}>监护人: {info.guardian}</Text>
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
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 20,
    },
    content: {
        flex: 1,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    age: {
        fontSize: 18,
        color: '#007AFF',
        marginBottom: 5,
    },
    guardian: {
        fontSize: 18,
    },
});

export default ElderInfoCard;
