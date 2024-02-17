import ListingType from "../types/ListingType";

const ListingConst = function Listing (items: ListingType) {
  function title() {
    let title = items.title;
    if (!!title && title.length > 50) {
      return title.slice(0, 49) + '…';
    }
    return title;
  }

  function currency() {
    if (items.currency_code === 'USD') {
      return '$' + items.price;
    } else if (items.currency_code === 'EUR') {
      return '€' + items.price;
    } else {
      return items.price + ' ' + items.currency_code;
    }
  }

  function quantity() {
    if (!items.quantity) {
      return '0';
    }

    if (items.quantity <= 10) {
      return 'item-quantity level-low';
    } else if (items.quantity <= 20) {
      return 'item-quantity level-medium';
    } else {
      return 'item-quantity level-high';
    }
  }

  return(
    <div className="item">
      <div className="item-image">
        <a href={items.url}>
          <img src={items.MainImage.url}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{title()}</p>
        <p className="item-price">{currency()}</p>
        <p className={quantity()}>{items.quantity} left</p>  
      </div>
    </div>
  )
}

export default ListingConst;