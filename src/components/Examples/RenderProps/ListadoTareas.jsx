import uniqid from "uniqid"

const ListadoTareas = ({ tareas, añadirTarea, eliminarTarea }) => {
  const clickAñadirTarea = () => {
    const nuevaTarea = {
      id: uniqid(),
      nombre: "Tarea " + uniqid(),
    };

    añadirTarea(nuevaTarea);
  };

  return (
    <div>
      <button onClick={clickAñadirTarea}>Agregar Tarea</button>
      <br />
      <br />
      {tareas.map((tarea) => {
        return (
          <div key={tarea.id}>
            <p>{tarea.nombre}</p>
            <button onClick={ () => eliminarTarea(tarea.id)}>Eliminar tarea</button>
          </div>
        );
      })}
    </div>
  );
};
export default ListadoTareas