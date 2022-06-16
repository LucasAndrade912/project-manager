export function formatStatus(status: 'to-do' | 'in-progress') {
	const statusArray = status.split('')
	statusArray.splice(2, 1)
	statusArray[2] = statusArray[2].toUpperCase()

	const formattedStatus = statusArray.join('')

	return formattedStatus as 'toDo' | 'inProgress'
}