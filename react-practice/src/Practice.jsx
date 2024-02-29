import {Link} from 'react-router-dom';
import App from './App';
import {Drinks} from './Drinks';

export const Practice = ()=>{
    return (<div>
        <ul className='d-flex justify-content-center text-bold'>
            <li><Link to="/test" >Practice</Link></li>
        </ul>
        <App/>
    </div>);
}

export const Test = ()=>{
    return (<>
     <div className='d-flex justify-content-center'>
        <Link to='/'>Go Back</Link>
        </div>
    <Drinks/>
    </>);
   
}