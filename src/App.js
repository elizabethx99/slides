import {useState} from "react";
import {data} from "./data";
import './App.css';

function App () {

    const [location, setLocation] = useState(0);

    const {id, name, description, image} = data[location];

    const previousLocation = () => {
        setLocation((location) => {
            location --;
            if (location < 0){
                return data.length -1;
            }
            return location;
        })
    }

    const nextLocation = () => {
        setLocation((location) => {
            location ++;
            if (location > data.length -1){
                location =0;
            }
            return location;
        })
    }

    return(<div>
        <div className="container">
            <img src={image} width="600px" alt="cities"/>
        </div>
        <div className="container">
            <h1>{id}- {name}</h1>
        </div>
        <div className="container">
            <h2>{description}</h2>
        </div>
        <div className="btn container">
            <button onClick={previousLocation}>Previous</button>
            <button onClick={nextLocation}>Next</button>
        </div>
    </div>
    )
}

export default App;