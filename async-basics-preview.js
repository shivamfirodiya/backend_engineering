// Async Basics Preview

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received from server");
    }, 2000);
  });
}

async function getData() {
  const data = await fetchData();
  console.log(data);
}

getData();
