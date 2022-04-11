import React from 'react'
import ReactDOM from 'react-dom'
import Login from './pages/Login'
import GlobalStyle from './global/globalStyle'

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<Login />
	</React.StrictMode>,
	document.getElementById('root')
)
