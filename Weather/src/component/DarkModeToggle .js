
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { light, night } from '../icons';
import { normalize } from '../helpers';


const DarkModeToggle = ({ isDarkMode, toggleDarkMode }) => {
    return (
        <TouchableOpacity
            activeOpacity={1}
            onPress={toggleDarkMode}
            style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: 'rgba(0,0,0,0.5)',
                height: normalize(50),
                width: normalize(50),
                borderTopLeftRadius: 30,
            }}>
            <Image source={isDarkMode ? night : light} style={{ height: normalize(28), width: normalize(28) }} tintColor={isDarkMode ? null : "white"} />
        </TouchableOpacity>
    );
};

export default DarkModeToggle;
