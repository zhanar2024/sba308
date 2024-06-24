// SBA 308

//const result = document.getElementById("result");
//const title = document.getElementById("title");

//retrieving hot coffee types
showHotCoffee();
async function showHotCoffee() {
  const resp = await fetch(`https://api.sampleapis.com/coffee/hot`);
  const data = await resp.json();
  console.log(data);
}
