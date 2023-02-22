import React from "react"
import { createBrowserRouter } from "react-router-dom"
import BackendPage from "../pages/BackendPage"
import BlockchainPage from "../pages/BlockchainPage"
import FrontendPage from "../pages/FrontendPage"
import HomePage from "../pages/HomePage"
import IAPage from "../pages/IAPage"
import TechPage from "../pages/TechPage"
import ToolsPage from "../pages/ToolsPage"
import SearchPage from "../pages/SearchPage"

const router = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: '/Tech', element: <TechPage/>},
    {path: '/Backend', element: <BackendPage/>},
    {path: '/Frontend', element: <FrontendPage/>},
    {path: '/BlockChain', element: <BlockchainPage/>},
    {path: '/IA', element: <IAPage/>},
    {path: '/Tools', element: <ToolsPage/>},
    {path: '/Search', element: <SearchPage/>},
])

export default router