export function ListItems ({ budget }) {

    let listItems = budget.map((element, index) => {
        return (
            <li key={index}>
                <p>Customer name: {element.nameUser}</p>
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
    return (
        <ul>
            {listItems}
        </ul>
    )
} 