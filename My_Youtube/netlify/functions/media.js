// netlify/functions/media.js
import fs from 'fs';
import path from 'path';

export async function handler() {
  try {
    const mediaDir = path.join(process.cwd(), 'media');
    const files = fs.readdirSync(mediaDir);

    const list = files.map(file => ({
      name: file,
      url: `/media/${file}`,
      thumb: `/thumb/${file}.jpg`
    }));

    return {
      statusCode: 200,
      body: JSON.stringify(list),
      headers: {
        "Content-Type": "application/json"
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
