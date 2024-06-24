// SBA 308

//retrieving hot coffee types
showHotCoffee();
async function showHotCoffee() {
  const resp = await fetch(`https://api.sampleapis.com/coffee/hot`);
  const data = await resp.json();
  console.log(data);
  let output = ``;
  result.innerHtml = "";
  title.innerText = "";
  data.forEach((each) => {
    output += `<li>${each.title}</li>`;
  });
  title.innerText = "HOT coffee selection";
  result.innerHTML = output;
}

//retrieving iced coffee types

showIcedCoffee();
async function showIcedCoffee() {
  const resp = await fetch(`https://api.sampleapis.com/coffee/iced`);
  const data = await resp.json();
  console.log(data);
  let output = ``;
  result.innerHtml = "";
  title.innerText = "";
  data.forEach((each) => {
    output += `<li>${each.title}</li>`;
  });
  title.innerText = "ICED coffee selection";
  result.innerHTML = output;
}
