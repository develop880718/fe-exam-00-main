import { useState } from "react";
import Formulario from "./components/Formulario";
import { Tarea } from "./components/Tarea";

function App() {
  const [tarea, setTarea] = useState(" ");
  const [listadoTask, setListadoTask] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    if (tarea === " ") {
      alert("Debes ingresar tarea");
      return;
    }
    const newTarea = {
      id: Date.now(),
      tarea: tarea,
      completado: false,
    };

    const temp = [newTarea, ...listadoTask];
    setListadoTask(temp);

    setTarea(" ");
  }

  function handleChange(e) {
    setTarea(e.target.value);
  }

  function onActualizar(objectEdit) {
    const { id, tarea } = objectEdit;

    const temp = [...listadoTask];
    const elem = temp.find((item) => item.id === id);
    elem.tarea = tarea;

    setListadoTask(temp);
  }

  function borrarTarea(id) {
    const temp = listadoTask.filter((item) => item.id !== id);
    setListadoTask(temp);
  }

  return (
    <div>
      <div className="nav">
        <p className="bar">ToDo App</p>
      </div>
      <div className="contenido">
        <h2>ToDo List</h2>
        <Formulario
          tarea={tarea}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
      <div className="contenedor-tarea">
        <h4>Task</h4>
        <div className="contenido-tarea">
          {listadoTask.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              tarea={tarea}
              onActualizar={onActualizar}
              borrarTarea={borrarTarea}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
