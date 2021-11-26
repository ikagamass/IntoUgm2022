import React, { useContext } from 'react';
import AuthStore from './auth';

const AppContext = React.createContext(null);

const AppProvider = ({ children }) => (
	<AppContext.Provider
		value={{
			auth: AuthStore()
		}}
	>
		{children}
	</AppContext.Provider>
);

export default AppProvider;

export const useAuth = () => useContext(AppContext).auth;
