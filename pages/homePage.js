import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, ScrollView, ImageBackground } from "react-native";
import React, { useState, useEffect } from "react";
import HealthCard from "../components/homePage-Card";
import ProfileCard from "../components/homePage-Profile";
import AlertCard from "../components/homePage-Alert";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import globalStyles from "../GlobalStyles";
import request from "../utils/request";

const Homepage = () => {
    const [healthData, setHealthData] = useState([
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
    ]);
    const buttonData = [
        { image: require("../assets/homepage/setting.png"), indexText: "设置" },
    ];
    const [personData, setPersonData] = useState({
        name: "张伟",
        age: "25",
        guardian: "本人",
    });
    const [alertData, setAlertData] = useState([
        { id: 1, time: '2023-04-09 10:30:00', info: '设备A温度过高,当前温度80℃', type: 'current', number: '12345678901'},
        { id: 2, time: '2023-04-09 09:45:00', info: '设备B压力异常,当前压力1.2MPa', type: 'history', number: '12345678901' },
        { id: 3, time: '2023-04-08 15:20:00', info: '设备C故障,需要维修', type: 'history', number: '12345678901' },
        { id: 4, time: '2023-04-08 11:10:00', info: '设备D缺料,请及时补充', type: 'history', number: '12345678901' },
        { id: 5, time: '2023-04-07 16:55:00', info: '设备E效率低,当前效率75%', type: 'history', number: '12345678901' },
    ]);

    // const getData = () => {
    //     setInterval(async () => {
    //         healthData = await request('/resident/info/status/2', {auth: false})
    //     }, 1000 * 60 * 5)
    // }

    useEffect(() => {
        const fetchData = async () => {
            // 在这里发送请求获取最新的数据
            const newHealthData = await request.get("/api/health-data");
            const newPersonData = await request.get("/api/person-data");
            const newAlertData = await request.get("/api/alert-data");

            // 更新状态
            setHealthData(newHealthData);
            setPersonData(newPersonData);
            setAlertData(newAlertData);
        };

        fetchData();
        const interval = setInterval(fetchData, 1000 * 60 * 5); // 每5分钟获取一次数据

        return () => {
            clearInterval(interval); // 在组件卸载时清除定时器
        };
    }, []);

    const UserStatusScreen = () => (
        <View style={ styles.tabContainer }>
            <ScrollView style={ styles.scroll }>
                {healthData.map((item, index) => (
                    <HealthCard
                        key={index}
                        title={item.title}
                        value={item.value}
                        image={item.image}
                    />
                ))}
            </ScrollView>
        </View>
    );

    const AlertInfoScreen = () => (
        <View style={styles.tabContainer}>
            {
                alertData.map((item, index) => (
                    <AlertCard
                        key={index}
                        time={item.time}
                        info={item.info}
                        type={item.type}
                    />
                ))
            }
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
        <View style={ globalStyles.container }>
                <ProfileCard info={fakeData} />
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    renderTabBar={props => (
                        <TabBar
                            {...props}
                            style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: 10, }}
                            indicatorStyle={{ backgroundColor: 'rgba(255, 255, 255, 0)', height: 2  }}
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
    image: {
        height: "100%",
        width: "100%",
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    scroll: {
        height: "100%",
    },
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
        paddingVertical: 20
    },
});

export default Homepage;
