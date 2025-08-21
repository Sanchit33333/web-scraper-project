from rest_framework.decorators import api_view
from rest_framework.response import Response
import requests
from bs4 import BeautifulSoup

@api_view(['GET'])
def scrape_headlines(request):
    url = "https://news.ycombinator.com/"
    headers = {'User-Agent': 'Mozilla/5.0'}  # avoid simple blocks
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")
    
    headlines = []
    for item in soup.select(".titleline > a"):  # correct selector for current Hacker News
        headlines.append({
            "title": item.get_text(),
            "url": item.get("href")
        })
    
    return Response({"headlines": headlines})
