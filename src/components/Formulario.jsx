import React from 'react';

const Formulario = () => {
    return (
        <form>
            <div class="row">
                <div class="col-8">
                    <input type="text" class="form-control" placeholder="Enter item"/>
                </div>

                <div class="col-4">
                    <button type="submit" class="btn btn-outline-secondary btn-block mb-2">Submit</button>
                </div>
            </div>
        </form>
    );
}

export default Formulario;
