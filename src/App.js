import './App.css';
import React from "react"
import Admin_Page from './component/admin/Admin_Page';
import Projects from './component/project/Projects';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Quick_task from './component/quicktask/Quick_task';
import Categories from './component/categories/categories';
import User from './component/users/user';
import Chats from './component/chats/chats';
import Setting from './component/Settings/setting';
import Notification from './component/shared/Notification';
import Setting_popUp from './component/Settings/Setting_popUp';
import Projectstasks from './component/ProjectTask/ProjectTask';
import ProjectTask from './component/ProjectTask/ProjectTask';
import ProjectTasks from './component/ProjectTask/ProjectTask';

function App() {
  const ProtectedRoutelogin = ({ children }) => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = storedUser;

    if (user) {
      return <Navigate to="/project" />;
    }
    return children;
  };


  const ProtectedRoute = ({ children }) => {
    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const user = storedUser;

    if (!user) {
      return <Navigate to="/" />;
    }
    return children;
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route
            path='/'
            element={
              <ProtectedRoutelogin>
                <Admin_Page />
              </ProtectedRoutelogin>}>
          </Route>
          <Route path="/project" element={<ProtectedRoute><Projects /></ProtectedRoute>}> </Route>
          <Route path='/project/task' element={<ProtectedRoute><ProjectTasks /></ProtectedRoute>} />
          <Route
            path='/quicktask'
            element={
              <ProtectedRoute>
                <Quick_task />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/categories'
            element={
              <ProtectedRoute>
                <Categories />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/chats'
            element={
              <ProtectedRoute>
                <Chats />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/user'
            element={
              <ProtectedRoute>
                <User />
              </ProtectedRoute>
            }></Route>
          <Route
            path='/Settings'
            element={
              <ProtectedRoute>
                <Setting />
              </ProtectedRoute>
            }></Route>
          <Route path='/notification'
            element={<Notification />} >
          </Route>


        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
