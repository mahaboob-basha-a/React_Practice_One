import {useState,useEffect} from 'react';
import './coctail.css';

let URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";



export const Drinks = ()=> {
    const [value,setvalue] = useState('');
    const [arr,setarr] = useState([]);
    const getting = async (url)=>{

        let apiV = await fetch(url+value);
        let {drinks} = await apiV.json();
        setarr(drinks);
    }

    useEffect(()=>{
        getting(URL)
    },[value]);
    return (<>
        <div>
            <input type="text" value={value} onChange={(e)=> setvalue(e.target.value)} />
        <hr />
        <ul>
            {
                arr.map((item)=>{
                    const {idDrink,strDrink,strDrinkThumb} = item;
                    return <li key={idDrink}>
                        <img src={strDrinkThumb} alt={strDrink} />
                        <h4>{strDrink}</h4>
                    </li>
                })
            }
        </ul>
        </div>
        
    </>);
}