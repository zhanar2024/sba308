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

//retrieving each hot coffee description

const description = document.getElementById("description");
data.forEach((each) => {
  output += `<li data-description="${each.description}">${each.title}</li>`;
});

result.innerHTML = output;

result.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    description.innerText = event.target.getAttribute("data-description");
  }
});
