import { Link } from 'react-router-dom';
import { HomeStyled } from './Style.js';
import { ButtonHome } from './Style.js'

export function Home() {
    return (
        <HomeStyled>
            <h1>Budget Application</h1>
            <ul>
                <li> Customize services request </li>
                <li> Store last session preferences</li>
                <li> Save budgets and display them </li>
                <li> Sort budgets alphabetically A-z </li>
                <li> Sort budgets by Date </li>
                <li> Filter budgets by budget name</li>
                <li> Reset filters </li>
            </ul>
            <ButtonHome><Link to="../App"> Dashboard </Link></ButtonHome>
            <p>Maintaned by <a href='https://github.com/alexcumplido/'>Alexandre Cumplido Bou</a></p>
        </HomeStyled>
    )
}