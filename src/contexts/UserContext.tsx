import { createContext } from "react";

interface UserContextType {
	isOnline: boolean;
	setIsOnline: (isOnline: boolean) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export default UserContext;
