import requests
import json
from dotenv import load_dotenv
import os

# Load environment variables
load_dotenv(".env.local")
ACCESS_TOKEN = os.getenv("STRAPI_TOKEN_FULLACCESS")
STRAPI_URL = 'https://esbg.lunovid.com'

# Function to create a publication entry
def create_publication(publication_info):
    url = f"{STRAPI_URL}/api/publications"  # Adjust if your endpoint is different
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
        'Content-Type': 'application/json',
    }

    # Construct the data dictionary based on the publication_info structure
    data = {
        'data': {
            'Title': publication_info['title'],
            'Authors': publication_info['authors'],
            'Journal': publication_info['journal'],
            'PubMedLink': publication_info['links'].get('PubMed', ''),  # Default to empty string if not present
            'DOI': publication_info['links'].get('DOI', ''),  # Default to empty string if not present
        }
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()  # Raises an exception for HTTP status codes 4xx or 5xx
    return response.json()

# Main script execution
if __name__ == '__main__':
    with open('./helpers/data/publications.json', 'r') as file:  # Adjust file name/path as needed
        publication_items = json.load(file)

    for publication_item in publication_items:
        # No 'ignore' check here, add if your JSON contains such a flag for some entries
        publication_info = create_publication(publication_item)
        print(publication_info)
