import React from 'react';

const Form = ({contBuscar}) => {
    return (
        <>
        <form classname="d-flex">
          <input classname="form-control me-sm-2" type="text" placeholder={contBuscar} />
          <button classname="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
        </>
    );
}

export default Form;
