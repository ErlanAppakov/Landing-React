import { Routes, Route } from "react-router-dom"
import {} from 'lucide-react'
import Nav from "./nav"
const Header =()=>{
    return(
        <header className="header">
            <div className="header-top">
                <Nav/>
            <div className="container">
                <Routes>
                    <Route path="/FreshnessGuarantee" element="#"/>
                    <Route path="/FreshnessGuarantee" element="#"/>
                    <Route path="/FreshnessGuarantee" element="#"/>
                    <Route path="/FreshnessGuarantee" element="#"/>
                
                </Routes>
                
            </div>
            </div>
            
        </header>  
        
    )
}
export default Header