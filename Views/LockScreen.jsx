import { StyleSheet, Text, View, Modal, Touchable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import NumberPad from '../Widgets/NumberPad'

const LockScreen = () => {
    const [buttonVal, setButtonVal] = useState(null);
    const [pinValue, setPinValue] = useState([null, null, null, null])
    const [pressCount, setPressCount] = useState(0)
    const [lockState, setLockState] = useState(false)
    const [tryCount, setTryCount] = useState(0)
    const [seconds, setSeconds] = useState(5);
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
              setSeconds(5)
            }
          }, 1000);
      
          return () => clearInterval(timer); 
        }
      }, [tryCount, seconds]);
      
    

    const PinIndicatorBubble = () => {

        if (pressCount == 0) {
            return (
                <View style={{ flexDirection: 'row', gap: 10 }}>
                    <View style={styles.pinIndicatorBlank} />
                    <View style={styles.pinIndicatorBlank} />
                    <View style={styles.pinIndicatorBlank} />
                    <View style={styles.pinIndicatorBlank} />

                </View>

            )

        }
        else if (pressCount == 1) {
            return (
                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicatorBlank} />
                    <View style={styles.pinIndicatorBlank} />
                    <View style={styles.pinIndicatorBlank} />
                </View>



            )
        }
        else if (pressCount == 2) {
            return (
                <View style={{ flexDirection: 'row', gap: 10 }}>

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
                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicatorBlank} />
                </View>



            )
        }
        else if (lockState == true || lockState == false) {
            return (
                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicator} />
                    <View style={styles.pinIndicator} />

                </View>



            )
        }


    }

    console.log("try count in main", tryCount);
    return (
        <View style={styles.lockscrContainer}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>

                    <PinIndicatorContainer />
                </View>



            </View>
            {
                tryCount === 3 && (
                    <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>


<View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0, backgroundColor: '#000' ,opacity:0.5,justifyContent:'center',
alignItems:'center'}}>
<Text style={styles.timerText}>{seconds} drh</Text>
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

{
    pinValue[pressCount - 1] != null ? (
            <TouchableOpacity onPress={() => {
                if (pinValue[pressCount - 1] != null) {
                    pinValue[pressCount - 1] = null
                    setPressCount(pressCount - 1)
                    console.log(pinValue);
                }
            }
            }>
                <Text>Delete</Text>
            </TouchableOpacity>
    ) : (
        <View style={styles.deleteButton}>
            <TouchableOpacity onPress={() => {
               
            }
            }>
                <Text> </Text>
            </TouchableOpacity>
        </View>
    )
}
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

    },
    deleteButton: {
        width: '100%',
        alignItems: 'flex-end',
    },
    timerText:{
        backgroundColor:'red',
        color:'#000'
    }

})