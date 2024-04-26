import { useState, useEffect } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { supabase } from './client'
import ViewPosts from './pages/ViewPosts'
import DetailView from './pages/DetailView'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   async function getTodos() {
  //     const { data: todos } = await supabase.from('Reddit').select()

  //     if (todos.length > 1) {
  //       setTodos(todos)
  //     }
  //   }

  //   getTodos()
  // }, [])

    // Set up routes
  let element = useRoutes([
    {
      path: '/',
      element: <ViewPosts data={posts} />
    },
    {
      path: '/edit/:id',
      element: <EditPost data={posts} />
    },
    {
      path: '/new',
      element: <CreatePost />
    },
    {
      path: '*',
      element: <h1>Not Found</h1>
    },
    {
      path: '/postDetail/:id',
      element: <DetailView data={posts} />
    }
  ])

  return (
    <div className="App">
      {/* <div>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))} */}
      <h1>Celebrate your small wins!</h1>
      <div className="header">
        <Link to="/"><button className="nav">Home</button></Link>
        <Link to="/new"><button className="nav">Add a post</button></Link>
      </div>
      {element}
    </div>
  )
}

export default App
