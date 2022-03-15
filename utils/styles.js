import styled from '@emotion/styled'

export const GlobalLayout = styled.div`
	min-height: 100vh;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fafafa;
	overflow: hidden;
`
export const RouteContainer = styled.div`
	display: flex;
	position: absolute;
	top: 0;
	padding: 20px;
	a {
		text-decoration: none;
		color: black;
		padding: 10px;
		/* box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3); */
	}
`

export const TodoContainer = styled.div`
	width: 500px;
	height: 80vh;
	box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.3);
	border-radius: 10px;
`
export const TodoHeader = styled.div`
	/* height: 40px; */
	padding: 5px;
	text-align: center;
	p {
		padding: 10px 0;
		font-weight: 700;
	}
`
export const TodoInput = styled.input`
	outline: none;
	width: 90%;
	max-width: 90%;
	border: none;
	background-color: transparent;
	padding: 20px 0;
`
export const TodoBody = styled.div`
	padding: 5px;
	height: 85%;
	overflow-y: scroll;
`

export const TodoList = styled.ul`
	display: flex;
	padding: 0 20px;
	flex-direction: column;
`
export const TodoListItem = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	line-height: 1.5;
	margin: 5px 0 5px 0;
	& > span {
		text-decoration: ${(props) => (props.isComplete ? 'line-through' : null)};
		overflow-x: scroll;
		font-size: 14px;
		color: rgba(0, 0, 0, 0.5);
	}
	& > div > * {
		margin-left: 10px;
	}
`
const BUTTON_DEFAULT = `
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: none;
	margin: 0;
	padding: 0.5rem 1rem;

	font-family: 'Noto Sans KR', sans-serif;
	font-size: 1rem;
	font-weight: 400;

	display: inline-block;
	width: auto;
	color: white;
	border: none;
	border-radius: 4px;
	box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
	cursor: pointer;
`
export const TodoRemoveButton = styled.button`
	${BUTTON_DEFAULT};
	background-color: #ff4444;
	:hover {
		background-color: #cc0000;
	}
`
export const TodoCompleteButton = styled.button`
	${BUTTON_DEFAULT};
	background-color: #00c851;
	:hover {
		background-color: #007e33;
	}
`
