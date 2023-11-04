import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../Components/CustomButton'

const NumberPad = ({buttonVal,setButtonVal,lockState,setLockState,setPinValue, pinValue,pressCount,setPressCount}) => {
    const numbersH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

    return (
        <View style={styles.numberpadContainer}>
            {numbersH.map(number => (
                <CustomButton 
                key={number} 
                buttonVal={number} 
                setPinValue ={ setPinValue}
                pinValue = {pinValue}
                pressCount = {pressCount}
                setPressCount = {setPressCount}
                lockState = {lockState}
                setLockState =  {setLockState}
                />
            ))}
        </View>
    );
}

export default NumberPad

const styles = StyleSheet.create({
    numberpadContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20,
        flexWrap: 'wrap',
        padding: 20
    }
})