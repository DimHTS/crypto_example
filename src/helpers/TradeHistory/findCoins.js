export default function findCoins(currencies, seletedCurrencie) {
  const data = currencies.find(item => String(item.name) === String(seletedCurrencie))
  return data ? data.coins : []
}