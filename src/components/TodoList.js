import Todo from "./Todo"

const TodoList = ({todoList, setTodoList}) => {
    return (
        <div>
            {todoList.map((elem) => (
                <Todo setTodoList={setTodoList} key={elem.id} todoItem={elem} todoList={todoList}></Todo>
            ))}
        </div>
    )
}

export default TodoList