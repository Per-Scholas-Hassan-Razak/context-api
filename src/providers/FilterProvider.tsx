import { useState, type ReactNode } from "react";
import { FilterContext } from "../contexts/context";
import type { FilterType } from "../types";

const FilterProvider = ({children}:{children:ReactNode}) => {

    const [filter, setFilter] = useState<FilterType>("all")
    
return(
    <FilterContext.Provider value={{filter,setFilter}}>
        {children}
    </FilterContext.Provider>
)

}
export default FilterProvider