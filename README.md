Weather-App Instructions
Weather App

Step 1: After downloading the project file, delete node_modules and package-lock.json.

Step 2: Enter the following command:

bash
cd android
./gradlew clean

Step 3: After completing the above steps, enter the following command to install the packages:

bash
npm i --legacy-peer-deps

Step 4: The above command will download the packages used in the app. After that, run the following command:

bash
npm start -- --reset-cache

Step 5: When you give the above command, the Metro bundler will start. For Android, enter "a" to start the emulator. Before that, you need to install and configure Android Studio. Use the link to know how to set up Android Studio: Setup Android Studio.
 
-----------------------------------------
App Screen

The app contains two screens: Welcome Screen and Weather Info Screen.

At the bottom-right corner of both screens, there's a moon icon. Use it to toggle dark mode without changing your phone's dark or light mode settings. By default, the app follows your phone's current mode.

Welcome Screen --->
Displays an introduction.

Weather Info Screen --->
Shows weather information such as:

*Temperature

* Weather condition

* Weather icon (as described in the documentation).

* Country and city

* Date

* Forecast Button: Use this button to view the forecast for the next seven days.and app you can see animatine in temperature and forcast option

