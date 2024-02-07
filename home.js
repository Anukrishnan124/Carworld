function addcar(){
  const car={
    carb:carbrand.value,
    pri:price.value,
    k:key.value,

  }
  if(car.k in localStorage){
    alert("Already added")
  }
else{
  localStorage.setItem(car.k,JSON.stringify(car))
  alert("car added successfully")
}  }


function search(){
  var key=searc.value
  console.log(key);
  if(key in localStorage){
    const found = JSON.parse(localStorage.getItem(key));
    result.innerHTML = `
      <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action"> Car brand: ${found.carb}</a>
        <a href="#" class="list-group-item list-group-item-action">Price: ${found.pri}</a>
        <a href="#" class="list-group-item list-group-item-action">Key: ${found.k}</a>
      </div>`;
  }
  else{
    alert("Not found")
  }
}

function removeCar() {
  const key = document.getElementById('removeKey').value;

  if (localStorage.getItem(key)) {
    localStorage.removeItem(key);
    alert("Car removed successfully");
  } else {
    alert("Car not found");
  }
}
function removeall() {
  localStorage.clear();
  alert("All records removed successfully");
}