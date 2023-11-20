import { createBrowserRouter } from 'react-router-dom'
import GroupDetails from 'src/features/group/GroupDetails'
import UserDetails from 'src/features/user/UserDetails'
import ErrorPage from 'src/pages/ErrorPage'
import GroupsPage from 'src/pages/GroupsPage'
import HomePage from 'src/pages/HomePage'
import Layout from 'src/pages/Layout'
import UsersPage from 'src/pages/UsersPage'

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
