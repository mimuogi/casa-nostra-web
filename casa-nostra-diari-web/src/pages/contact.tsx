import { Layout } from "../components/layout/layout";

export function ContactPage() {
	return (
		<Layout>
			<form>
				<label>
					Nom:
					<input
						type='text'
						name='name'
					/>
				</label>
				<label>
					Email:
					<input
						type='email'
						name='email'
					/>
				</label>
				<label>
					Missatge:
					<textarea name='message' />
				</label>
				<button type='submit'>Enviar</button>
			</form>
		</Layout>
	);
}
