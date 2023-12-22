const base = 'https://api.jsonbin.io/v3/b/65850f13dc74654018872304';
const url = `${base}?meta=false`;
const key = '$2b$10$MMadaqGDM0eZpKN6.h85Le5FfxDqfR/68F5UOq1IT.TLxyrWWsyTS';

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
