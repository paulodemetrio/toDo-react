import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return;

        //Adicionar tarefa
        addTodo(value, category)
        //Limpar os campos
        setValue('')
        setCategory('')
    }
    return (
        <div className="todo-form">
            <h2>Criar Tarefa:</h2>
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Digite um título'
                    onChange={(e) => setValue(e.target.value)}
                    value={value} />
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudos">Estudos</option>
                </select>
                <button type='submit'>Criar Tarefa</button>
            </form>
        </div>
    )
}

export default TodoForm