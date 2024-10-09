import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, FlatList, Image, SafeAreaView } from 'react-native';
import TaskCard from './components/TaskCard';

export type Task = {
  title: string,
  completed: boolean
}

export default function Home() {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [tasks, setTasks] = useState <Task []>([]);
  const [data, setData] = useState <Task []>([]);
  const incompleteTasksCount = tasks.filter(task => task.completed).length;

  useEffect(() => {
    const completedTasks = tasks.filter((task => task.completed))
    const noCompletedTasks = tasks.filter((task => !task.completed))
    setData(noCompletedTasks.concat(completedTasks))
    
  },[tasks]) 

  function handleAddTask() {
    const newTask ={
      title: newTaskTitle,
      completed: false
    }
    setTasks([...tasks, newTask])
    setNewTaskTitle('')
  }

  function handleCompleteTask(taskTitle: string) {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.title === taskTitle
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function handleDeleteTask(taskTitle: string) {
    setTasks(tasks.filter(task => task.title !== taskTitle))
  }

  return (
   <SafeAreaView>
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder='Adicione uma nova tarefa' placeholderTextColor='#808080' value={newTaskTitle} onChangeText={setNewTaskTitle}/>
      <TouchableOpacity style={styles.buttonAdd} onPress={handleAddTask}>
        <Text>+</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.conterContainer}>
      <Text style={styles.textCriadas}>Criadas <Text style={styles.countTasks}>{tasks.length}</Text></Text>
      <Text style={styles.textConcluidas}>Concluidas <Text style={styles.countTasks}>{incompleteTasksCount}</Text></Text>
    </View>
    
    <FlatList
        data={data}
        keyExtractor={item => item.title}
        renderItem={({ item }) => (
          <TaskCard key={item.title} task={item} handleCompleteTask={handleCompleteTask} handleDeleteTask={handleDeleteTask}/>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.emptyList}>
            <View style={styles.separator} />
            <Image source={require('../assets/Clipboard.png')}/>
            <Text 
              style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyTextSubtitle}>Crie tarefas e organize seus itens a fazer</Text>
            
          </View>
          
        )}
      />
   </SafeAreaView>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer:{
    flexDirection: 'row',
    marginTop: -25,
    marginHorizontal: 16,
    
  },
  input: {
    backgroundColor: '#262626',
    color: '#F2F2F2',
    flex: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 6,
    marginRight: 4,
    paddingLeft: 16,
  },
  buttonAdd: {
    width: 52,
    height: 52,
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  conterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    marginTop: 32,
    marginBottom: 20,
  },
  textCriadas: {
    fontWeight: 'bold',
    color: '#1E6F9F'
  },
  textConcluidas: {
    fontWeight: 'bold',
    color: '#8284FA',
  },
  countTasks: {
    
    
    color: '#F2F2F2'
  },
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
  emptyList: {
    alignItems: 'center'
  },
  separator: {
    height: 1,
    width: '90%',
    backgroundColor: '#808080', // Cor da linha do separador
    marginBottom: 48,
    marginHorizontal: 16,
  },
  listEmptyText: {
    color: '#808080',
    fontWeight: 'bold'
  },
  listEmptyTextSubtitle: {
    fontWeight: 'medium',
    color: '#808080',
  }
});

