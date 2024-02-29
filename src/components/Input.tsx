export const Input = ({setInputText} : {setInputText: Function}) => {
    return (
        <div className="large:px-[180px] px-[24px] small:mb-[28px] mb-[10px]">
            <input className="border-[0.5px] w-[100%] rounded-[5px]
            focus:outline-blue outline-[0.5px] large:placeholder:text-[20px] 
            large:p-[10px] large:text-[20px] small:placeholder:text-[16px]
            small:p-[5px] small:text-[16px] text-[12px] p-[10px]
            dark:bg-black dark:border-[0.5px] dark:border-[#B0B0B0]
            dark:outline-none"
            onChange={(event) => setInputText(event.target.value)}
            type="text" placeholder="Поиск" />
        </div>
    )
}