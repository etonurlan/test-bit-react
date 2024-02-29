import ChevronRight from "../img/chevron-right.svg"

export const Breadcrumbs = ({employeeName}: {employeeName: any}) => {
    return (
        <div className="flex extra-large:text-[18px] font-medium
        text-[rgba(176,176,176,1)] large:px-[180px] px-[24px]
        large:py-[25px] py-[10px] small:text-[16px] text-[12px]">
            <span className="mr-[10px] small:inline hidden">Главная</span>
            <img className="mr-[10px] small:inline hidden"
            src={ChevronRight} alt="chevron-right" />
            <span className="mr-[10px] small:whitespace-normal whitespace-nowrap">
                Список сотрудников
            </span>
            {employeeName !== "" && (
                <>
                    <img className="mr-[10px]"
                    src={ChevronRight} alt="chevron-right" />
                    <span className="small:whitespace-normal whitespace-nowrap text-ellipsis
                    overflow-hidden">
                        {employeeName?.name}
                    </span> 
                </> 
            )}
            
        </div>
    )
}