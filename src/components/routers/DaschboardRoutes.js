import { Navbar } from "../ui/Navbar"
import { DcScreen } from "../dc/DcScreen";
import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { Route, Routes } from "react-router-dom";
import { HeroScreen } from "../hero/HeroScreen";

export const DaschboardRoutes = () => {
    return (
        <>
            <Navbar />  
            <Routes>
                <Route path="marvel" element={<MarvelScreen />} />
                <Route path="dc" element={<DcScreen />} />
                <Route path="hero/:heroId" element={<HeroScreen />} />
                <Route path="search" element={<SearchScreen />} />
            
                <Route path="/" element={<MarvelScreen />} />

            </Routes> 
        </>
    )
}
