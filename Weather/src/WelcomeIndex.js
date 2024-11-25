import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar, ScrollView, Switch, StyleSheet, Appearance } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import DarkModeToggle from './component/DarkModeToggle ';

import { pic } from './images';
import styles from './styles';

const WelcomeIndex = ({ navigation }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const colorScheme = Appearance.getColorScheme();
        setIsDarkMode(colorScheme === 'dark');
    }, []);

    return (
        <LinearGradient
            colors={isDarkMode ? ['#121212', '#333333'] : ['#005C97', '#363795']}
            style={styles.welcomeContainer}
        >
            <StatusBar backgroundColor={isDarkMode ? '#121212' : '#005C97'} />
            <ScrollView>
                <View style={styles.welcomeInnerContainer}>
                    <View style={styles.welcomeImageContainer}>
                        <Image source={pic} style={styles.welcomeImage} />
                    </View>
                    <View style={styles.welcomeTextContainer}>
                        <Text style={[styles.welcomeTitle, { color: isDarkMode ? '#FFBA25' : '#FFBA25' }]}>Weather</Text>
                        <Text style={[styles.welcomeSubtitle, { color: isDarkMode ? 'white' : 'white' }]}>Forecast App.</Text>
                        <Text style={[styles.welcomeDescription, { color: isDarkMode ? 'white' : 'white' }]}>
                            It's the newest weather app. It has a bunch of features including most of the ones that every weather app has.
                        </Text>
                    </View>
                    <View style={styles.welcomeButtonContainer}>
                        <TouchableOpacity
                            style={styles.welcomeButton}
                            onPress={() => navigation.navigate('WeatherPage')}
                        >
                            <Text style={styles.welcomeButtonText}>Get started</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.darkEnd}>
                <DarkModeToggle isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prev => !prev)} />
            </View>
        </LinearGradient>
    );
};

export default WelcomeIndex;
