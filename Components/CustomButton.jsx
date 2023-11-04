import { Alert, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ pinValue, setLockState,lockState,setPinValue, buttonVal, pressCount, setPressCount }) => {
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
                        console.log(updatedPinValue);

                        if (pressCount === 3) {
                            if (updatedPinValue.every((value, index) => value === [1, 2, 3, 4][index])) {
                               
                                setLockState(true)
                                setTimeout(() => {
                                    setPinValue([null, null, null, null]);
                                    setPressCount(0);
                                    Alert.alert("Unlock");

                                }, 1000);



                            } else {
                                Alert.alert("Wrong");
                                setLockState(true)
                                setTimeout(() => {
                                    setPinValue([null, null, null, null]);
                                    setPressCount(0);
                                }, 1000);
                               
                                



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
