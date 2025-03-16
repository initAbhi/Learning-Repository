from serpapi import GoogleSearch

def get_product_links(product_name):
    params = {
        "q": f"{product_name} site:amazon.in OR site:flipkart.com",
        "hl": "en",
        "gl": "in",
        "api_key": "cca5af1993a71237ef7513d6132ba8d44e2a7982af08966f8adfb6252964e4ba"  # Replace with your SerpAPI key
    }

    search = GoogleSearch(params)
    results = search.get_dict()
    product_links = []

    if "organic_results" in results:
        for result in results["organic_results"]:
            link = result.get("link")
            if "amazon.in" in link or "flipkart.com" in link:
                product_links.append(link)

    return product_links

# Example usage
product_name = "iPhone 13"
links = get_product_links(product_name)
print("Product Links Found:", links)
