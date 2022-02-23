import { 
    UlBudget, 
    ListItem, 
    HeadingListItem, 
    UlBodyListItem, 
    FooterListItem } from './/Style.js'

export function ListItems ( { data }) {
    let listItems = data.map((element, index) => {
        return (
            <ListItem key={index}>
                <HeadingListItem>
                    <p>Customer name: {element.nameUser}</p>
                    <p>Budget title: {element.nameBudget}</p>
                    <p>Date: {element.date.toString()}</p>
                </HeadingListItem>
                <UlBodyListItem>
                    <li>Web {element.web ? '500€': '0€'}, num. pages: {element.paginas} num. languages: {element.idiomas}</li>
                    <li>Seo: {element.seo ? '300€': '0€'}</li> 
                    <li>GoogleAdds: {element.googleAdds ? '200€':'0€'}</li>
                </UlBodyListItem>
                <FooterListItem>    
                <p>Price: {element.total}€</p>
                </FooterListItem>
            </ListItem>
        );
    })
    return(
        <UlBudget>
            {listItems}
        </UlBudget>
    );
}