import { UlStyled } from './Style.js' 
import { ListItem, HeadingListItem, BodyListItem, FooterListItem} from './Style.js' 

export function ListItems ({ budget }) {

    let listItems = budget.map((element, index) => {
        return (
            <ListItem key={index}>
                <HeadingListItem>
                    <p>Customer name: {element.nameUser}</p>
                    <p>Budget title: {element.nameBudget}</p>
                    <p>Date: {element.date.toString()}</p>
                </HeadingListItem>
                <BodyListItem>
                <ul>
                    <li>Web {element.web ? '500€': 'false'}, paginas: {element.paginas} idiomas: {element.idiomas} </li>
                    <li>Seo: {element.seo ? '300€': 'false'}</li> 
                    <li>GoogleAdds: {element.googleAdds ? '200€':'false'}</li>
                </ul>
                 </BodyListItem>
                <FooterListItem>    
                <p>Price: {element.total}€</p>
               </FooterListItem>
            </ListItem>
        );
    })
    return (
        <UlStyled>
            {listItems}
        </UlStyled>
    )
} 