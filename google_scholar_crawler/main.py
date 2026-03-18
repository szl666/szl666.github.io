import json
import os
from datetime import datetime

from serpapi import GoogleSearch


def get_author_data(scholar_id, api_key):
    """Fetch author profile and citation stats from SerpAPI."""
    params = {
        "engine": "google_scholar_author",
        "author_id": scholar_id,
        "api_key": api_key,
    }
    search = GoogleSearch(params)
    results = search.get_dict()

    author = results.get("author", {})
    cited_by = results.get("cited_by", {})

    # Extract total citations and h-index
    table = cited_by.get("table", [])
    total_citations = 0
    h_index = 0
    i10_index = 0
    for row in table:
        if "citations" in row:
            total_citations = row["citations"].get("all", 0)
        if "h_index" in row:
            h_index = row["h_index"].get("all", 0)
        if "i10_index" in row:
            i10_index = row["i10_index"].get("all", 0)

    return {
        "name": author.get("name", ""),
        "affiliation": author.get("affiliations", ""),
        "citedby": total_citations,
        "hindex": h_index,
        "i10index": i10_index,
        "scholar_id": scholar_id,
        "updated": str(datetime.now()),
    }


def get_publications(scholar_id, api_key):
    """Fetch all publications with citation counts."""
    publications = {}
    start = 0

    while True:
        params = {
            "engine": "google_scholar_author",
            "author_id": scholar_id,
            "api_key": api_key,
            "start": start,
            "num": 100,
        }
        search = GoogleSearch(params)
        results = search.get_dict()

        articles = results.get("articles", [])
        if not articles:
            break

        for article in articles:
            pub_id = article.get("citation_id", "")
            publications[pub_id] = {
                "bib": {
                    "title": article.get("title", ""),
                    "citation": article.get("citation", ""),
                },
                "num_citations": article.get("cited_by", {}).get("value", 0),
                "author_pub_id": pub_id,
            }

        start += len(articles)
        # SerpAPI returns up to 100 per page
        if len(articles) < 100:
            break

    return publications


def create_fallback_data():
    """Use existing data if API call fails."""
    fallback_path = "results/gs_data.json"
    if os.path.exists(fallback_path):
        with open(fallback_path, "r", encoding="utf-8") as f:
            data = json.load(f)
            data["updated"] = str(datetime.now()) + " (fallback)"
            return data

    return {
        "name": "Zhilong Song",
        "affiliation": "The Hong Kong University of Science and Technology",
        "citedby": 959,
        "hindex": 12,
        "i10index": 12,
        "publications": {},
        "updated": str(datetime.now()) + " (fallback)",
        "scholar_id": "3MkXEhUAAAAJ",
    }


def main():
    scholar_id = os.environ.get("GOOGLE_SCHOLAR_ID", "3MkXEhUAAAAJ")
    api_key = os.environ.get("SERPAPI_KEY", "")

    if not api_key:
        print("SERPAPI_KEY not set, using fallback data")
        author = create_fallback_data()
    else:
        try:
            print("Fetching author data from SerpAPI...")
            author = get_author_data(scholar_id, api_key)

            print("Fetching publications...")
            author["publications"] = get_publications(scholar_id, api_key)

            print(f"Name: {author['name']}")
            print(f"Total citations: {author['citedby']}")
            print(f"h-index: {author['hindex']}")
            print(f"Publications: {len(author['publications'])}")
        except Exception as e:
            print(f"API call failed: {e}")
            author = create_fallback_data()

    os.makedirs("results", exist_ok=True)

    with open("results/gs_data.json", "w", encoding="utf-8") as f:
        json.dump(author, f, ensure_ascii=False, indent=2)

    shieldio_data = {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(author.get("citedby", 0)),
    }
    with open("results/gs_data_shieldsio.json", "w", encoding="utf-8") as f:
        json.dump(shieldio_data, f, ensure_ascii=False, indent=2)

    print("Data saved successfully!")


if __name__ == "__main__":
    main()
