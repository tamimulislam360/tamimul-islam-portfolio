import {createBrowserRouter} from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home'
import Projects from '../pages/Projects'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/projects',
                element: <Projects />,
                loader: async () => fetch('/data/projects.json')
            }
        ]
    }
])


export default router