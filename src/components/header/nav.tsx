import { Link } from "react-router-dom";
import '../header/header.scss'
import { useState, type ChangeEvent } from "react";
import PlaceIcon from '../../images/place.svg'
import PhoneIcon from '../../images/phone.svg'
import BagIcon from'../../images/bag.svg'
import TgIcon from '../../images/tg.svg'
import VkIcon from '../../images/vk.svg'
import OkIcon from '../../images/ok.svg'
interface City{
    id: string;
    name: string;
  
}
const CITIES : readonly City[] =[
    { id: 'msk', name: 'Москва' },
    { id: 'spb', name: 'Санкт-Петербург' },
    { id: 'ekb', name: 'Екатеринбург' },
    { id: 'kzn', name: 'Казань' },
  ]as const;


const Nav=()=>{
    const [selectedCity, setSelectedCity]=useState<string>("spb")
    const handleSelectedCity=(e:ChangeEvent<HTMLSelectElement>):void=>{
        setSelectedCity(e.target.value)
    }
    
    const phoneUrl = `tel:+996`;
    const numberPhone= "709306286";
    return(
        <nav className="nav">
            <div className="container">
                <div className="nav-inner">
                <div className="nav-left">

                <Link className="nav-link" to="/FreshnessGuarantee">Гарантия свежести</Link>
                <Link className="nav-link" to="/FreshnessGuarantee">Доставка и оплата</Link>
                <Link className="nav-link" to="/FreshnessGuarantee">Оптовые поставки</Link>
                <Link className="nav-link" to="/FreshnessGuarantee">Контакты</Link>
                
                </div>
                <div className="nav-right">
                    <div className="nav-place">
                    <label htmlFor="city-select">
                    <img src={PlaceIcon} alt="Location" className="nav-place-icon" />
                    </label>
                    <select id="city-select" value={selectedCity} onChange={handleSelectedCity} className="nav-place-select">
                        {CITIES.map((city)=>(
                            <option key={city.id} value={city.id}>
                                {city.name}
                            </option>
                        ))}
                    </select>
                    </div>
                    <div className="nav-phone">
                        <img src={PhoneIcon} alt="PhoneIcon" />
                        <a href={phoneUrl}>{numberPhone}</a>
                    </div>
                    <div className="nav-bag">
                        <a href="#"><img src={BagIcon} alt={BagIcon} />В корзине (пусто)</a>

                    </div>
                    <div className="nav-social">
                        <a href="#"><img src={TgIcon} alt={TgIcon} /></a>
                        <a href="#"><img src={VkIcon} alt={VkIcon} /></a>
                        <a href="#"><img src={OkIcon} alt={OkIcon} /></a>
                    </div>
                </div>
                </div>
            </div>
        </nav>
    )
}
export default Nav