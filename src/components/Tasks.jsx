import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./tarea.css";

export function Tasks(props) {
  const { tarea, borrarTarea, onActualizar } = props;

  const [edit, setEdit] = useState(false);

  function EdicionActiv() {
    const [valor, setValor] = useState(tarea.tarea);

    function handleChange(e) {
      const text = e.target.value;
      setValor(text);
    }

    function handleClick(e) {
      e.preventDefault();

      onActualizar({ id: tarea.id, tarea: valor, completado: false });
      setEdit(false);
    }

    return (
      <>
        <input type="text" onChange={handleChange} value={valor} />
        <button className="refresh" onClick={handleClick}>
          Guardar
        </button>
        <button onClick={() => borrarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </>
    );
  }

  function EdicionDesactiv() {
    return (
      <>
        <span>{tarea.tarea}</span>

        <button className="refresh" onClick={() => setEdit(true)}>
          Actualizar
        </button>
        <button className="btn-delete" onClick={() => borrarTarea(tarea.id)}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </>
    );
  }

  return (
    <div className="list" id={tarea.id}>
      {edit ? <EdicionActiv /> : <EdicionDesactiv />}
    </div>
  );
}
