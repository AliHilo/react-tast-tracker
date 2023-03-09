// use rac to import react ant the template
import Task from './Task'


export const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
    <>
    {tasks.map((task,index) => (
            <Task key={index} task={task} 
            onDelete= {onDelete} onToggle= {onToggle}/>
        ))}
    </>
    )
    }
export default Tasks



// const tasks = [
//     {
//     id: 1,
//     text: 'Doctor Appointment',
//     day:'Feb 3',
//     reminder: true, 
//     },
//     {
//     id: 2,
//     text: 'Appointment',
//     day:'Feb 5',
//     reminder: true, 
//     },
//     {
//     id: 3,
//     text: 'Doctor',
//     day:'Mar 3',
//     reminder: false, 
//     },
// ];