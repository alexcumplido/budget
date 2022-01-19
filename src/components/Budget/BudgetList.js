import { useState } from 'react';
import { Dashboard } from '../Style';
import { ListItems } from './ListItems.js';

export function BudgetList( { data } ) {
    
    let [budget, setBudget] = useState(data);
    let [search, setSearch] = useState('');
    const setStateBudget = () => setBudget(data);
    const setStateSearch = (event) => setSearch(event.target.value);

    function filterName() {
        let filterName = [...budget];
        filterName.sort((a, b) => a.nameUser < b.nameUser ? -1 : 1);
        setBudget(filterName);
    }

    function filterDate() {
        let filterDate = [...budget];
        filterDate.sort((a, b) => a.date < b.date ? 1 : -1);
        setBudget(filterDate);
    }

    function filterSearch() {
        let clonedArray = [...budget];
        let filterSearch = clonedArray.filter((element)=> {
            return element.nameBudget === search;
        })
        console.log(filterSearch);
        if(filterSearch.length === 0) {
            setStateBudget();
        } else {
            setBudget(filterSearch);
        }
    }
 
    return (
        <Dashboard>
            <button onClick={setStateBudget}>Mostrat Budgets</button>
            <button onClick={filterName}>Budget name A-z</button>
            <button onClick={filterDate}>Budget by Date</button>
            <button onClick={setStateBudget}>Reset filter</button>
            <input  type='text' id='search' name='search' value={search} onChange={setStateSearch}/>
            <button onClick={filterSearch}>Budget by Search</button>
            <ListItems budget={budget}/>
        </Dashboard>
    )
}

        