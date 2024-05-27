const fs = require('fs');
const axios = require('axios');
const path = require('path');
require('dotenv').config({ path: '.env.local' });

const downloadImage = async (url, filepath) => {
  const response = await axios({
    url,
    responseType: 'stream',
    timeout: 10000, // Set a higher timeout value
  });
  return new Promise((resolve, reject) => {
    response.data.pipe(fs.createWriteStream(filepath))
      .on('finish', () => resolve())
      .on('error', (e) => reject(e));
  });
};

function getImageUrl(person) {
  if (person.attributes.Photo && person.attributes.Photo.data && person.attributes.Photo.data.attributes.url) {
    const filename = person.attributes.Photo.data.attributes.url.split('/').pop();

    return `${process.env.NEXT_PUBLIC_DEV_SERVER}/uploads/${filename}`;
  }
  return '/images/default-person.png';
}

const getPeopleData = async () => {
  const token = process.env.STRAPI_TOKEN_READONLY;
  const url = `${process.env.NEXT_PUBLIC_DEV_SERVER}/api/people?pagination[pageSize]=1000&populate=*`;
  try {
    const response = await axios({
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      timeout: 10000, // Set a higher timeout value
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

const saveImages = async () => {
  try {
    const peopleData = await getPeopleData();
    const imagesDir = path.resolve(__dirname, 'out/images');
    
    // Ensure the directory exists
    fs.mkdirSync(imagesDir, { recursive: true });

    for (const person of peopleData) {
      const imageUrl = getImageUrl(person);
      const filename = path.basename(imageUrl); //person.attributes.Photo.data.attributes.name;
      const filepath = path.resolve(imagesDir, filename);
      await downloadImage(imageUrl, filepath);
    }
  } catch (error) {
    console.error('Error saving images:', error);
  }
};

saveImages().catch(console.error);
