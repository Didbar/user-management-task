/* eslint-disable react-refresh/only-export-components */
import { Spinner } from '@chakra-ui/react'
import { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Layout from 'src/pages/Layout'

const GroupDetails = lazy(() => import('./features/group/GroupDetails'))
const UserDetails = lazy(() => import('./features/user/UserDetails'))
const GroupsPage = lazy(() => import('src/pages/GroupsPage'))
const UsersPage = lazy(() => import('src/pages/UsersPage'))
const ErrorPage = lazy(() => import('src/pages/ErrorPage'))
const HomePage = lazy(() => import('src/pages/HomePage'))

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<Spinner />}>
    <Component />
  </Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: withSuspense(ErrorPage),
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: 'users',
        element: withSuspense(UsersPage),
        children: [
          {
            path: ':id',
            element: withSuspense(UserDetails),
          },
        ],
      },
      {
        path: 'groups',
        element: withSuspense(GroupsPage),
        children: [
          {
            path: ':id',
            element: withSuspense(GroupDetails),
          },
        ],
      },
    ],
  },
])

export default router
