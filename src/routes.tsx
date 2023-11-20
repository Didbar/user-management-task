import { createBrowserRouter } from 'react-router-dom'
import ErrorPage from 'src/pages/ErrorPage'
import GroupsPage from 'src/pages/GroupsPage'
import HomePage from 'src/pages/HomePage'
import Layout from 'src/pages/Layout'
import UsersPage from 'src/pages/UsersPage'
import { GroupDetails } from './features/group'
import { UserDetails } from './features/user'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetails /> }],
      },
      {
        path: 'groups',
        element: <GroupsPage />,
        children: [{ path: ':id', element: <GroupDetails /> }],
      },
    ],
  },
])

export default router
