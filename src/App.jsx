import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const App = () => {
const [User, setUser] = useState("")
const [loggedInUserData, setLoggedInUserData] = useState('')
const [userData,setUserData] = useContext(AuthContext)

useEffect(() => {
  if(userData){
    const LoggedInUser = localStorage.getItem('LoggedInUser')
    if(LoggedInUser){
      setUser(LoggedInUser.role)
    }
  }
}, [userData])


const handleLogin = (email,password)=>{
  if(email == 'admin@me.com' && password == '123'){
    setUser("Admin")
    localStorage.setItem('LoggedInUser',JSON.stringify({role:'admin'}))
  }
  else if (userData){
    const employee = userData.find((e)=>email == e.email && e.password == password)
    if(employee){
      setUser("Employee")
    setLoggedInUserData(employee)
    localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
    }
  }

  else{
    alert("invalid credentials")
  }
}

  return (
  <div>
    {!User ? <Login handleLogin={handleLogin}/>:null}
    {User === 'Admin' ? <AdminDashboard/> : User === 'Employee' ? <EmployeeDashboard data={loggedInUserData}/> : null}

  </div>
)
}
export default App;