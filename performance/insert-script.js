const URL = 'http://localhost:5001/employee';

function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateData() {
  const brands = ['samsung', 'oppo', 'vivo', 'realme', 'huawei'];
  const categories = [
    'electronics.smartphone',
    'electronics.tablet',
    'electronics.audio',
    'electronics.camera',
  ];
  const events = ['view', 'cart', 'purchase'];

  return {
    event_time: new Date().toISOString(),
    event_type: randomChoice(events),
    product_id: Math.floor(Math.random() * 9000000) + 1000000,
    category_id: Math.floor(Math.random() * 9000000000000000000n),
    category_code: randomChoice(categories),
    brand: randomChoice(brands),
    price: (Math.random() * 900 + 100).toFixed(2),
    user_id: Math.floor(Math.random() * 900000000) + 100000000,
    user_session: crypto.randomUUID(),
  };
}

async function sendRequest(i) {
  const data = generateData();

  try {
    const res = await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    console.log(`Request ${i} status:`, res.status);
  } catch (err) {
    console.error(`Request ${i} error:`, err.message);
  }
}

async function run() {
  const tasks = [];

  for (let i = 1; i <= 100; i++) {
    tasks.push(sendRequest(i));
  }

  await Promise.all(tasks);
  console.log('Finished sending 100 requests');
}

run();
