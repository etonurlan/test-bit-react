import { Filters } from "../components/Filters"
import { ListHeader } from "../components/ListHeader"
import { EmployeeList } from "../components/EmployeeList"
import { useState } from "react"

export const StaffList = ({setEmployeeName}: {setEmployeeName: Function}) => {
    setEmployeeName("")
    const[inputText, setInputText] = useState("")

    return (
        <>
            <Filters setInputText={setInputText} />
            <div className="small:overflow-x-hidden overflow-x-scroll small:whitespace-normal
            whitespace-nowrap">
                <ListHeader />
                <EmployeeList inputText={inputText} /> 
            </div>
            
        </>
    )
}