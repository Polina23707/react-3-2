import ListingConst from './components/Listing';
import data from './etsy.json';

function App() {
  return (
    <div className="item-list">
      {data.map((data) => 
        <ListingConst listing_id={data.listing_id} url={data.url} MainImage={{url: data?.MainImage?.url_570xN}} title={data.title} currency_code={data.currency_code} price={data.price} quantity={data.quantity} key={data.listing_id}/>
      )}
    </div>
  )
}

export default App;