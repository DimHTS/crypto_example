export default function findCurrenciesAndCoins(tikers) {
  let currencies = [];
  let dataCurrencies = [];

  //find unique currencies
  for (let tiker in tikers) {
    currencies.push(tiker.split('_')[0]); // add all currencies from the tickers
  }
  currencies = [...new Set(currencies)]; // unique currencies
  //END find unique currencies


  //find all the coins for each currencie
  for (let i = 0; currencies.length > i; i++) {
    let coins = [];
    let k = 0;

    for (let tiker in tikers) {
      if (String(currencies[i]) === String(tiker.split('_')[0])) {
        const coin = tiker.split('_')[1];
        coins[k] = { name: coin }
        k++;
      }
    }

    dataCurrencies[i] = {
      name: currencies[i],
      coins
    }
  }
  //END find all the coins for each currencie

  return dataCurrencies;
}