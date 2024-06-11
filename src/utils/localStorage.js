export const addUserToLocalStorage = (user) => {
	if (typeof window !== "undefined") {
		localStorage.setItem("user", JSON.stringify(user));
	}
};

export const removeUserFromLocalStorage = () => {
	if (typeof window !== "undefined") {
		localStorage.removeItem("user");
	}
};

export const getUserFromLocalStorage = () => {
	let user;
	if (typeof window !== "undefined") {
		const result = localStorage.getItem("user");
		user = result ? JSON.parse(result) : false;
	}

	return user;
};
export const history = {
	navigate: null,
	location: null,
};
