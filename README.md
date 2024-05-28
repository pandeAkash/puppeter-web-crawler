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
  
3. Running project locally

  1. Transpile TypeScript to JavaScript
    ```bash
    npx tsc
    ```

  2. Build the nodejs server
    ```bash
    yarn run start.
    ```

### Project Structure
  puppeteer-web-crawler/
  ├── src/
  │ ├── handler.ts # Lambda handler
  │ └── crawler.ts # Puppeteer web crawler
  ├── dist/ # Compiled JavaScript files
  ├── .serverless/ # Serverless packaged files
  ├── package.json
  ├── serverless.yml
  ├── tsconfig.json
  └── README.md