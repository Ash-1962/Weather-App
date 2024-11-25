
import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import moment from 'moment';

import { cloud, normal, sun } from '../icons';
import styles from '../styles';


const WeatherForecast = ({ weatherData, isDarkMode }) => {

    const getWeatherIcon = (condition) => {
        condition = condition.toLowerCase();
        switch (condition) {
            case 'partly cloudy':
                return normal;
            case 'cloudy':
                return cloud;
            case 'clear':
                return sun;
            case 'rainy':
                return rainy;
            case 'thunderstorms':
                return pic;
            default:
                return normal;
        }
    };


    const renderWeatherItem = ({ item }) => (


        <View style={[styles.weatherBlock, { borderColor: isDarkMode ? "white" : "white" }]}>
            <Text style={styles.dayText}>{moment(item.date).format('ddd')}</Text>
            <Image source={getWeatherIcon(item.weather_conditions)} style={styles.weatherImage} />
            <Text style={styles.tempText}>{item.max_temperature}ºc</Text>
        </View>
    );

    return (
        <FlatList
            data={weatherData}
            renderItem={renderWeatherItem}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            contentContainerStyle={styles.weatherListContainer}
            showsHorizontalScrollIndicator={false}
        />
    );
};

export default WeatherForecast;
