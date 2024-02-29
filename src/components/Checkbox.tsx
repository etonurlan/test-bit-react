export const Checkbox = (filterChecked: any) => {
    return (
        <div className="inline-flex items-center">
            <label className="relative flex items-center p-3
            rounded-full cursor-pointer"
            htmlFor="custom">
                <input checked={filterChecked.filterChecked} placeholder="checkbox" type="checkbox"
                className="peer relative appearance-none w-[19px] h-[19px]
                border rounded-sm border-blue
                cursor-pointer transition-all before:content['']
                before:block before:bg-blue-gray-500
                before:w-12 before:h-12 before:rounded-full
                before:absolute before:top-2/4 before:left-2/4
                before:-translate-y-2/4 before:-translate-x-2/4
                before:opacity-0 hover:before:opacity-10
                before:transition-opacity checked:bg-blue
                checked:border-blue checked:before:bg-blue"
                id="custom"/>
                <span className="absolute text-white transition-opacity
                opacity-0 pointer-events-none top-2/4 left-2/4
                -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg width="13" height="10" viewBox="0 0 13 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line y1="-0.5" x2="8.22439" y2="-0.5" transform="matrix(0.729537 0.683941 -0.595228 0.803557 0 4.375)" stroke="white"/>
                        <line y1="-0.5" x2="11.4018" y2="-0.5" transform="matrix(0.613941 -0.789352 0.712652 0.701517 6 10)" stroke="white"/>
                    </svg>
                </span>
            </label>
        </div>               
    )
}