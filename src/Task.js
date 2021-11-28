import './App.css';
import {useState} from "react";

function Task(props) {
    const {task} = props
    const [isModal, setIsModal] = useState(false)
    const deleteYes = () => {
        props.deleteCard(task._id)
        setIsModal(false)
    }

    return (
        <div className="App">
            <h3>
                {task.name}
            </h3>
            {task.description}

            {isModal ? (<div>
                <label style={{color: 'red'}}>Do you sure?:</label>
                <button onClick={deleteYes}>yes</button>
                <button onClick={() => setIsModal(false)}>no</button>
            </div>) : (
                <button onClick={() => setIsModal(!false)}>delete</button>
            )}

        </div>
    );
}

export default Task;
