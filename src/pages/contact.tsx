import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./pages.css"; 
import Modal from "../components/cn-modal/cn-modal";

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

export function ContactPage() {
	const form = useRef<HTMLFormElement>(null);
	const [formErrors, setFormErrors] = useState<FormErrors>({});
	const [modalVisible, setModalVisible] = useState(false);
	const [modalMessage, setModalMessage] = useState("");
	const [isError, setIsError] = useState(false);

	const validateForm = (): FormErrors => {
		const errors: FormErrors = {};
		const formData = new FormData(form.current!);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const message = formData.get("message") as string;

		if (!name) {
			errors.name = "El nom és requerit";
		} else if (name.length < 3) {
			errors.name = "El nom ha de tenir almenys 3 caràcters";
		}

		if (!email) {
			errors.email = "El correu electrònic és requerit";
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = "El correu electrònic no és vàlid";
		}

		if (!message) {
			errors.message = "El missatge és requerit";
		} else if (message.length < 10) {
			errors.message = "El missatge ha de tenir almenys 10 caràcters";
		}

		return errors;
	};

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		const errors = validateForm();
		if (Object.keys(errors).length === 0) {
			emailjs
				.sendForm("service_cnll", "template_casa-nosrtra", form.current!, {
					publicKey: "bHMgqcFm22Z_Ox2X7",
				})
				.then(
					() => {
						setModalMessage("El teu missatge s'ha enviat amb èxit!");
						setIsError(false);
						setModalVisible(true);
						if (form.current) form.current.reset();
					},
					(error) => {
						setModalMessage("Hi ha hagut un error al enviar el missatge.");
						setIsError(true);
						setModalVisible(true);
						console.log("FAILED...", error.text);
					}
				);
		} else {
			setFormErrors(errors);
		}
	};

	return (
		<div>
			<Modal
				isVisible={modalVisible}
				onClose={() => setModalVisible(false)}
				message={modalMessage}
				isError={isError}
			/>
			<div className='contact-form'>
				<h2>Envia'ns un missatge</h2>
				<form
					ref={form}
					onSubmit={sendEmail}>
					<div>
						<label htmlFor='name'>Nom</label>
						{formErrors.name && (
							<span className='error-text'>{formErrors.name}</span>
						)}
						<input
							type='text'
							id='name'
							name='name'
							required
						/>
					</div>

					<div>
						<label htmlFor='email'>Email</label>
						{formErrors.email && (
							<span className='error-text'>{formErrors.email}</span>
						)}
						<input
							type='email'
							id='email'
							name='email'
							required
						/>
					</div>

					<div>
						<label htmlFor='message'>Missatge</label>
						{formErrors.message && (
							<span className='error-text'>{formErrors.message}</span>
						)}
						<textarea
							id='message'
							name='message'
							rows={10}
							required></textarea>
					</div>

					<input
						type='submit'
						value='Enviar'
					/>
				</form>
			</div>
		</div>
	);
}

export default ContactPage;
