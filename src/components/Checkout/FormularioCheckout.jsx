const FormularioCheckout = ({ dataForm, handleChangeInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={dataForm.name}
        onChange={handleChangeInput}
      />

      <br />
      <br />
      <label htmlFor="phone">Telefono:</label>
      <input
        type="text"
        id="phone"
        name="phone"
        value={dataForm.phone}
        onChange={handleChangeInput}
      />

      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={dataForm.email}
        onChange={handleChangeInput}
      />
  
      <br />
      <br />
      <button type="submit">Enviar Orden</button>
    </form>
  );
};
export default FormularioCheckout;
