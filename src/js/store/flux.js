const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [],
			user: null
		},
		actions: {
			obtenerInfo: async function() {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Goldor");
					let data = await response.json();
					// console.log(data);

					setStore({ contacts: data });
				} catch (error) {
					console.log(error);
				}
			},

			agregarContacto: async function(nombre, direccion, telefono, email) {
				try {
					let contacto = {
						full_name: nombre,
						address: direccion,
						phone: telefono,
						email: email,
						agenda_slug: "Goldor"
					};

					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(contacto)
					});

					let data = await response.json();
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			eliminarContacto: async function(id) {
				try {
					let response = await fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					let data = await response.json();
					this.obtenerInfo();
				} catch (error) {
					console.log(error);
				}
			}
		}
	};
};

export default getState;