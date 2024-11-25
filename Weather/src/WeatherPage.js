import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Image, Text, Animated, StatusBar, Appearance, ScrollView } from 'react-native';
import { get } from "lodash";
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import NetInfo from '@react-native-community/netinfo';

import Loading from './component/Loading';
import useWeather from './hook/useWeather';
import DarkModeToggle from './component/DarkModeToggle ';
import WeatherForecast from './component/WeatherForcast';

import { cloud, location, normal, rainy, search, sun } from './icons';
import styles from './styles';
import WeatherSearch from './component/WeatherSearch';
import { normalize } from './helpers';

const WeatherPage = () => {
    const [query, setQuery] = useState('');
    const [isForecastVisible, setIsForecastVisible] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [bounceAnim, setBounceAnim] = useState(new Animated.Value(1));
    const [isOffline, setIsOffline] = useState(false);

    const { homefun, list, forcast } = useWeather();
    const weather = list.weather.list;
    const forcastdata = list.forcast.list;
    const fetching = get(list, 'weather.fetching', true);

    useEffect(() => {
        const colorScheme = Appearance.getColorScheme();
        setIsDarkMode(colorScheme === 'dark');
        homefun("weather");
        forcast("forcast");

        const unsubscribe = NetInfo.addEventListener(state => {
            setIsOffline(!state.isConnected);
        });

        return () => unsubscribe();
    }, []);

    const triggerBounce = () => {
        if (isForecastVisible) {
            Animated.spring(bounceAnim, {
                toValue: 1.0,
                friction: 3,
                tension: 100,
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(bounceAnim, {
                toValue: 1.2,
                friction: 3,
                tension: 100,
                useNativeDriver: true,
            }).start();
        }
    };

    const handleSearch = () => {
        homefun("weather");
    };

    const toggleForecast = () => {
        setIsForecastVisible(prev => !prev);
        triggerBounce();
        Animated.timing(animation, {
            toValue: isForecastVisible ? 0 : 1,
            duration: 500,
            useNativeDriver: true,
        }).start();
    };

    const getWeatherIcon = (condition) => {
        condition = typeof condition === 'string' ? condition.trim().toLowerCase() : "";
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

    const bounceStyle = {
        transform: [{ scale: bounceAnim }],
    };

    return (
        <LinearGradient colors={isDarkMode ? ['#121212', '#222222'] : ['#005C97', '#363795']} style={styles.container}>
            <StatusBar backgroundColor={isDarkMode ? '#121212' : '#005C97'} />
            <WeatherSearch query={query} onChangeText={(value) => setQuery(value)} handleSearch={handleSearch} isDarkMode={isDarkMode} />
            {fetching ? (
                <View style={{ paddingTop: "60%" }}>
                    <Loading loadingColor={"white"} size={normalize(40)} />
                </View>
            ) : (
                <>
                    {!isOffline ? (
                        <ScrollView style={styles.weatherInfoContainer}>
                            <View style={styles.weatherInfoHeader}>
                                <Image source={location} style={styles.locationIcon} />
                                <Text style={[styles.date, { opacity: 0.6, fontSize: normalize(18) }]}>{get(weather, "location.country", "")}</Text>
                                <Text style={styles.cityName}>{get(weather, "location.city", "")}</Text>
                                <Text style={styles.date}>{moment().format('ddd, MMM Do')}</Text>
                            </View>

                            <Animated.View style={[styles.temperatureContainer, bounceStyle]}>
                                <Text style={styles.temperature}>{Math.round(get(weather, "current_weather.temperature", ""))}</Text>
                                <View>
                                    <Text style={styles.unit}>ºc</Text>
                                    <Image source={getWeatherIcon(get(weather, "current_weather.weather_conditions", ""))} style={styles.weatherIcon} />
                                </View>
                            </Animated.View>

                            <Text style={styles.weatherDescription}>{get(weather, "current_weather.weather_conditions", "")}</Text>
                            <TouchableOpacity
                                onPress={toggleForecast}
                                activeOpacity={1}
                                style={[styles.forecastButton, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}
                            >
                                <Text style={[styles.forecastButtonText, { color: isDarkMode ? '#fff' : '#005C97' }]}>
                                    {isForecastVisible ? "Hide Forecast" : "7 days Forecast"}
                                </Text>
                            </TouchableOpacity>

                            <Animated.View style={{ opacity: animation }}>
                                <WeatherForecast weatherData={get(forcastdata, "daily_forecast", "")} isDarkMode={isDarkMode} />
                            </Animated.View>
                        </ScrollView>
                    )
                        :
                        <View style={{ alignItems: "center", paddingHorizontal: normalize(50), marginTop: normalize(160) }}>
                            <Text style={{ fontSize: normalize(20), textAlign: "center", color: "white", opacity: 0.6 }}>
                                You are currently offline. Please check your internet connection and try again.
                            </Text>
                        </View>
                    }
                </>
            )}
            <View style={styles.darkEnd}>
                <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
            </View>
        </LinearGradient>
    );
};

export default WeatherPage;
