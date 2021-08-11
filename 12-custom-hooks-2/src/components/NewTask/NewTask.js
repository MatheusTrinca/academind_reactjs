import React from 'react';
import useHttp from '../hooks/useHttp';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = props => {
  const { isLoading, error, sendRequest } = useHttp();

  const createTask = (taskText, data) => {
    const generatedId = data.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };
    props.onAddTask(createdTask);
  };

  const enterTaskHandler = async taskText => {
    sendRequest(
      {
        url: 'https://academind-react-c9abc-default-rtdb.firebaseio.com/tasks.json',
        method: 'POST',
        body: JSON.stringify({ text: taskText }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
      createTask.bind(null, taskText)
      // Ou colocar a funcão aqui diretamente, ou declarar dentro do enterTaskHandler,
      // evitando o bind
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
