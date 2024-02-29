export const ListHeader = () => {
    return (
        <div className="large:px-[180px] px-[24px] small:w-auto w-[1000px]">
            <div className="large:p-[28px_12px]
            small:p-[20px_8px] grid grid-cols-12 text-[10px]
            large:text-[20px] small:text-[14px] font-medium text-[rgba(176,176,176,1)]">
                <div className="col-span-4">
                    <span>
                        ФИО
                    </span>
                </div>
                <div className="col-span-3">
                    <span>
                        Должность
                    </span>
                </div>
                <div className="col-span-3 whitespace-nowrap">
                    <span>
                        Телефон
                    </span>          
                </div>
                <div>
                    <span className="whitespace-nowrap">
                        Дата рождения
                    </span>          
                </div>
            </div>
        </div>
    )
}