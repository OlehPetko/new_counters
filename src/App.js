import './App.css';
import {useState} from "react";

function App() {
    const initialstate = [
        {id: Math.random(), value: 1, buttons: [1]},
        {id: Math.random(), value: 2, buttons: [1, 2]},
        {id: Math.random(), value: 3, buttons: [1, 2, 3]},

    ]
    const [count, setCount] = useState(0)
    const [counters, setCounters] = useState(initialstate)
    const plusAndMinus = (value) => {
        const newCount = setCount(count + value)
    }
    const plusAndMinusCounters = (id, value) => {
        const newCounters = counters.map(el => el.id === id ? ({...el, value: el.value + value}) : el)
        setCounters(newCounters)
    }
    const addCounter = () => {
      const newConter = [...counters,  {id: Math.random(), value: 4, buttons: [1, 2, 3, 4]} ]
        setCounters(newConter)
    }


    return (
        <div className="App">
            <button onClick={() => plusAndMinus(+1)}>+1</button>
            {count}
            <button onClick={() => plusAndMinus(-1)}>-1</button>
            <hr/>
            <button onClick={addCounter}>add counter</button>
            {counters.map(el =>
                <div key={el.id}>
                    {el.buttons.map(butt =>
                        <button onClick={() => plusAndMinusCounters(el.id, - butt)}>
                            {-butt}
                        </button>
                    )}
                    {el.value}
                    {el.buttons.map(butt =>
                        <button onClick={() => plusAndMinusCounters(el.id, butt)}>
                            {butt}
                        </button>)}
                </div>
            )}
        </div>
    );
}

export default App;
