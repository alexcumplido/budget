import { useState, useEffect } from 'react';
import { BudgetWrapper } from './Style';
import { ListItems } from './ListItems.js';
import { Input } from './Input.js';

export function BudgetList( { data } ) {
    
    let [budget, setBudget] = useState([]);
    let [search, setSearch] = useState('');

    const setStateSearch = (event) => setSearch(event.target.value);
    const setStateBudget = () => setBudget(data);

    const filterName = ()=> {
        let filterName = [...data].sort((a, b) => a.nameUser < b.nameUser ? -1 : 1);
        setBudget(filterName);
    }

    const filterDate = ()=> {
        let filterDate = [...data].sort((a, b) => a.date < b.date ? 1 : -1);
        setBudget(filterDate);
    }

    useEffect(()=>{
        let searchExist = [...data].find((element)=> element.nameUser === search);
        if(searchExist) {
            let filterSearch = [...data].filter((element)=> element.nameBudget === search);
            setBudget(filterSearch);
        } else {
            setStateBudget();
        }
    },[search])

    useEffect(()=>{
        if(localStorage.getItem(('budgetList'))) {
            setBudget(JSON.parse(localStorage.getItem(('budgetList'))));
        }
    }, []);

    useEffect(()=>{
        if(budget) {
            window.localStorage.setItem('budgetList', JSON.stringify(budget));
        }   
    });

    return (
        <BudgetWrapper>
            <button onClick={setStateBudget}>Display/Reset list</button>
            <button onClick={filterName}>Budget name A-z</button>
            <button onClick={filterDate}>Budget by Date</button>
            <Input id='search' name='search' value={search} onChange={setStateSearch}/>
            <ListItems budget={budget}/>
        </BudgetWrapper>
    )
}
        
