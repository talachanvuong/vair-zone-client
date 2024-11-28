import { PageProvider } from '../components/contexts/PageContext'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import Already from './checkers/Already'
import Authorize from './checkers/Authorize'
import Layout from './Layout'
import Welcome from './checkers/Welcome'

import Login from '../pages/forms/Login'
import Register from '../pages/forms/Register'
import Forget from '../pages/forms/Forget'

import Info from '../pages/settings/Info'
import Password from '../pages/settings/Password'
import Email from '../pages/settings/Email'

import Policy from '../pages/rules/Policy'
import Term from '../pages/rules/Term'

import Donate from '../pages/Donate'
import Home from '../pages/home/Home'
import Landing from '../pages/Landing'
import Me from '../pages/Me'

export const router = createBrowserRouter([
  {
    path: '/login',
    Component: Already,
    children: [
      {
        path: '',
        Component: Login,
      },
    ],
  },
  {
    path: '/register',
    Component: Already,
    children: [
      {
        path: '',
        Component: Register,
      },
    ],
  },
  {
    path: '/forget',
    Component: Already,
    children: [
      {
        path: '',
        Component: Forget,
      },
    ],
  },
  {
    path: '/setting',
    Component: Authorize,
    children: [
      {
        path: '',
        element: <Navigate to="/setting/info" />,
      },
      {
        path: 'info',
        element: (
          <Layout>
            <Info />
          </Layout>
        ),
      },
      {
        path: 'password',
        element: (
          <Layout>
            <Password />
          </Layout>
        ),
      },
      {
        path: 'email',
        element: (
          <Layout>
            <Email />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/policy',
    Component: Policy,
  },
  {
    path: '/term',
    Component: Term,
  },
  {
    path: '/donate',
    Component: Donate,
  },
  {
    path: '/me',
    Component: Authorize,
    children: [
      {
        path: '',
        element: (
          <Layout>
            <Me />
          </Layout>
        ),
      },
    ],
  },
  {
    path: '/',
    Component: Welcome,
  },
  {
    path: '/landing',
    element: (
      <Layout>
        <Landing />
      </Layout>
    ),
  },
  {
    path: '/home',
    Component: Authorize,
    children: [
      {
        path: '',
        element: (
          <Layout>
            <PageProvider>
              <Home />
            </PageProvider>
          </Layout>
        ),
      },
    ],
  },
])
