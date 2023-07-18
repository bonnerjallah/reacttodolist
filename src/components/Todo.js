import styles from  '../style.module.css'

const Todo = ({todoItem, todoList, setTodoList}) => {
    const deleteTodo = () => {
        setTodoList(todoList.filter(elem => elem.id !== todoItem.id)
        )
    }
    return (
        <div>
            <div className={ styles.todoitem}>
                <h3 className={styles.todoname}>{todoItem.name}</h3>
                <button onClick={deleteTodo} className={styles.deleteButton}>Done</button>
            </div>
        </div>
    )
}

export default Todo