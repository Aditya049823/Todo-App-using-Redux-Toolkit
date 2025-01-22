
import {useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addTask, removeTask } from './features/task/taskSlice';

export default function App(){

    const[input,setInput]=useState('');

    const task=useSelector((state)=>state.taskSlice.tasks);

    const dispatch=useDispatch();

    function handleAdd(e){
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTask(input)); // Dispatch action with input value
            setInput(''); // Reset input value
        }
    }

    function handleDelete(id){
        return dispatch(removeTask(id));
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.header}>Todo App</h1>
            <div style={styles.inputContainer}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} // Update input state
                    placeholder="Enter a task"
                    style={styles.input}
                />
                <button onClick={handleAdd} style={styles.addButton}>
                    Add Task
                </button>
            </div>
            <div style={styles.taskContainer}>
                <ul style={styles.taskList}>
                    {task.map((currEle, index) => (
                        <li key={index} style={styles.taskItem}>
                            <span>{currEle}</span>
                            <button
                                onClick={() => handleDelete(index)}
                                style={styles.deleteButton}
                            >
                                Delete
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

// CSS styles as a JavaScript object
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        maxWidth: '600px',
        margin: '50px auto',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    },
    header: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px',
    },
    inputContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginBottom: '20px',
    },
    input: {
        width: '70%',
        padding: '10px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        outline: 'none',
    },
    addButton: {
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
    taskContainer: {
        textAlign: 'center',
    },
    taskList: {
        listStyleType: 'none',
        padding: '0',
        margin: '0',
    },
    taskItem: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        padding: '5px 10px',
        fontSize: '14px',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
    },
};

// Add hover effects to buttons
styles.addButton[':hover'] = { backgroundColor: '#45a049' };
styles.deleteButton[':hover'] = { backgroundColor: '#c0392b' };