import {useState,useEffect} from 'react';
import './coctail.css';

let URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";



export const Drinks = ()=> {
    const [value,setvalue] = useState('');
    const [arr,setarr] = useState([]);
    const getting = async (urls)=>{
        try{

            let apiV = await fetch(urls);
            let {drinks} = await apiV.json();
            setarr(drinks);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        let finalUrl = `${URL}${value}`
        getting(finalUrl)
    },[value]);
    return (<>
        <div>
            <input type="text" value={value} onChange={(e)=> setvalue(e.target.value)} />
        <hr />
        <ul>
            {
                arr.length > 0 ?
                arr.map((item)=>{
                    const {idDrink,strDrink,strDrinkThumb} = item;
                    return <li key={idDrink}>
                        <img src={strDrinkThumb} alt={strDrink} />
                        <h4>{strDrink}</h4>
                    </li>
                }):<h1>No data found</h1>
            }
        </ul>
        </div>
        
    </>);
}