// import './App.css'
// import { useState } from 'react';


// function App() {
//     const [name, setName] = useState("Sofía");
//     const [newName, setNewName] = useState("");

//     return (
//         <div>
//             <h2>Teacher Name: {name} </h2>
//             <div>
//                 <ul>
//                     <li onClick={() => setName("Data")}>Data</li>
//                     <li onClick={() => setName("Reyes")}>Reyes</li>
//                     <li onClick={() => setName("Soraya")}>Soraya</li>
//                 </ul>
//             </div>
//         </div>
//     )

// }

// export default App

import './App.css'
import { useState } from 'react';

function App() {
    const [name, setName] = useState("Sofía");
    const [newName, setNewName] = useState("");

    function changeName(e) {
        e.preventDefault();

        if (newName.trim() !== '') {
            setName(newName.trim());
            setNewName('');
        }
    }

    return (
        <div>
            <h2>Teacher Name: {name}</h2>
            <form onSubmit={changeName}>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='Añade un nombre' />
                <button type='submit'>Añadir</button>
            </form>
        </div>
    )
}

export default App