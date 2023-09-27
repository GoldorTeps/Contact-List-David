import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const AddContact = () => {
	const { actions } = useContext(Context);
	const [nombre, setNombre] = useState("");
	const [email, setEmail] = useState("");
	const [direccion, setDireccion] = useState("");
	const [telefono, setTelefono] = useState("");

	const agregarContacto = () => {
		actions.agregarContacto(nombre, direccion, telefono, email);
		console.log("Guardando contacto:", nombre, direccion, telefono, email);
	};

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							value={nombre}
							onChange={function(e) {
								setNombre(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							value={email}
							onChange={function(e) {
								setEmail(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="tel"
							className="form-control"
							placeholder="Enter phone"
							value={telefono}
							onChange={function(e) {
								setTelefono(e.target.value);
							}}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							value={direccion}
							onChange={function(e) {
								setDireccion(e.target.value);
							}}
						/>
					</div>
					<button type="button" className="btn btn-primary form-control" onClick={agregarContacto}>
						Save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						Or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};