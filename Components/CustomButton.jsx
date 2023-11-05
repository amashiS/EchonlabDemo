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
