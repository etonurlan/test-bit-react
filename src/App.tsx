import { StaffList } from "./pages/StaffList"
import { EmployeeProfile } from "./pages/EmployeeProfile"
import { Header } from "./components/Header"
import { Breadcrumbs } from "./components/Breadcrumbs"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"

function App() {
  const [employeeName, setEmployeeName] = useState("")
  
  return (
    <div className="font-primary dark:bg-black">
      <Header />
      <Breadcrumbs employeeName={employeeName} />
      <Routes>
        <Route path="/" element={<StaffList setEmployeeName={setEmployeeName} />} />
        <Route path="/employee/:id" element={<EmployeeProfile setEmployeeName={setEmployeeName} />} />
      </Routes>
    </div>
  )
}

export default App