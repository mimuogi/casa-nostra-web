import "./cn-header.css";

export function HeaderCN() {
	return (
		<header className='header'>
			<img
				src='/assets/images/casaNostra.jpg'
				alt={`Logo de Llíria es casa nostra.`}
				className='logo-header'
			/>
			<h1> Casa Nostra Blog </h1>
		</header>
	);
}
