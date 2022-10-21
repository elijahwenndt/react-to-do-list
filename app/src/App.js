import { useEffect, useState } from "react";
import Filtertodo from "./Filtertodo";
import Statebutton from "./Statebutton";
import Submission from "./Submission";


function App() {
  const [value, setValue] = useState("");
  const [todo, setToDo] = useState(()=>{
    return JSON.parse(localStorage.getItem('data')) || []}); 
  const [page, setPage] = useState();

  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(todo))
  },[todo])

  // console.log(page);

  let completeCounter = todo.filter(
    (totalComplete) => totalComplete.complete
  ).length;
  console.log(completeCounter);

  function handleClick(boolean) {
    setPage(boolean);
  }
  return (
    <>
      <Submission
        value={value}
        setValue={setValue}
        todo={todo}
        setToDo={setToDo}
        completeCounter={completeCounter}
      />
    <div className="container">
      <div className="row">
        <div className="col-6"><Filtertodo todo={todo} page={page} bool={page} setToDo={setToDo} /></div>
      </div>
    </div>
      {/* <Filtertodo todo={todo} page={page} bool={page} setToDo={setToDo} /> */}
      

      <button
        onClick={() => {
          setToDo(
            todo.filter((deleteComplete) => deleteComplete.complete === false)
          );
        }}
      >
        delete all completed
      </button>

      <Statebutton text="accomplished" bool={true} handleClick={handleClick} />
      <Statebutton text="still to do" bool={false} handleClick={handleClick} />
      <Statebutton
        text="all tasks"
        bool={undefined}
        handleClick={handleClick}
      />
    </>
  );
}

export default App;
