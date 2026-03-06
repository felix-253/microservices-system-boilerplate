const axios = require("axios");

const URL = "http://localhost:5001/employee";

async function sendRequest(i) {
  const data = {
    event_time: new Date().toISOString(),
    event_type: "view",
    product_id: Math.floor(Math.random() * 1000),
    category_id: Math.floor(Math.random() * 100),
    category_code: "electronics.smartphone",
    brand: "samsung",
    price: (Math.random() * 1000).toFixed(2),
    user_id: Math.floor(Math.random() * 10000),
    user_session: "session_" + Math.random().toString(36).substring(2, 15),
  };

  try {
    const res = await axios.post(URL, data);
    console.log(`Request ${i} success`);
  } catch (err) {
    console.error(`Request ${i} error`, err.message);
  }
}

async function run() {
  const requests = [];

  for (let i = 1; i <= 100; i++) {
    requests.push(sendRequest(i));
  }

  await Promise.all(requests);
  console.log("Sent 100 requests");
}

run();
