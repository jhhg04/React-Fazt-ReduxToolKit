import { useSelector } from 'react-redux';

const TaskForm = () => {
  console.log('TaskForm');
  const tasksState = useSelector((state) => state.tasks);
  console.log(tasksState);
  return <div>TaskForm</div>;
};

export default TaskForm;
