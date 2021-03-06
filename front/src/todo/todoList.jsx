import React from 'react'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'

const TodoList = props => {
  const renderRows = () => {
    const list = props.list
    return list.map(todo => (
      <tr key={todo._id}>
        <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
        <td>
          < IconButton style='success' icon='check' onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}/>
          < IconButton style='warning' icon='undo' onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}/>
          < IconButton style='danger' icon='trash-o' onClick={() => props.handleRemove(todo)} />
        </td>
      </tr>
    ))
  }

  return (<div>
    <table className='table'>
      <thead>
        <tr>
          <th>Descrição</th>
          <th className='actionsColumn'>Ações</th>
        </tr>
      </thead>
      <tbody>
        {renderRows()}
      </tbody>
    </table>
  </div>
  )
}

const mapStateToProps = state => ({
  list: state.todo.list
})

export default connect(mapStateToProps)(TodoList)