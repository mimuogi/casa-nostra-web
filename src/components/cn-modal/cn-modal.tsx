import React from "react";
import "./modal.css";
interface ModalProps {
	isVisible: boolean;
	onClose: () => void;
	message: string;
	isError: boolean;
}

const Modal: React.FC<ModalProps> = ({
	isVisible,
	onClose,
	message,
	isError,
}) => {
	if (!isVisible) return null;

	return (
		<div
			className='modal-overlay'
			onClick={onClose}>
			<div
				className={`modal-content ${isError ? "modal-error" : "modal-success"}`}
				onClick={(e) => e.stopPropagation()}>
				<h2>{isError ? "Error" : "Success"}</h2>
				<p>{message}</p>
				<button
					className='modal-close'
					onClick={onClose}>
					Tanca
				</button>
			</div>
		</div>
	);
};

export default Modal;
