import React from 'react'
import AddTaskForm from './AddTaskForm'

export default function List(props) {

    console.log('Tasks array', props.tasks);

    return (
        <div className="container d-flex justify-content-center">
            <div className="card mt-5 col-12 col-md-6">
                <div className="card-body">
                    <h5 className="card-title font-weigth font-weight-bold text-center">Tienes {props.tasks.length} Todos</h5>
                </div>
                <ul className="list-group list-group-flush">
                    {
                        props.tasks.length > 0 ?

                        props.tasks.map((task, index) => (
                        <li 
                            className="list-group-item d-flex"
                            key={index}>
                                {task.task}
                                <button className="btn btn-secondary rounded-circle font-weight-bold ml-auto">
                                    x
                                </button>
                        </li>
                    )) : <div className="alert alert-info" role="alert">
                            Aún no tienes tareas agregadas a tu lista!
                        </div>
                    }
                </ul>
                <div className="card-body">
                    {/* Mandando 'addTask' al componente 'AddTaskForm */}
                    <AddTaskForm addTask={props.addTask}/>
                </div>
            </div>
        </div>
        
    )
}
