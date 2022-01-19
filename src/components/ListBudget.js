import { Dashboard } from './Style';
import { useState } from 'react';

export function BudgetList ( { data } ) {
    
    const [budget, setBudget] = useState([]);
    let [searchName, setSearchName] = useState('');
        
    function handleSearchName(event) {
        setSearchName(event.target.value);
    }
    
    function showBudgets () {
        setBudget(data);
    }

    function filterByName () {
        let filterByName = [...budget];
        filterByName.sort((a, b) => a.nameCustomer < b.nameCustomer ? -1 : 1);
        setBudget(filterByName);
    }

    function filterByDate () {
        let filterByDate = [...budget];
        filterByDate.sort((a, b) => a.date < b.date ? 1 : -1);
        setBudget(filterByDate);
    }

    function filterbySearchName(){
        let filterbySearchName = [...budget];
        let filteredSearch = filterbySearchName.filter((element)=> {
            return element.nameBudget === searchName;
        })
        setBudget(filteredSearch);
    }

    let listItems;

    if(budget) {
        listItems = budget.map((element, index)=>{
            return (
                <li key={index}>
                    <p>Customer name: {element.nameCustomer}</p>
                    <p>Budget title: {element.nameBudget}</p>
                    <p>Date: {element.date.toString()}</p>
                    <ul>
                        <li>Web {element.web ? '500€': 'false'}, paginas: {element.paginas} idiomas: {element.idiomas} </li>
                        <li>Seo: {element.seo ? '300€': 'false'}</li> 
                        <li>GoogleAdds: {element.googleAdds ? '200€':'false'}</li>
                    </ul>
                    <p>Total price : {element.total}</p>
                    <hr/>
                </li>
            );
    })
    }
 
 
 
    return (
        <Dashboard>
            <button onClick={showBudgets}>Mostrat Budgets</button>
            <button onClick={filterByName}>Budget name A-z</button>
            <button onClick={filterByDate}>Budget by Date</button>
            <button>Save filter</button>
            <button onClick={showBudgets}>Reset filter</button>
            <input  type='text' id='searchName' name='searchName' value={searchName}  onChange={handleSearchName}/>
            <button onClick={filterbySearchName}>Budget by Search</button>
            <ul>{listItems}</ul>
        </Dashboard>
    )
}