import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../components/cn-modal/cn-modal";
import "./pages.css";

interface FormErrors {
	name?: string;
	email?: string;
	title?: string;
	content?: string;
}

export function CollaboratePage() {
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
		const title = formData.get("title") as string;
		const content = formData.get("content") as string;

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

		if (!title) {
			errors.title = "El títol és requerit";
		} else if (title.length < 5) {
			errors.title = "El títol ha de tenir almenys 5 caràcters";
		}

		if (!content) {
			errors.content = "El contingut és requerit";
		} else if (content.length < 10) {
			errors.content = "El contingut ha de tenir almenys 10 caràcters";
		}

		return errors;
	};

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		const errors = validateForm();
		if (Object.keys(errors).length === 0) {
			emailjs
				.sendForm(
					"service_participa",
					"template_col·laborador",
					form.current!,
					{
						publicKey: "bHMgqcFm22Z_Ox2X7",
					}
				)
				.then(
					() => {
						setModalMessage("El teu missatge s'ha enviat amb èxit!");
						setIsError(false);
						setModalVisible(true);
						if (form.current) form.current.reset();
					},
					(error) => {
						setModalMessage(
							"Hi ha hagut un error al enviar el missatge. " + error.text
						);
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
				<h2 className='form-title'>Participa</h2>
				<form
					ref={form}
					onSubmit={sendEmail}
					className='participate-form'>
					<div className='form-group'>
						<label htmlFor='name'>Nom</label>
						{formErrors.name && (
							<span className='error-text'>{formErrors.name}</span>
						)}
						<input
							type='text'
							id='name'
							name='name'
							required
							className='form-input'
						/>

						<label htmlFor='email'>Correu electrònic</label>
						{formErrors.email && (
							<span className='error-text'>{formErrors.email}</span>
						)}
						<input
							type='email'
							id='email'
							name='email'
							required
							className='form-input'
						/>
					</div>

					<div className='form-group'>
						<label htmlFor='title'>Títol</label>
						{formErrors.title && (
							<span className='error-text'>{formErrors.title}</span>
						)}
						<input
							type='text'
							id='title'
							name='title'
							required
							className='form-input'
						/>
					</div>

					<div className='form-group'>
						<label
							htmlFor='content'
							className='form-label'>
							Contingut
						</label>
						{formErrors.content && (
							<span className='error-text'>{formErrors.content}</span>
						)}
						<textarea
							id='content'
							name='content'
							className='form-textarea'
							rows={10}
							required></textarea>
					</div>

					<div className='form-group'>
						<label
							htmlFor='contentImages'
							className='form-label'>
							Imatges
						</label>
						<input
							type='file'
							id='contentImages'
							name='contentImages'
							accept='image/*'
							multiple
							className='form-input-file'
						/>
					</div>

					<div className='form-group'>
						<label
							htmlFor='personalImage'
							className='form-label'>
							Imatge personal
						</label>
						<input
							type='file'
							id='personalImage'
							name='personalImage'
							className='form-input-file'
							accept='image/*'
						/>
						<label
							htmlFor='socialMediaLinks'
							className='form-label'>
							Enllaços a xarxes socials
						</label>
						<input
							type='text'
							id='socialMediaLinks'
							name='socialMediaLinks'
							className='form-input'
						/>
					</div>
					<input
						type='submit'
						value='Enviar'
						className='form-submit'
					/>
				</form>
			</div>
		</div>
	);
}

export default CollaboratePage;
