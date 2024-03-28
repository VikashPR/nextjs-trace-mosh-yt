import React from 'react'
import Link from 'next/link'
import { prisma } from '@/db'
import TodoItem from '../components/TodoItem/TodoItem'

const getTodos = () => {
    return prisma.todo.findMany()
}

const Home = async () => {
    const todos = await getTodos()
    
  return (
    <>
    <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl">Todos</h1>
        <Link className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none" href="/new">New</Link>
    </header>
    <ul className="pl-4">
        {todos.map(todo => (
            // <li key={todo.id} className="flex justify-between items-center border-b border-slate-300 py-2">
            //     <span>{todo.title}</span>
            //     <span>{todo.completed ? '✅' : '❌'}</span>
            // </li>
            <TodoItem key={todo.id} {...todo} />
        ))}
    </ul>
    </>
  )
}

export default Home