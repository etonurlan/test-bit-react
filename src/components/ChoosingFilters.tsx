import Cancel from "../img/cancel.svg?react"
import { useSelector, useDispatch } from "react-redux"
import { updateState } from "../store/features/filterSlice"

export const ChoosingFilters = () => {
    const data = useSelector((state: any) => state.filters.filters)
    const postFilters = data.postFilters
    const sexFilters = data.sexFilters
    const technologyFilters = data.technologyFilters
    const dispatch = useDispatch()
    const listboxPost = "post"
    const listboxSex = "sex"
    const listboxTech = "tech"
    // const choosingFilters = [].concat(postFilters, sexFilters, technologyFilters)

    return (
        <div className="bg-[rgba(242,242,242,1)] small:mb-0 mb-3
        large:px-[180px] px-[24px] small:flex py-[13px] items-center dark:bg-[#3E3E3E]">
            <span className="large:text-[20px] font-medium text-black small:mr-[50px]
            mr-0 dark:text-mode-white small:text-[16px] text-[14px]">
                Выбранные фильтры:
            </span>
            <div className="mr-auto flex flex-wrap gap-2 small:mt-0 mt-3 small:mb-0 mb-3">
                {postFilters.map((filter: string) => (
                    <button className="bg-white rounded-[5px] large:p-[10px] small:p-[5px]
                    small:text-[16px] text-black last:mr-0 flex items-center large:mr-[25px]
                    dark:text-mode-white dark:bg-black small:mr-[10px] p-[10px] text-[12px]">
                        <Cancel onClick={() => dispatch(updateState({filter, data: postFilters,
                        listbox: listboxPost}))}
                        className="mr-[5px] w-[10px] dark:*:fill-mode-white" />
                        {filter}
                    </button>
                ))}
                {sexFilters.map((filter: string) => (
                    <button className="bg-white rounded-[5px] large:p-[10px] small:p-[5px]
                    small:text-[16px] text-black last:mr-0 flex items-center large:mr-[25px]
                    dark:text-mode-white dark:bg-black small:mr-[10px] p-[10px] text-[12px]">
                        <Cancel onClick={() => dispatch(updateState({filter, data: sexFilters,
                        listbox: listboxSex}))}
                        className="mr-[5px] w-[10px] dark:*:fill-mode-white" />
                        {filter}
                    </button>
                ))}
                {technologyFilters.map((filter: string) => (
                    <button className="bg-white rounded-[5px] large:p-[10px] small:p-[5px]
                    small:text-[16px] text-black last:mr-0 flex items-center large:mr-[25px]
                    dark:text-mode-white dark:bg-black small:mr-[10px] p-[10px] text-[12px]">
                        <Cancel onClick={() => dispatch(updateState({filter, data: technologyFilters,
                        listbox: listboxTech}))} 
                        className="mr-[5px] w-[10px] dark:*:fill-mode-white" />
                        {filter}
                    </button>
                ))}
            </div>
            <button className="bg-blue text-white large:p-[12px_48px] small:rounded-lg
            small:text-[16px] text-[12px] font-semibold small:p-[4px_24px] p-[6px_28px] rounded
            small:w-auto w-full">
                Найти
            </button>
        </div>
    )
}