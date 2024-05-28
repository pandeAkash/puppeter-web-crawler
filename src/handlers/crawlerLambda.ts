import { APIGatewayProxyHandler } from 'aws-lambda';
import { crawlPage } from '../helpers/crawler';

export const crawlPageHandler: APIGatewayProxyHandler = async (event) => {
  const url = JSON.parse(event.body!).url;
  const metadata = await crawlPage(url);
  return {
    statusCode: 200,
    body: JSON.stringify(metadata),
  };
};