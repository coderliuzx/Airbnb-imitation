import { Navigate } from "react-router-dom"
import React from "react"

// import Home from "src/views/home"  //不使用懒加载(正常导入)
const Home = React.lazy(() => import("src/views/home"))
const Detail = React.lazy(() => import("src/views/detail"))
const Entire = React.lazy(() => import("src/views/entire"))

const routes = [
  {
    path: '/',
    element: <Navigate to={"/home"} />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/detail',
    element: <Detail />
  },
  {
    path: '/entire',
    element: <Entire />
  }
]

export default routes


