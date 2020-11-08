function sockMerchant(n, ar) {
  const socks = ar.sort((a, b) => a - b);
  const map = new Map();
  let value;
  let total;
  map.set('total', 0);
  for (let i = 0; i < n; i += 1) {
    if (!map.has(socks[i])) {
      map.set(socks[i], 1);
    } else {
      value = map.get(socks[i]) + 1;
      map.set(socks[i], value);
      if (value % 2 === 0) {
        total = map.get('total') + 1;
        map.set('total', total);
      }
    }
  }
  return map.get('total');
}
module.exports = sockMerchant;
