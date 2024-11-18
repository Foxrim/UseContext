import { useContext } from "react";
import UserContext from "../contexts/UserContext";

function UserProfile() {
	const userContext = useContext(UserContext);

	if (!userContext) {
		return <p>Loading...</p>;
	}

	const { isOnline, setIsOnline } = userContext;

	return (
		<div>
			<h1>Code version TypeScript</h1>
			<p>User is {isOnline ? "online" : "offline"} </p>

			<button type="button"
				onClick={() => {
					setIsOnline(!isOnline);
				}}>
				click to change user status
			</button>
		</div>
	);
}

export default UserProfile;
