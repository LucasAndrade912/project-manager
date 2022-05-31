import React, { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { auth } from './firebase'
import { App } from './components'
import { Login, Project, Projects } from './pages'

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
				<DndProvider backend={HTML5Backend}>
					<Routes>
						<Route path="/" element={<App />}>
							<Route path="projects" element={<Projects />} />
							<Route path="projects" element={<Outlet />}>
								<Route path=":title" element={<Project />} />
							</Route>
						</Route>
						<Route path="login" element={<Login />} />
					</Routes>
				</DndProvider>
			</AuthContext.Provider>
		</BrowserRouter>
	)
}

export default routes