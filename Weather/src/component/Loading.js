import React, { useRef, useEffect } from 'react';
import { View, Animated, Easing, Image, ActivityIndicator } from 'react-native';
import { spinner } from '../icons';






const Loading = ({ appLoading = false, shop, customStyle, loadingColor, size }) => {
    const rotateAnim = useRef(new Animated.Value(0)).current;
    const dimension = appLoading ? 80 : 40

    useEffect(() => {
        startRotation();
    }, []);

    const startRotation = () => {
        Animated.loop(
            Animated.timing(rotateAnim, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };

    const rotate = rotateAnim.interpolate({
        inputRange: [0, 1],
        outputRange: ['360deg', '0deg'],
    });

    if (shop) {
        return (
            <View style={{
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'center'
            }}>

                <Animated.Image
                    source={spinner}
                    style={{ width: dimension, height: dimension, transform: [{ rotate }] }}
                />

            </View>

        );
    }

    return (
        <View style={{ ...customStyle }}>
            <ActivityIndicator color={loadingColor} size={size} />
        </View>
    );
};

export default Loading;
