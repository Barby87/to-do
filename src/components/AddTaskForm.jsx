import React, { Fragment } from 'react';
import { useForm } from "react-hook-form";

const Formulario = (props) => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data, event) => {
        props.addTask(data);
        console.log('Data', data);
        // Limpiar campo luego del submit
        event.target.reset();
    }

    return (
        <Fragment>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-8">
                        <input 
                            type="text" 
                            name="task"
                            className="form-control" 
                            placeholder="Enter item"   
                            ref={
                                register({
                                    required: {
                                        value: true, 
                                        message: '*Campo requerido'}
                                })
                            }
                        />
                        {/* Mensaje de error */}
                        <span className="text-danger">
                            {errors?.task?.message}
                        </span>
                    </div>

                    <div className="col-4">
                        <button className="btn btn-outline-secondary btn-block mb-2">Submit</button>
                    </div>
                </div>
            </form>
        </Fragment> 
    );
}

export default Formulario;
