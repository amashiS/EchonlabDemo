import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NumberPad from '../Widgets/NumberPad'

const LockScreen = () => {
    const [buttonVal, setButtonVal] = useState(null);
    const [pinValue, setPinValue] = useState([null, null, null, null])
    const [pressCount, setPressCount] = useState(0)
    const [lockState,setLockState] = useState(false)

    const PinIndicatorContainer = () => {
        return(
            <PinIndicatorBubble />
           
        )
    }

    const PinIndicatorBubble = () => {

        if (pressCount == 0) {
            return (
                <View style={{flexDirection:'row',gap:10}}>  
                <View style={styles.pinIndicatorBlank} />
                <View style={styles.pinIndicatorBlank} />
                <View style={styles.pinIndicatorBlank} />
                <View style={styles.pinIndicatorBlank} />

                </View>

            )

        }
        else if (pressCount == 1) {
            return (
                <View style={{flexDirection:'row',gap:10}}>  

                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicatorBlank} />
                <View style={styles.pinIndicatorBlank} />
                <View style={styles.pinIndicatorBlank} />
                </View>



            )
        }
        else if (pressCount == 2) {
            return (
                <View style={{flexDirection:'row',gap:10}}>  

                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicatorBlank} />
                <View style={styles.pinIndicatorBlank} />
                </View>



            )
        }
        else if (pressCount == 3) {
            console.log("Hello")

            return (
                <View style={{flexDirection:'row',gap:10}}>  

                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicatorBlank} />
                </View>



            )
        }
        else if (lockState ==  true)  {
            return (
                <View style={{flexDirection:'row',gap:10}}>  

                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicator} />
                <View style={styles.pinIndicator} />

              </View>



            )
        }


    }

    return (
        <View style={styles.lockscrContainer}>
            <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>

                <PinIndicatorContainer />
</View>



            </View>
            <NumberPad
                buttonVal={buttonVal}
                setButtonVal={setButtonVal}
                pinValue={pinValue}
                setPinValue={setPinValue}
                pressCount={pressCount}
                setPressCount={setPressCount}
                lockState = {lockState}
                setLockState =  {setLockState}
            />
        </View>
    )
}

export default LockScreen

const styles = StyleSheet.create({
    lockscrContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20

    },
    pinIndicator: {
        width: 20,
        aspectRatio: 1,
        backgroundColor: '#5A7FD6',
        borderRadius: 20
    },
    pinIndicatorBlank: {
        width: 20,
        aspectRatio: 1,
        borderColor: '#5A7FD6',
        borderRadius: 20,
        borderWidth: 3

    }

})