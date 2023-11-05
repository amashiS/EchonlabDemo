import { StyleSheet, Text, View, Modal, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import NumberPad from '../Widgets/NumberPad'

const LockScreen = () => {
    const [buttonVal, setButtonVal] = useState(null);
    const [pinValue, setPinValue] = useState([null, null, null, null])
    const [pressCount, setPressCount] = useState(0)
    const [lockState, setLockState] = useState(false)
    const [tryCount, setTryCount] = useState(0)
    const [seconds, setSeconds] = useState(60);
    const [modalVisible, setModalVisible] = useState(false);

    const PinIndicatorContainer = () => {
        return (
            <PinIndicatorBubble />
        )
    }

    useEffect(() => {
        if (tryCount === 3) {
            const timer = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    clearInterval(timer);
                    setTryCount(0);
                    setSeconds(60)
                }
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [tryCount, seconds]);

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

    return (
        <View style={styles.lockscrContainer}>
            <View style={styles.topTextContainer}>
                <View style={{ gap: 0, alignItems: 'center' }}>
                    <Text style={styles.enterPascodeText}>
                        Enter Passcode
                    </Text>
                    <Text style={[styles.attempsText, { opacity: tryCount > 0 ? 1 : 0 }]}>
                        You have {3 - tryCount}  attempts left
                    </Text>
                    <PinIndicatorContainer />
                </View>

            </View>
            {
                tryCount === 3 && (
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={true}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}>

                        <View style={styles.modalStyle}>
                            <Text style={styles.timerTextTitle}>Phone Locked</Text>
                            <Text style={styles.timerText}>Try again after {seconds} seconds</Text>
                        </View>
                    </Modal>
                )
            }

            <NumberPad
                buttonVal={buttonVal}
                setButtonVal={setButtonVal}
                pinValue={pinValue}
                setPinValue={setPinValue}
                pressCount={pressCount}
                setPressCount={setPressCount}
                lockState={lockState}
                setLockState={setLockState}
                tryCount={tryCount}
                setTryCount={setTryCount}
            />
            <View style={styles.deleteButton}>

                <TouchableOpacity onPress={() => {
                    if (pinValue[pressCount - 1] != null) {
                        pinValue[pressCount - 1] = null
                        setPressCount(pressCount - 1)
                    }
                }
                }>
                    <Text style={[styles.deleteText, { opacity: pinValue[pressCount - 1] != null ? 1 : 0 }]}>Delete</Text>
                </TouchableOpacity>

            </View>


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
        padding: 20,


    },
    pinIndicator: {
        width: 18,
        aspectRatio: 1,
        backgroundColor: '#E15646',
        borderRadius: 20
    },
    pinIndicatorBlank: {
        width: 18,
        aspectRatio: 1,
        borderColor: '#5A7FD6',
        borderRadius: 20,
        borderWidth: 3

    },
    deleteButton: {
        width: '100%',
        alignItems: 'flex-end',
    },
    timerText: {
        color: '#E15646',
        fontFamily: 'Roboto',
        fontSize: 20,
        

    },
    enterPascodeText: {
        fontFamily: 'Roboto',
        fontSize: 28,
        color: '#5A7FD6',


    },
    timerTextTitle: {
        fontFamily: 'Roboto',
        fontSize: 28,
        color: '#E15646',
        fontWeight: "500"
    },
    modalStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    attempsText: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: '#E15646',
    },
    deleteText: {
        fontFamily: 'Roboto',
        fontSize: 17,
        color: '#5A7FD6',
        marginRight: 20
    },
    topTextContainer: {
        flex: 0.6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    }

})