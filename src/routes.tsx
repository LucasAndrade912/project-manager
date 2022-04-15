import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { App, Login, Project, Projects } from './pages'

const routes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/app" element={<App />}>
					<Route path="/app/projects" element={<Projects />} />
					<Route path="/app/project" element={<Project />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default routes