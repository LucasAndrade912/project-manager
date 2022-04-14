import React from 'react'
import ReactDOM from 'react-dom'
import Project from './pages/Project'
import GlobalStyle from './global/globalStyle'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Project />
	</React.StrictMode>,
	document.getElementById('root')
)
