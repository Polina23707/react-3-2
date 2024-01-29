import ListingType from "../types/ListingType";

const ListingConst = function Listing (items: ListingType) {
  return(
    <div className="item">
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage.url}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{items.title}</p>
        <p className="item-price">{items.currency_code}{items.price}</p>
        <p className="item-quantity level-medium">{items.quantity} left</p>  
      </div>
    </div>
  )
}

export default ListingConst;