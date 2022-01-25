import { useState, useEffect } from 'react';
import { InputSearch } from './InputSearch.js';
import { ListItems } from './ListItems.js';
import { 
    WrapperBudget, 
    GroupBtnBudget, 
    BtnBudget } from './Style.js';


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
        <WrapperBudget>
            <GroupBtnBudget>
                <BtnBudget onClick={resetBudget}>Refresh</BtnBudget>
                <BtnBudget onClick={filterName}>Filter A-Z</BtnBudget>
                <BtnBudget onClick={filterDate}>Filter date</BtnBudget>
            </GroupBtnBudget>
            <InputSearch id='search' label={'Search budgetName'} name='search' value={search} onChange={setStateSearch}/>
            <ListItems budget={budget}/>
        </WrapperBudget>
    )
}
        
