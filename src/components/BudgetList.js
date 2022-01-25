import { useState, useEffect } from 'react';
import { BudgetWrapper } from './Style.js';
import { ListItems } from './ListItems.js';
import { InputSearch } from './InputSearch.js';
import { NavButtons, BtnNav } from './Style.js';

export function BudgetList( { data } ) {
    
    let [budget, setBudget] = useState([]);
    let [search, setSearch] = useState('');

    const setStateSearch = (event) => setSearch(event.target.value);
    const resetBudget = () => setBudget(data);

    const filterName = ()=> {
        let filterName = [...data].sort((a, b) => a.nameUser < b.nameUser ? -1 : 1);
        setBudget(filterName);
    }

    const filterDate = ()=> {
        let filterDate = [...data].sort((a, b) => a.date < b.date ? 1 : -1);
        setBudget(filterDate);
    }

    useEffect(()=>{
        let searchExist = [...data].find((element)=> element.nameBudget === search);
        if(searchExist) {
            let filterSearch = [...data].filter((element)=> element.nameBudget === search);
            setBudget(filterSearch);
        } else {
            resetBudget();
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
            <NavButtons>
                <BtnNav onClick={resetBudget}>Refresh</BtnNav>
                <BtnNav onClick={filterName}>Filter A-Z</BtnNav>
                <BtnNav onClick={filterDate}>Filter date</BtnNav>
            </NavButtons>
            <InputSearch id='search' label={'Search budgetName'} name='search' value={search} onChange={setStateSearch}/>
            <ListItems budget={budget}/>
        </BudgetWrapper>
    )
}
        
