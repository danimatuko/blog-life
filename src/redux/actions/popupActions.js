export const openPopUp = (popUpName) => {
	console.log("openPopUp");
	return {
		type: "OPEN",
		payload: popUpName
	};
};
export const closePopUp = (popUpName) => {
	console.log("closepopup");
	return {
		type: "CLOSE",
		payload: popUpName
	};
};
