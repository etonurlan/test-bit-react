import { FiltersLists } from "./FiltersLists"
import { Input } from "./Input"
import { ChoosingFilters } from "./ChoosingFilters"

export const Filters = ({setInputText} : {setInputText: Function}) => {
    return (
        <div className="text-black dark:text-mode-white">
            <div className="flex items-center large:px-[180px] px-[24px]
            large:py-[25px] py-[10px]">
                <h2 className="mr-auto font-bold extra-large:text-[40px]
                large:text-[32px] small:text-[26px] text-[20px]">
                    Список сотрудников
                </h2>
                <div className="small:flex hidden">
                    <FiltersLists />
                </div>  
            </div>
            <Input setInputText={setInputText} />
            <div className="small:hidden flex items-center px-[24px] mb-[10px]">
                <FiltersLists />
            </div>
            <ChoosingFilters />
        </div>
    )
}