import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';


function MainNavigation() {
   
    const favoritesCtx = useContext(FavoritesContext);

 return <header className={classes.header}>
    <div className={classes.logo}>Places Visited in Texas</div>
    <nav>
        <ul>
            <li> 
                <Link to='/'>All Visited Places</Link>
            </li>
            <li> 
                <Link to='/new-meetup'>New Places</Link>
            </li>
            <li> 
                <Link to='/favorites'>
                    My Favorites
                    <span className={classes.badge}>{favoritesCtx.totalFavotites}</span>
                    </Link>
            </li>
        </ul>
    </nav>
 </header>
}

export default MainNavigation;