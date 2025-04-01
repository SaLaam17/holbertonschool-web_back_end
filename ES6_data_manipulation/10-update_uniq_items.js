export default function updateUniqueItems(map) {
  console.log("updateUniqueItems() a été appelée !");
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (let [key, value] of map) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
