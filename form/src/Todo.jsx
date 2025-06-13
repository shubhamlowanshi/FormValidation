// import React, { useState } from 'react';

// const Todo = () => {
//     const [input, setInput] = useState('');
//     const [todos, setTodos] = useState([]);

//     const handleAdd = () => {
//         if (input.trim() !== '') {
//             setTodos([...todos, input]);
//             setInput('');
//         }
//     };

//     const handleDeleteAll = () => {
//         setTodos([]);
//     };

//     const handleRemove = (indexToRemove) => {
//         setTodos(todos.filter((_, index) => index !== indexToRemove));
//     };

//     return (
//         <>
//             <h1>This is my Todo</h1>

//             <input
//                 type="text"
//                 placeholder="Enter your work"
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />

//             <button
//                 onClick={handleAdd}
//                 style={{ backgroundColor: 'green', color: 'white', marginLeft: '10px' }}
//             >
//                 Add
//             </button>

//             <button
//                 onClick={handleDeleteAll}
//                 style={{ backgroundColor: 'red', color: 'white', marginLeft: '10px' }}
//             >
//                 Reset todo
//             </button>

//             <ul>
//                 {todos.map((todo, index) => (
//                     <li  style={{ marginBottom: '10px' }}>
//                         {todo}
//                         <button
//                             onClick={() => handleRemove(index)}
//                             style={{ marginLeft: '600px', backgroundColor: 'gray', color: 'white' }}
//                         >
//                             Remove
//                         </button>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     );
// };

// export default Todo;

