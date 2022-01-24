import { useState, useEffect, useRef } from 'react';
import { Dashboard } from './Style.js';
import { ListItems } from './ListItems.js';
import { Input } from './Input.js';

export function BudgetList( { data } ) {
    
    let  refData = useRef(data);
    let [budget, setBudget] = useState([]);
    let [search, setSearch] = useState('');

    const setStateBudget = () => {
        setBudget(data);
        handleRef();
    }

    const setStateSearch = (event) => setSearch(event.target.value);

    function handleRef () {
        refData.current = data;
    }

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
        let searchExist = refData.current.find((element)=> element.nameUser === search);

        if(searchExist) {
            let filterSearch = [...refData.current].filter((element)=> element.nameBudget === search);
            setBudget(filterSearch);
        } else {
            setStateBudget();
        }
    }

    useEffect(()=>{
        if(localStorage.getItem(('budget'))) {
            let budgetStorage = JSON.parse(localStorage.getItem(('budget')));
            setBudget(budgetStorage);
        }
    }, []);

    useEffect(()=>{
        if(budget) {
            window.localStorage.setItem('budget', JSON.stringify(budget));
        } 
    });

    return (
        <Dashboard>
            <button onClick={setStateBudget}>Mostrat Budgets</button>
            <button onClick={filterName}>Budget name A-z</button>
            <button onClick={filterDate}>Budget by Date</button>
            <button onClick={setStateBudget}>Reset filter</button>
            <Input id='search' name='search' value={search} onChange={setStateSearch}/>
            <button onClick={filterSearch}>Budget by Search</button>
            <ListItems budget={budget}/>
        </Dashboard>
    )
}

        
