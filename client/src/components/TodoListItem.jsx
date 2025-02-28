import styles from './TodoListItem.module.css'




export default function TodoListItem({
  todoId,
  text,
  isCompleted,
  onStatusChange
}){

    const todoClassNames = [styles['todo']];
    if(isCompleted){
      todoClassNames.push(styles['is-completed'])
    }
    return(
        <tr className={todoClassNames.join(' ')}>
                <td>{text}</td>
                <td>{isCompleted ?  'Completed' : 'Incomplete'}</td>
                <td className="todo-action">
                  <button onClick={()=>onStatusChange(todoId)} className="btn todo-btn">Change status</button>
                </td>
              </tr>
    )
}