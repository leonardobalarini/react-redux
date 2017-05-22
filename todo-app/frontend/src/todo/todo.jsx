import React from 'react'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

export default prop => (
    <div>
        <PageHeader name='Tarefas' small="Cadastro"></PageHeader>
        <TodoForm />
        <TodoList />
    </div>
)
