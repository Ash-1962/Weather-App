import { Dimensions, PixelRatio, Platform } from 'react-native';

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;


export const normalize = (size) => {
    const scale = screenWidth / 390;
    const newSize = size * scale;
    if (Platform.OS == 'ios') return Math.round(PixelRatio.roundToNearestPixel(newSize));
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) + 1;
}


