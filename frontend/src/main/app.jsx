import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/font-awesome/css/font-awesome.min.css'
import '../app.css'

import React from 'react'
import Todo  from '../todo/todo'
import About from '../about/about'
import Menu  from '../template/menu'


export default props => (
	<div>
		<header>
			<Menu />
		</header>
		<Todo />
		<About />
	</div>
)