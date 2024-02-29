import { useGetAllStaffQuery } from "../store/staff/staff.api"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export const EmployeeList = ({inputText}: {inputText: string}) => {
    const {data} = useGetAllStaffQuery("")
    const filters = useSelector((state: any) => state.filters.filters)
    const filteredData = data?.filter(item =>
        (filters.postFilters.length === 0 || filters.postFilters.includes(item.position)) &&
        (filters.sexFilters.length === 0 || filters.sexFilters.includes(item.gender)) && 
        (filters.technologyFilters.length === 0 || filters.technologyFilters.every((tech: any) => item.stack.includes(tech)))
    )

    return (
        <div className="large:px-[180px] px-[24px] small:w-auto w-[1000px]">
            {filteredData?.map((employee) => (
                <Link key={employee.id} to={`/employee/${employee.id}`}
                className={(employee.name.toLowerCase().indexOf(inputText.toLowerCase()) == 0) ?
                `inline` : `hidden`}>
                    <div className="large:p-[28px_12px] grid grid-cols-12 text-[12px]
                    large:text-[20px] text-black small:p-[20px_8px] small:text-[14px]
                    border-y border-y-[rgba(242,242,242,1)] hover:bg-[rgba(242,242,242,1)]
                    cursor-pointer dark:bg-black dark:text-mode-white dark:hover:bg-[#3E3E3E]">
                        <div className="col-span-4">
                            <span>
                                {employee.name}
                            </span>
                        </div>
                        <div className="col-span-3">
                            <span>
                                {employee.position}
                            </span>
                        </div>
                        <div className="col-span-3">
                            <span>
                                {employee.phone}
                            </span>          
                        </div>
                        <div>
                            <span className="whitespace-nowrap">
                                {employee.birthdate}
                            </span>          
                        </div>
                    </div> 
                </Link>    
            ))}
        </div>
    )
}