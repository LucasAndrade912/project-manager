import React from 'react'
import ReactDOM from 'react-dom'
import Projects from './pages/Projects'
import GlobalStyle from './global/globalStyle'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Projects />
	</React.StrictMode>,
	document.getElementById('root')
)
