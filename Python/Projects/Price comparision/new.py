import requests
from bs4 import BeautifulSoup

def get_amazon_product_url(product_name):
    search_url = f"https://www.amazon.in/s?k={product_name.replace(' ', '+')}"
    headers = {"User-Agent": "Mozilla/5.0"}
    
    response = requests.get(search_url, headers=headers)
    soup = BeautifulSoup(response.text, "html.parser")

    # Find the first product link
    first_product = soup.find("a", {"class": "a-link-normal s-no-outline"})
    if first_product:
        return "https://www.amazon.in" + first_product['href']
    return None

print(get_amazon_product_url("iPhone 13"))
