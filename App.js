import React, { useState } from 'react';
import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import Task from "./components/Task.js"

export default function App() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  
  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems (itemsCopy);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Tytuł taska</Text>
        <View style={styles.items}>
    {
      taskItems.map((item, index) => { 
        return (
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
          <Task text={item} />
          </TouchableOpacity>
          )
      })
}
        </View>
    </View>

        <KeyboardAvoidingView style={styles.writeTaskWrapper}>

       <TextInput style={styles.input} placeholder={"Write a task..."} value={task} onChangeText={(text) => setTask(text)} />
        <TouchableOpacity onPress={() => handleTask ()}>
        <View style={styles.addWraper}>
          <Text style={styles.addText}>+</Text>
        </View>
    
        </TouchableOpacity>
    
        </KeyboardAvoidingView>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
  },
  addText: {},
});
