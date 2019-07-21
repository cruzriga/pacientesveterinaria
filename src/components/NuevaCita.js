import React, { Component } from 'react';
import uuid from 'uuid';

const initialState =  { 
    error : false,
    cita :{
        mascota:"",
        propietario : "",
        fecha : "",
        hora : "",
        sintomas : "" 
    }
 };

class NuevaCita extends Component {
    state = { ...initialState};
    
    handleChange = (e)=>{
        //console.log(e.target.name+': '+e.target.value)
        this.setState({
            cita:{
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        // estudiar mas destructuring 
        this.setState({error: false});
        const {mascota, propietario, fecha, hora, sintomas } = this.state.cita;
        if(mascota === "" || propietario === "" || fecha === "" || hora === "" || sintomas === ""){
            this.setState({error: true});
            return;
        }

        const nuevaCita = {...this.state.cita, id : uuid()};
        this.props.crearNuevaCita(nuevaCita);// pasar la  info al state del app
        this.setState({ ...initialState}); //limpiiar formulario 
    }
    render() { 
        const {error} = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita 
                    </h2>
                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center"> TODOS LOS CAMPOS SON OBLIGATORIOS  </div> : null}
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Mascota
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="mascota"
                                    onChange={this.handleChange}
                                    value = {this.state.cita.mascota}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Nombre Dueño
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Propietario"
                                    name="propietario"
                                    onChange={this.handleChange}
                                    value = {this.state.cita.propietario}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                              Fecha
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="Date"
                                    className="form-control"
                                    name="fecha"
                                    onChange={this.handleChange}
                                    value = {this.state.cita.fecha}
                                />
                            </div>
                            
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                              Hora
                            </label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hora"
                                    onChange={this.handleChange}
                                    value = {this.state.cita.hora}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="" className="col-sm-4 col-lg-2 col-form-label">
                                Sintomas
                            </label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea name="" id=""
                                    type="text"
                                    className="form-control"
                                    placeholder="Sintomas"
                                    name="sintomas"
                                    onChange={this.handleChange}
                                    value = {this.state.cita.sintomas}
                                ></textarea>
                            </div>
                        </div>

                    <input 
                        type="submit" className="py-3 mt-2 btn btn-success btn-block"
                        value = "Agregar Nueva Cita"
                    />

                    </form>
                </div>
            </div>
          );
    }
}
 
export default NuevaCita;