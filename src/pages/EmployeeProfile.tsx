import { useParams } from "react-router-dom"
import { useGetEmployeeQuery } from "../store/staff/staff.api"

export const EmployeeProfile = ({setEmployeeName}: {setEmployeeName: Function}) => {
    const {id} = useParams()
    const {data} = useGetEmployeeQuery(id!)
    setEmployeeName(data)

    return (
        <div className="large:px-[180px] px-[24px] text-black dark:text-mode-white">
            <div className="flex mb-7">
                <img className="rounded-full small:w-[163px] small:h-[163px] large:mr-[42px]
                small:mr-[25px] w-[100px] h-[100px] mr-3"
                src={data?.photo} alt="Photo" />
                <div className="flex flex-col">
                    <span className="font-bold large:text-[40px]
                    small:text-[28px] mb-2 text-[20px]">
                        {data?.name}
                    </span>
                    <span className="font-medium large:text-2xl small:text-xl small:mb-7
                    text-[14px]">
                        {data?.position}
                    </span>
                    <div className="small:inline hidden">
                        {data?.stack.map((tech) => (
                            <span className="p-[10px] bg-[#F2F2F2] rounded-[5px]
                            large:mr-[51px] small:mr-[25px]
                            dark:bg-[#3E3E3E] dark:text-mode-white">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="small:hidden inline">
                {data?.stack.map((tech) => (
                    <span className="p-[10px] bg-[#F2F2F2] rounded-[5px]
                    large:mr-[51px] small:mr-[25px] mr-3 
                    dark:bg-[#3E3E3E] dark:text-mode-white">
                        {tech}
                    </span>
                ))}
            </div>
            <hr className="border-[#F2F2F2] mb-7 mt-7 dark:border-[#3E3E3E]" />
            <div>
                <span className="font-semibold large:text-[32px]
                small:text-[24px] text-[16px]">
                    Основная информация
                </span>
                <div className="large:text-2xl small:text-lg mt-4 flex text-[14px]
                items-center">
                    <div className="mr-7">
                        <p className="font-medium mb-1 small:whitespace-normal
                        whitespace-nowrap">
                            Контактный телефон: 
                        </p>
                        <p className="font-medium mb-1 small:whitespace-normal
                        whitespace-nowrap">
                            Дата рождения: 
                        </p>
                        <p className="font-medium small:whitespace-normal
                        whitespace-nowrap">
                            Дата устройства: 
                        </p>
                    </div>
                    <div>
                        <p className="font-normal small:whitespace-normal
                        whitespace-nowrap">
                            {data?.phone}
                        </p>
                        <p className="font-normal small:whitespace-normal
                        whitespace-nowrap">
                            {data?.birthdate}
                        </p>
                        <p className="font-normal small:whitespace-normal
                        whitespace-nowrap">
                            {data?.dateOfEmployment}
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}