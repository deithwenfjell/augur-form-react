import React from 'react';
import './App.css';
import {Form} from "./component/Form";
import {ResultsModal} from "./component/ResultsModal";

function App() {
    const [result, setResult] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    return (
    <div className="App">
        <h2>Augur Form v1.0</h2>
        <Form result={result} setResult={setResult} setOpen={setOpen}/>
        <ResultsModal result={result} open={open} setOpen={setOpen}/>
    </div>
  );
}

export default App;
