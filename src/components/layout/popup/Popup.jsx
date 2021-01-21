import React from "react";
import { useSelector } from "react-redux";
import { Modal } from "semantic-ui-react";

const Popup = ({ children }) => {
	const isOpen = useSelector((state) => state.popUp.isOpen);

	return (
		<Modal size="mini" open={isOpen}>
			<Modal.Content>{children}</Modal.Content>
		</Modal>
	);
};
export default Popup;
