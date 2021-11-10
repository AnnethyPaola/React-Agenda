import React,{useState} from 'react';

	const Add = () => {
		const [nombre, setNombre] = useState('');
		const [apellido, setApellido] = useState('');
		const [telefono, setTelefono] = useState('');

		const handleSubmit = (e) =>{
			e.preventDefault();
			const user = {nombre, apellido, telefono};


			fetch('http://www.raydelto.org/agenda.php', {
				method: 'POST',
				body: JSON.stringify(user)
			}).then(() => {
				alert('Contacto agregado')
			})
		}

		return(
	     <nav className="bg-light">
         <div className=" col ">
	      <h2 className="text-dark">Formulario para agregar nuevo contacto</h2>
	     <form onSubmit={handleSubmit}>
		<label className="text-dark font-weight-bold">*Nombre</label>
		<input className="form-control " placeholder="Nombre" type="text"  value={nombre} onChange={(e) => setNombre(e.target.value)} />
		<label className="text-dark font-weight-bold">*Apellido</label>
		<input className="form-control" placeholder="Apellido"  type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
		<label className="text-dark font-weight-bold">*Telefono</label>
	  <input className="form-control" placeholder="Telefono" type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        
	    <button className="btn btn-danger mt-2 mb-2 col-12" >Agregar contacto</button>  
	</form>

	     </div>

	     </nav>

			)
	}

	export default Add;