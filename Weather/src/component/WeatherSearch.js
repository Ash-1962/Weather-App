import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from '../styles';
import { search } from '../icons';


const WeatherSearch = ({ query, onChangeText, handleSearch, isDarkMode }) => (
    <View style={styles.searchContainer}>
        <TextInput
            style={[styles.input, { color: isDarkMode ? 'white' : 'black', backgroundColor: isDarkMode ? '#333' : '#fff' }]}
            placeholder="Search..."
            placeholderTextColor={isDarkMode ? 'white' : 'black'}
            value={query}
            onChangeText={onChangeText}
            autoCapitalize="none"
            clearButtonMode="while-editing"
        />
        <TouchableOpacity onPress={handleSearch} style={styles.iconContainer}>
            <Image source={search} style={styles.searchIcon} />
        </TouchableOpacity>
    </View>
);

export default WeatherSearch;
