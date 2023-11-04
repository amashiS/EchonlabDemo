import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import NumberPad from '../Widgets/NumberPad'

const LockScreen = () => {
    const [buttonVal, setButtonVal] = useState(null);
    const [pinValue,setPinValue] = useState([null,null,null,null])
    const [pressCount,setPressCount] = useState(0)

  return (
    <View style={styles.lockscrContainer}>
        <View style={{flex:1}}>
            <View style></View>
            <Text style = {{fontSize:60, backgroundColor:'red'}}>{pinValue}</Text>
        </View>
      
      <NumberPad 
      buttonVal={buttonVal}
      setButtonVal={setButtonVal}
      pinValue = {pinValue}
      setPinValue = {setPinValue}
      pressCount = {pressCount}
      setPressCount = {setPressCount}
      />
    </View>
  )
}

export default LockScreen

const styles = StyleSheet.create({
    lockscrContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
            width:'100%',
            padding:20

    }

})