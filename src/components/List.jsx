import React from 'react'
import Formulario from './Formulario'

export default function List() {
    return (
        <div className="container d-flex justify-content-center">
            <div class="card mt-5 col-12 col-md-6">
                <div class="card-body">
                    <h5 class="card-title font-weigth font-weight-bold text-center">Tienes x Todos</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex">Cras justo odio <button className="btn btn-secondary rounded-circle font-weight-bold ml-auto">x</button></li>
                    <li class="list-group-item d-flex">Dapibus ac facilisis in <button className="btn btn-secondary rounded-circle font-weight-bold ml-auto">x</button></li>
                    <li class="list-group-item d-flex">Vestibulum at eros <button className="btn btn-secondary rounded-circle font-weight-bold ml-auto">x</button></li>
                </ul>
                <div class="card-body">
                    <Formulario/>
                </div>
            </div>
        </div>
        
    )
}
