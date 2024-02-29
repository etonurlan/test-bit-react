import { useState } from "react"
import ArrayDown from "../../img/ArrayDown.svg"
import ArrayUp from "../../img/ArrayUp.svg"
import { Checkbox } from "../Checkbox"
import { useDispatch, useSelector } from "react-redux"
import { updateState } from "../../store/features/filterSlice"

const technologyList = [
    "React",
    "Java",
    "PHP",
    "Figma",
    "Word",
    "C#"
]

export const TechnologyListbox = () => {
    const [listOpen, setListOpen] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.filters.filters.technologyFilters)
    const listbox = "tech"

    const handleSelect = (filter: string) => {
        dispatch(updateState({filter, data, listbox}))
    }

    return (
        <div className="relative small:mr-10">
            <div className="flex cursor-pointer"
            onClick={() => setListOpen(!listOpen)}>
                <span className={`small:mr-[10px] mr-[5px]
                ${listOpen && "text-blue font-medium"}
                extra-large:text-[16px] small:text-[14px] text-[12px]`}>
                    Стек технологий
                </span>
                <img className="small:w-[20px] small:h-[18px] w-[15px] h-[14px]"
                src={listOpen ? ArrayUp : ArrayDown} alt="Array" />
            </div>
            {listOpen && (
                <div className="p-4 border-t border-t-blue
                shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute small:right-0 bg-white
                dark:bg-black dark:text-mode-white">
                    {technologyList.map((technology) => {
                        const filterChecked = data.includes(technology)
                        return (
                            <div onClick={() => handleSelect(technology)}
                            className="flex items-center">
                                <span className="mr-auto whitespace-nowrap
                                extra-large:text-[16px] small:text-[14px] text-[12px]">
                                    {technology}
                                </span>
                                <Checkbox filterChecked={filterChecked} />                       
                            </div>
                    )})}
                </div>
            )}
        </div>
    )
}