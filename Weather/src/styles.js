import { StyleSheet } from "react-native";
import { normalize } from "./helpers";

const styles = StyleSheet.create({
    welcomeContainer: {
        flex: 1,
    },
    welcomeInnerContainer: {
        paddingHorizontal: normalize(36),
    },
    welcomeImageContainer: {
        alignItems: 'center',
        paddingHorizontal: normalize(40),
        paddingVertical: normalize(120),
    },
    welcomeImage: {
        width: normalize(220),
        height: normalize(220),
    },
    welcomeTextContainer: {
        alignItems: 'flex-start',
    },
    welcomeTitle: {
        fontSize: normalize(40),
        fontWeight: '500',
    },
    welcomeSubtitle: {
        fontSize: normalize(32),
        paddingBottom: normalize(16),
    },
    welcomeDescription: {
        fontSize: normalize(14),
        lineHeight: normalize(20),
    },
    welcomeButtonContainer: {
        paddingHorizontal: normalize(40),
        paddingVertical: normalize(30),
    },
    welcomeButton: {
        backgroundColor: '#FFBA25',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: normalize(8),
    },
    welcomeButtonText: {
        fontSize: normalize(18),
        color: 'white',
        textAlign: 'center',
        fontWeight: '500',
        paddingVertical: normalize(10),
    },
    welcomeDarkModeSwitchContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 10,
        borderRadius: 20,
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: normalize(10),
        borderRadius: normalize(8),
        margin: 10,
        opacity: 0.6,
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        borderRadius: 8,
        paddingHorizontal: 10,
        opacity: 0.8,
    },
    iconContainer: {
        marginLeft: 8,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
    },
    searchIcon: {
        height: normalize(24),
        width: normalize(24),
    },
    weatherInfoContainer: {
        paddingHorizontal: normalize(10),
        paddingTop: normalize(40),
    },
    weatherInfoHeader: {
        alignItems: "center",
    },
    locationIcon: {
        height: normalize(30),
        width: normalize(30),
        opacity: 0.6,
    },
    cityName: {
        fontSize: normalize(40),
        fontWeight: "600",
        color: "white",
        opacity: 0.6,
    },
    date: {
        fontSize: normalize(20),
        color: "white",
    },
    temperatureContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: normalize(30),
    },
    temperature: {
        fontSize: normalize(160),
        color: "white",
        lineHeight: normalize(170),
    },
    unit: {
        fontSize: normalize(50),
        fontWeight: "400",
        color: "white",
    },
    weatherIcon: {
        height: normalize(90),
        width: normalize(90),
    },
    weatherDescription: {
        fontSize: normalize(30),
        color: "white",
        opacity: 0.7,
        alignSelf: "center"
    },
    forecastButton: {
        padding: 10,
        borderRadius: 8,
        margin: 10,
        marginTop: 30,
        alignItems: 'center',
    },
    forecastButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    weatherListContainer: {
        paddingHorizontal: 10,
        marginVertical: 10,
    },
    weatherBlock: {
        alignItems: 'center',
        marginRight: normalize(10),
        borderRadius: 10,
        paddingHorizontal: normalize(8),
        paddingVertical: normalize(4),
        borderWidth: 1
    },
    weatherImage: {
        height: normalize(40),
        width: normalize(40),
        resizeMode: 'contain',
    },
    dayText: {
        fontSize: 16,
        marginBottom: 5,
        color: "white"

    },
    tempText: {
        fontSize: 16,
        marginTop: 5,
        color: "white"
    },
    darkModeSwitchContainer:
    {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: 60,
        width: 60,
        borderTopLeftRadius: 30,
    },
    darkEnd: { position: "absolute", bottom: 0, right: 0 }
});
export default styles