import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle }) => {

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Tasks;

// each child in a list NEEDS to have a unique key prop!!