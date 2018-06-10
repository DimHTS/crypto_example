export default function createUrlTradeHistory(currencie, coin) {
  const start = Number(new Date().getTime() / 1000 - (60 * 60 * 24));
  const end = Number(new Date().getTime() / 1000);
  const urlConfig = 'currencyPair=' + currencie + '_' + coin + '&start=' + start + '&end=' + end;
  return '/public?command=returnTradeHistory&' + urlConfig;
}
