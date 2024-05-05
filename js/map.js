const mapList = document.querySelector('#mapList');

const mapItems = mapList.querySelectorAll('li');

mapItems.forEach(mapItem => {
  mapItem.addEventListener('mouseover', () => {
    mapItem.classList.add('active');
    const mapItemId = mapItem.innerText.toLocaleLowerCase();
    const mapItemShape = document.querySelector(`#${mapItemId}`);
    mapItemShape.classList.add('map-active');
  });
  mapItem.addEventListener('mouseout', () => {
    mapItem.classList.remove('active');
    const mapItemId = mapItem.innerText.toLocaleLowerCase();
    const mapItemShape = document.querySelector(`#${mapItemId}`);
    mapItemShape.classList.remove('map-active');
  });
});

