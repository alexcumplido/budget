import {  MainHome,  LinkHomeStyled } from './Style.js';


export function Home() {
    return (
        <MainHome>
            <h1>Budget Application</h1>
            <ul>
                <li>Customize services request</li>
                <li>Store last session preferences</li>
                <li>Save, display and filter budgets</li>
                <li>Sort alphabetically A-z</li>
                <li>Sort by closest Date</li>
                <li>Filter by budget name</li>
                <li>Reset filters</li>
            </ul>
           <LinkHomeStyled to="/app"> Dashboard </LinkHomeStyled>
            <p>Maintaned by <a href='https://github.com/alexcumplido/'>Alexandre Cumplido Bou</a></p>
        </MainHome>
    )
}