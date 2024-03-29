import requests
import json
from dotenv import load_dotenv
import os

load_dotenv(".env.local")
ACCESS_TOKEN = os.getenv("STRAPI_TOKEN_FULLACCESS")
STRAPI_URL = 'https://esbg.lunovid.com'

def upload_photo(file_path):
    url = f"{STRAPI_URL}/api/upload"
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
    }
    files = {
        'files': open('./helpers/data/' +file_path, 'rb'),
    }
    response = requests.post(url, headers=headers, files=files)
    response.raise_for_status()
    return response.json()

def create_person(person_info, photo):
    url = f"{STRAPI_URL}/api/people"
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
        'Content-Type': 'application/json',
    }
    data = {
        'data': {
            'Fullname': person_info['name'],
            'Title': person_info['role'],
            'Photo': photo,
            'Homepage': person_info['homepage'],
            'work_status': person_info['status']
        }
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()

if __name__ == '__main__':
    with open('./helpers/data/people.json', 'r') as file:
        people = json.load(file)

    for person in people:
        if 'ignore' in person and person['ignore']:
            continue
        image_path = person['image']  # Assuming this is a path relative to the script
        uploaded_photos = upload_photo(image_path)  # This should return a list of uploaded files
        person_info = create_person(person, uploaded_photos)
        print(person_info)

