# Puppeteer Web Crawler

This project is a Node.js application that uses Puppeteer to crawl web pages, extract metadata (title, description, body), and classify the content into relevant topics. It can be run locally and deployed to AWS Lambda.

## Features

- Crawl web pages and extract metadata using Puppeteer.
- Parse HTML content and extract title, description, and body using Cheerio.
- Classify page content and identify relevant topics using TF-IDF.

## Prerequisites

- Node.js and npm
- Docker (for local AWS Lambda testing)
- Serverless Framework (for deployment)

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/pandeakash/puppeteer-web-crawler.git
    cd puppeteer-web-crawler
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```
  
3. Running the project locally

    1. Transpile TypeScript to JavaScript
         ```bash
            yarn run build
         ```
    2. Build the nodejs server
         ```bash
            yarn run start.
         ```

5. Accessing / Testing API
   ```bash
    curl "http://localhost:8000/crawl-page?url=http://www.cnn.com/2013/06/10/politics/edward-snowden-profile/"
    ```

### Future scope
- Can add a feature to capture screenshots of the page and store them in cloud storage
- Can add a feature to extract all links on the page and add them in the database

