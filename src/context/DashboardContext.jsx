import { useState,useContext,createContext } from "react";

const DashboardContext = createContext();// creates a shared strage

export function DashboardProvider({ children }) {
    const [search, setSearch] = useState("");
    const [year, setYear] = useState("2021-22");
    const [level, setLevel] = useState("primary");
    const [sortOrder, setSortOrder] = useState("none");
    const [region, setRegion] = useState('all');
    

    return (
        <DashboardContext.Provider      //store data into box
            value={{
                search,
                setSearch,
                year,
                setYear,
                level,
                setLevel,
                sortOrder,
                setSortOrder,
                region,
                setRegion
            }}
        >
            {children}
        </DashboardContext.Provider>
    );

}
export const useDashboard = () => useContext(DashboardContext); //read data from the box