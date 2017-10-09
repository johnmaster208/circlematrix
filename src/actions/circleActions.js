export function selectCircle(obj, items) {
  const updatedCircle = {
    id: obj.id,
    fillColor: { color: '#214699'},
    wasSelectedByMe: true,
    wasSelectedByOther: false
  }
  let findCircleObj = items.find(obj => obj.id == updatedCircle.id);
  items.splice(findCircleObj.id, 1, updatedCircle)
}

export function unSelectCircle(obj, items) {
  const updatedCircle = {
    id: obj.id,
    fillColor: { color: '#ddd'},
    wasSelectedByMe: false,
    wasSelectedByOther: false
  }
  let findCircleObj = items.find(obj => obj.id == updatedCircle.id);
  items.splice(findCircleObj.id, 1, updatedCircle)
}
