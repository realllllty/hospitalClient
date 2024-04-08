import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import HealthCard from "../components/homePage-Card";
import ProfileCard from "../components/homePage-Profile";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

const Homepage = () => {
    const healthData = [
        {
            title: "心率",
            value: "72 bpm",
            image: require("../assets/homepage/heart.png"),
        },
        {
            title: "血压",
            value: "120/80 mmHg",
            image: require("../assets/homepage/blood-pressure.png"),
        },
        {
            title: "血糖",
            value: "5.2 mmol/L",
            image: require("../assets/homepage/blood-glucose.png"),
        },
        {
            title: "步数",
            value: "6,542",
            image: require("../assets/homepage/steps.png"),
        },
    ];
    const buttonData = [
        { image: require("../assets/homepage/setting.png"), indexText: "设置" },
    ];
    const fakeData = {
        name: "张伟",
        age: "25",
        guardian: "本人",
    };

    const UserStatusScreen = () => (
        <View style={styles.tabContainer}>
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

    const AlertInfoScreen = () => (
        <View style={styles.tabContainer}>
            {/* 这里可以添加报警信息的内容 */}
        </View>
    );

    const initialLayout = { width: Dimensions.get('window').width };

    const renderScene = SceneMap({
        userStatus: UserStatusScreen,
        alertInfo: AlertInfoScreen,
    });

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'userStatus', title: '用户状态' },
        { key: 'alertInfo', title: '报警信息' },
    ]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.buttonGroup}>
                    {buttonData.map((button, index) => (
                        <TouchableOpacity key={index} style={styles.button}>
                            <Image source={button.image} style={styles.buttonImage} />
                            <Text> {button.indexText} </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <ProfileCard info={fakeData} />
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={initialLayout}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        style={{ backgroundColor: 'white' }}
                        indicatorStyle={{ backgroundColor: 'blue', height: 2 }}
                        activeColor="blue"
                        inactiveColor="black"
                        labelStyle={{ fontSize: 16 }}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingBottom: 10,
        paddingTop: 20,
        backgroundColor: "#f0f0f0",
        height: 60,
    },
    buttonGroup: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        overflow: "scroll",
        width: "100%",
    },
    button: {
        marginRight: 10,
        flexDirection: "column",
        alignItems: "center",
    },
    buttonImage: {
        width: 30,
        height: 30,
    },
    container: {
        flex: 1,
        backgroundColor: "#f0f0f0",
    },
    tabContainer: {
        flex: 1,
        padding: 20,
    },
});

export default Homepage;
