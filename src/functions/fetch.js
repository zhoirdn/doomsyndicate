const base = 'https://api.jsonbin.io/v3/b/63f44d80ebd26539d082459b';
const url = `${base}?meta=false`;
const key = '$2b$10$qHQvJp.BPJYziAYOOYcPsO.aWAyN0Hw7dtbS6xMj.cOr5izNVS2iC';

// eslint-disable-next-line consistent-return
async function read() {
  try {
    const response = await fetch(url, {
      headers: {
        'X-Access-Key': key,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log('There was an error', error);
  }
}

// eslint-disable-next-line consistent-return
async function update(data) {
  try {
    const response = await fetch(base, {
      method: 'PUT',
      headers: {
        'X-Access-Key': key,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log('There was an error', error);
  }
}

export { read, update };
