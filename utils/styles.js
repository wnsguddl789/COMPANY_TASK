import styled from '@emotion/styled'

export const GlobalLayout = styled.div`
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fafafa;
`

export const TodoContainer = styled.div`
	border: 1px solid black;
	border-radius: 10px;
`
export const TodoHeader = styled.div`
	width: 300px;
	height: 40px;
	padding: 5px;
	text-align: center;
`
export const TodoInput = styled.input`
	outline: none;
`
export const TodoBody = styled.div`
	padding: 5px;
`

export const TodoList = styled.ul`
	display: flex;
	flex-direction: column;
`
export const TodoListItem = styled.li`
	display: flex;
	justify-content: space-between;
	line-height: 1.5;
`
export const TodoRemoveButton = styled.button`
	outline: none;
`
