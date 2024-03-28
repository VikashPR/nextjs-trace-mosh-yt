import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>
    <header>
        <h1 className="text-2xl">Todos</h1>
        <Link href="/new">New</Link>
    </header>
    </>
  )
}

export default Home