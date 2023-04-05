import { useState } from "react";

export function Tarea(props) {
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
        <button onClick={handleClick}>Guardar</button>
        <button onClick={() => borrarTarea(tarea.id)}>Borrar</button>
      </>
    );
  }

  function EdicionDesactiv() {
    return (
      <>
        <span>{tarea.tarea}</span>

        <button onClick={() => setEdit(true)}>Actualizar</button>
        <button onClick={() => borrarTarea(tarea.id)}>Borrar</button>
      </>
    );
  }

  return (
    <div id={tarea.id}>{edit ? <EdicionActiv /> : <EdicionDesactiv />}</div>
  );
}
