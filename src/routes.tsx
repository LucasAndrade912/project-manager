import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { auth } from './firebase'

import { App, Login, Project, Projects } from './pages'

interface AuthContextProps {
	isAuth: boolean | null
	setIsAuth: React.Dispatch<React.SetStateAction<boolean | null>>
}

export const AuthContext = createContext<AuthContextProps | null>(null)

const routes = () => {
	const [isAuth, setIsAuth] = useState<boolean | null>(false)

	auth.onAuthStateChanged(user => {
		user
			? setIsAuth(true)
			: setIsAuth(false)
	})

	return (
		<BrowserRouter>
			<AuthContext.Provider value={{ isAuth, setIsAuth }}>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="app" element={<App />}>
						<Route path="projects" element={<Projects />} />
						<Route path="project" element={<Project />} />
					</Route>
				</Routes>
			</AuthContext.Provider>
		</BrowserRouter>
	)
}

export default routes