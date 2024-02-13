import {Link} from 'react-router-dom';

function Routing(){
    return(<div>
        <ul className='d-flex'>
          <li className='ml-4'><Link to="/home">Home</Link></li>
          <li className='ml-5'><Link to={'/about'}>About</Link></li>
          <li className='ml-5'><Link to={'/login'}>Login</Link></li>
        </ul>
      </div>);
}

export default Routing;