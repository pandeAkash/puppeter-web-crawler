import puppeteer from 'puppeteer';
import cheerio from 'cheerio';

// @ts-ignore
import Tfidf from 'node-tfidf';
const tfidf = new Tfidf();

export async function crawlPage(url: string) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const html = await page.content();
  await browser.close();

  const $ = cheerio.load(html);
  const metadata: any = {};

  metadata.title = $('title').text();
  metadata.description = $('meta[name="description"]').attr('content') || '';
  metadata.body = $('body').text();

  tfidf.addDocument(metadata.body);
  console.log(Object.keys(tfidf));
  
  const terms = tfidf.documents;

  const sortedTerms = Object.entries(terms).sort((a: any, b: any) => b[1] - a[1]);
  const topics = sortedTerms.slice(0, 10).map((term) => term[0]);
  metadata.topics = topics;

  return metadata;
}
