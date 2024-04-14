import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

const Task = () => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{ProgressBarAndroidComponent.text}</Text>
           </View>
           <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({


})

export default Task;