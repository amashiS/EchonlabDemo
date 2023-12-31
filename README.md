
# Lock Screen Demo

Lock screen demo app develped for Echonlabs Pvt Ltd assignment by Amashi Silva. The app developed using React Native.

The lock screen is a user-friendly and secure interface, developed using React Native CLI. It boasts a simple and effective 4-digit PIN entry system, ensuring quick and easy access while maintaining security.

One of the standout features of this lock screen is its screen responsiveness. Regardless of the device's screen size or orientation, the interface adapts seamlessly to provide a smooth and consistent user experience. This responsiveness makes it a versatile and reliable choice for various devices.

Additionally, the lock screen incorporates reusable buttons, enhancing its user-friendliness and allowing for a smooth PIN entry process. Users can easily interact with the buttons to enter their 4-digit PIN, ensuring a hassle-free and intuitive experience.

In terms of security, this lock screen allows users three attempts to enter the correct PIN. After three unsuccessful attempts, there is a built-in security feature that locks the screen for 1 minute, adding an extra layer of protection against unauthorized access.

In summary, the lock screen developed with React Native CLI offers a user-friendly and secure 4-digit PIN entry system with a responsive design that adapts to different screen sizes and orientations. The inclusion of reusable buttons and the automatic lockout after three failed attempts make it a robust choice for protecting your device or app.

The pin indicators and buttons are developed as reuseble components. 



## Demo

<p float="left">
  <img src="https://github.com/amashiS/EchonlabDemo/assets/122769087/c39321b3-a563-4e48-b013-d28ac64c8d20" width="400" />
  <img src="https://github.com/amashiS/EchonlabDemo/assets/122769087/bad71adb-9a90-49d2-bbc6-f1285ad74ed8" width="400" /> 
</p>

## Features

- 4 Digit PIN
- Check Atempts
- Warrning alerts
- Cross platform


## Installation

- **Step 1** First you need to setup development environment using this link  [navigate to official documentaion](https://reactnative.dev/docs/environment-setup)

- **Step 2** Open terminal & clone repo
```bash
  git clone https://github.com/amashiS/EchonlabDemo.git
```
- **Step 3** Navigate to project
```bash
  cd EchonlabDemo
```
- **Step 4** Install Node Modules
```bash
  npm i or yarn install
```
- **Step 4** Start Metro 
```bash
  npm start or yarn start
```
- **Step 5** After start metro you can app on conected device

## Reusable Components

**CustomButton**
```bash
import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const CustomButton = ({ pinValue, setLockState, lockState, setPinValue, tryCount, setTryCount, buttonVal, pressCount, setPressCount }) => {
    const { width, height } = Dimensions.get('window');
    let buttonWidth = width / 5

    return (
        <TouchableOpacity
            onPress={() => {
                if (pressCount < 4) {
                    setPinValue((prevPinValue) => {
                        const updatedPinValue = [...prevPinValue];
                        updatedPinValue[pressCount] = buttonVal;
                        setPressCount(pressCount + 1);
                        if (pressCount === 3) {
                            if (updatedPinValue.every((value, index) => value === [1, 2, 3, 4][index])) {

                                setLockState(true)
                                setTimeout(() => {
                                    setPinValue([null, null, null, null]);
                                    setPressCount(0);
                                    setTryCount(0)
                                    Alert.alert("Unlocked");
                                }, 1000);
                            } else {
                                if (tryCount <= 2) {
                                    setLockState(false)
                                    setTimeout(() => {
                                        setPinValue([null, null, null, null]);
                                        setPressCount(0);
                                        Alert.alert("Incorrect PIN");
                                        setTryCount(tryCount + 1)
                                    }, 100);
                                }
                                else {
                                    setTimeout(() => {
                                        Alert.alert("Try again 1 min");
                                        setPinValue([null, null, null, null]);
                                        setPressCount(0);

                                    }, 100);
                                }
                            }
                        }
                        return updatedPinValue;
                    });
                }
            }}
            style={[styles.buttonContainer, { width: buttonWidth, aspectRatio: 1 }]}
        >
            <Text style={styles.buttonTitle}>{buttonVal}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonTitle: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#5A7FD6'
    },

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150,
        borderWidth: 3,
        borderColor: '#5A7FD6'
    }
})

```

**Indicator**
```bash
const PinIndicatorBubble = () => {
        const pinIndicators = Array(4).fill(null).map((_, index) => (
            <View
                key={index}
                style={
                    index < pressCount
                        ? styles.pinIndicator
                        : styles.pinIndicatorBlank
                }
            />
        ));

        return (
            <View style={{ flexDirection: 'row', gap: 15, alignSelf: 'center', marginTop: 20 }}>
                {pinIndicators}
            </View>
        );
    };

```
## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Color | ![ #fafafa](https://via.placeholder.com/10/FAFAFA?text=+) #fafafa |
| Error Text and PIN fill Color | ![#E15646](https://via.placeholder.com/10/E15646?text=+) #E15646 |
| All other elements | ![#5A7FD6](https://via.placeholder.com/10/5A7FD6?text=+) #5A7FD6 |



## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amashi-silva-106660260)



## Used Fonts
- **Roboto** https://fonts.google.com/specimen/Roboto
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Authors

- [@amashiS](https://github.com/amashiS)


## Feedback

If you have any feedback, please reach out to me at amashi.silva99@gmail.com

