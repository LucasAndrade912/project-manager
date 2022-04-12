import React from 'react'

import { Container, ProjectTitle, ProjectDescription } from './styles'
import Tag from '../Tag'

const Project = () => {
	return (
		<Container>
			<ProjectTitle>
        Project Test
			</ProjectTitle>
      
			<ProjectDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione est maiores cupiditate!
			</ProjectDescription>

			<Tag name="UI Design" color="#FF6262" />
			<Tag name="UX Design" color="#58ADFC" />
		</Container>
	)
}

export default Project