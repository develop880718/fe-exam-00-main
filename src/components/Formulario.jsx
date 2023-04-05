import Formulariocss from "./Formulariocss.css";

function Formulario(props) {
  const { tarea, handleChange, handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="in-left"
        type="text"
        placeholder="New Task"
        onChange={handleChange}
        value={tarea}
      />

      <input
        className="in-right"
        type="submit"
        value="ADD"
        onClick={handleSubmit}
      />
    </form>
  );
}

export default Formulario;
