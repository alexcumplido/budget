import { Link } from 'react-router-dom';
import { HomeStyled } from './Style.js';

export function Home() {
    return (
        <HomeStyled>
            <h2>Budget Application</h2>
            <ul>
                <li>
                    <Link to="../App"> Go to budget selector</Link>
                </li>
            </ul>
            <p>Actions performed by Budget Application</p>
            <ul>
                <li> Set up a customized budget </li>
                <li> Store automatically last preferences</li>
                <li> Save budgets and display them </li>
                <li> Sort budgets alphabetically A-z </li>
                <li> Sort budgets by Date </li>
                <li> Search and filter budgets by budget name</li>
                <li> Reset filters </li>
            </ul>
            <p>Any technical inquiry please contact <a href='https://github.com/alexcumplido/'>Alexandre Cumplido Bou</a></p>
        </HomeStyled>
    )
}