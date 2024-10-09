import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { task } from '../..';

interface ChildProps {
  task: {
    title: string;
    completed: boolean;
  };
  handleCompleteTask: (taskTitle: string) => void; 
  handleDeleteTask: (taskTitle: string) => void;
}

export default function TaskCard ({ task, handleCompleteTask, handleDeleteTask }: ChildProps) {
  
  if (task.completed) {
    return(
      <View key={task.title} style={styles.taskCard}>
        <TouchableOpacity onPress={() => handleCompleteTask(task.title)}>
          <Image source={require('../../../assets/check-done.png')} style={styles.taskCardImages}/>
        </TouchableOpacity>
        <Text style={styles.taskTextDone}>{task.title}</Text>
        <TouchableOpacity onPress={() => handleDeleteTask(task.title)}>
          <Image source={require('../../../assets/trash.png')} style={styles.taskCardImages}/>
        </TouchableOpacity>
      </View>
    )
  }
  return(
    <View key={task.title} style={styles.taskCard}>
      <TouchableOpacity onPress={() => handleCompleteTask(task.title)}>
        <Image source={require('../../../assets/check.png')} style={styles.taskCardImages}/>
      </TouchableOpacity>
      <Text style={styles.taskText}>{task.title}</Text>
      <TouchableOpacity onPress={() => handleDeleteTask(task.title)}>
        <Image source={require('../../../assets/trash.png')} style={styles.taskCardImages}/>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  taskCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    padding: 8,
    backgroundColor: '#262626',
    borderStyle: 'solid',
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 6,
  },
  taskCardImages: {
    width: 24,
  },
  taskText : {
    width: '80%',
    color: '#F2F2F2',
    textAlign: 'left',
  },
  taskTextDone: { 
    textAlign: 'left',
    width: '80%',
    color: '#808080',
    textDecorationLine: 'line-through'
  },
});
