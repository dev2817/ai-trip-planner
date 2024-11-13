import DashboardLayout from '@/layouts/DashboardLayout'
import AuthLayout from '@/pages/auth'
import CompleteProfile from '@/pages/auth/pages/CompleteProfile'
import ForgotPassword from '@/pages/auth/pages/ForgotPassword'
import OtpVerify from '@/pages/auth/pages/OtpVerify'
import ResetPassword from '@/pages/auth/pages/ResetPassword'
import SignIn from '@/pages/auth/pages/SignIn'
import SignUp from '@/pages/auth/pages/SignUp'
import CreateTrip from '@/pages/create-trip/CreateTrip'
import Home from '@/pages/home/Home'
import Trips from '@/pages/trips/Trips'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

export default function AppRouter() {
  const routes = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/auth",
          element: <AuthLayout />,
          children: [
            {
              index: true,
              element: <Navigate to="sign-in" replace />
            },
            {
              path: "sign-in",
              element: <SignIn />
            },
            {
              path: "sign-up",
              element: <SignUp />
            },
            {
              path: "forgot-password",
              element: <ForgotPassword />
            },
            {
              path: "otp-verify",
              element: <OtpVerify />
            },
            {
              path: "reset-password",
              element: <ResetPassword />
            },
            {
              path: "complete-profile",
              element: <CompleteProfile />
            },
          ]
        },
        {
          path: "dashboard",
          element: <DashboardLayout />,
          children: [
            {
              index: true,
              element: <Navigate to="create-trip" replace />
            },
            {
              path: "trip",
              element: <Trips />
            },
            {
              path: "create-trip",
              element: <CreateTrip />
            }
          ]
        }
      ]
    }
  ])
  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}
