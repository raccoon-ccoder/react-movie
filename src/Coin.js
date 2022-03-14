import { useState, useEffect } from "react";

// 페이지 로드시 로딩창 띄우다가 코인 정보 받아오면 로딩창 닫고 코인 정보 보여주기
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState(0);
  const onClick = (event) => setSelectedCoin(event.target.dataset.price);
  
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=30")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        console.log(json);
      });
  },[]);

  return (
    <div>
      <h1>The Coins</h1>
      {loading ? <strong>loading...</strong> : null}
      <strong>Selected Coin Price in BTC : {selectedCoin * 0.00002560}</strong>
      <form>
        {coins.map((coin, idx) => 
          <div key={coin.name}>
            <label key={coin.rank} htmlFor={idx}>
            <input type="radio" id={idx} name="coin" data-price={coin.quotes.USD.price} onClick={onClick}/> 
                {coin.name} ({coin.symbol}) : $ {coin.quotes.USD.price}
            </label>
          </div>
        )}
        </form>
    </div>
  );
}

// export default App;
