import requests
import json
from dotenv import load_dotenv
import os
import datetime

# Load environment variables
load_dotenv(".env.local")
ACCESS_TOKEN = os.getenv("STRAPI_TOKEN_FULLACCESS")
STRAPI_URL = 'https://esbg.lunovid.com'

def parse_date(date_str):
    for fmt in ("%B %d, %Y", "%b %d, %Y"):  # Add more formats if needed
        try:
            return datetime.datetime.strptime(date_str, fmt)
        except ValueError:
            pass  # Try the next format
    raise ValueError(f"time data '{date_str}' does not match expected formats")

# Function to create a news entry
def create_news(news_info):
    url = f"{STRAPI_URL}/api/news"
    headers = {
        'Authorization': f'Bearer {ACCESS_TOKEN}',
        'Content-Type': 'application/json',
    }
    # Convert 'date' from the JSON to a datetime object, then to UNIX format
    date_obj = parse_date(news_info['date'])
    create_date = int(date_obj.timestamp())
    
    data = {
        'data': {
            'Title': news_info['title'],
            'Text': news_info['link'] if news_info['link'] else '',
            'Category': news_info['category'], 
            'PublishDate': date_obj.strftime('%Y-%m-%d'),
        }
    }
    response = requests.post(url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()

# Main script execution
if __name__ == '__main__':
    with open('./helpers/data/news.json', 'r') as file:
        news_items = json.load(file)

    for news_item in news_items:
        if 'ignore' in news_item and news_item['ignore']:
            continue  # Skip news items marked to be ignored
        news_info = create_news(news_item)
        print(news_info)
