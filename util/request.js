import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const instance = axios.create({
    baseURL: 'https://xiwaa5634xhr.ngrok.xiaomiqiu123.top',
    timeout: 1000
});

instance.interceptors.response.use(function (config) {
    return config;
}, function (error) {
    if (error.response.status === 500) {
        return {
            data: {
                code: 0,
                message: '服务器内部问题'
            }
        };
    }
});

export default async function (url, sign, options) {
    // 如果options中有auth,就在请求头中加入token
    if (sign.auth) {
        let token = await AsyncStorage.getItem("userToken");
        options.headers = {
            'Authorization': `Bearer ${token}`,
            ...options.headers
        };
    }

    // 发送请求
    return instance({ url, ...options}).then(res => {
        let code = res.data.code;
        if (code === 0) {
            return res.data.message ? res.data.message : '请求失败';
        } else if (code === 1) {
            return res.data.data;
        }
    })
}
