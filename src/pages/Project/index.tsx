import React from 'react'

import { Menu, Status, Tag, Task } from '../../components'
import { ExampleImage } from '../../assets'

import { Container, Main } from '../Projects/styles'
import {
	ProjectTitle,
	Image,
	ProjectDescription,
	Subtitle,
	AddTaskButton,
	Tasks
} from './styles'

const Project = () => {
	return (
		<Container>
			<Menu />

			<Main>
				<Image src={ExampleImage} alt="Example Image" />

				<ProjectTitle>
          My Project

					<Status status="to-do" />
				</ProjectTitle>

				<ProjectDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum perferendis dolorem.
				</ProjectDescription>

				<Tag name="UI Design" color="#FF6262" />
				<Tag name="UX Design" color="#27FD89" />

				<Subtitle>
          Tasks

					<AddTaskButton>
            + Add Task
					</AddTaskButton>
				</Subtitle>

				<Tasks>
					<Task task="Task 1" finished={true} />
					<Task task="Task 2" finished={true} />
					<Task task="Task 3" finished={false} />
				</Tasks>
			</Main>			
		</Container>
	)
}

export default Project