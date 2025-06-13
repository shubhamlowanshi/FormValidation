import { useState,useEffect } from 'react'

function Child() {
  useEffect(() => {
    console.log("Child mounted");

    return () => {
      console.log("Child unmounted");
    };
  }, []);

  return <h2>Hello</h2>;
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Child />}
    </div>
  );
}
export default App
