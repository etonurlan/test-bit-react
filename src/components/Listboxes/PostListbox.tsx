import { useState } from "react"
import ArrayDown from "../../img/ArrayDown.svg"
import ArrayUp from "../../img/ArrayUp.svg"
import { Checkbox } from "../Checkbox"
import { useDispatch, useSelector } from "react-redux"
import { updateState } from "../../store/features/filterSlice"

const postsList = [
    "Backend-разработчик",
    "Frontend-разработчик",
    "Аналитик",
    "Дизайнер",
    "Менеджер"
]


export const PostListbox = () => {
    const [listOpen, setListOpen] = useState(false)
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.filters.filters.postFilters)
    const listbox = "post"

    const handleSelect = (filter: string) => {
        dispatch(updateState({filter, data, listbox}))
    }

    return (
        <div className="small:mr-10 mr-3 relative">
            <div className="flex cursor-pointer"
            onClick={() => setListOpen(!listOpen)}>
                <span className={`small:mr-[10px] mr-[5px]
                ${listOpen && "text-blue font-medium"}
                extra-large:text-[16px] small:text-[14px] text-[12px]`}>
                    Должность
                </span>
                <img className="small:w-[20px] small:h-[18px] w-[15px] h-[14px]"
                src={listOpen ? ArrayUp : ArrayDown} alt="Array" />
            </div>
            {listOpen && (
                <div className="p-4 border-t border-t-blue
                shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] absolute small:right-0 bg-white
                dark:bg-black dark:text-mode-white">
                    {postsList.map((post) => {
                        const filterChecked = data.includes(post)
                        return (
                           <div onClick={() => handleSelect(post)}
                            className="flex items-center">
                                <span className="mr-auto extra-large:text-[16px]
                                small:text-[14px] whitespace-nowrap text-[12px]">
                                    {post}
                                </span>
                                <Checkbox filterChecked={filterChecked} />                       
                            </div> 
                        )   
                    })}
                </div>
            )}
        </div>
    )
}