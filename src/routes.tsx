import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import { App, Login, Project, Projects } from './pages'

const queryClient = new QueryClient()

const routes = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="app" element={<App />}>
						<Route path="projects" element={<Projects />} />
						<Route path="project" element={<Project />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	)
}

export default routes