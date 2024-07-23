import { Layout } from "../components/layout/layout";
import "./pages.css";

export function ContactPage() {
	return (
		<Layout>
			<div className='contact-form'>
				<h2>Envia'ns un missatge</h2>
				<form
					action='/submit'
					method='post'>
					<label for='name'>Nom</label>
					<input
						type='text'
						id='name'
						name='name'
						required
					/>

					<label for='email'>Email</label>
					<input
						type='email'
						id='email'
						name='email'
						required
					/>

					<label for='message'>Missatge</label>
					<textarea
						id='message'
						name='message'
						rows='10'
						required></textarea>

					<input
						type='submit'
						value='Enviar'
					/>
				</form>
			</div>
		</Layout>
	);
}
