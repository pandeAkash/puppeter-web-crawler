import { crawlPage } from '../../src/helpers/crawler';
import { Request, Response } from 'express';

export const getContentOfUrl = async (req: Request, res: Response) => {
  if (!req.query.url) {
    console.log('req.query', req.query);
    throw new Error('Url is missing in query param');
  }
  const metadata = await crawlPage(String(req.query.url));
  res.json({
    data: metadata,
    message: 'Successfully reterived metadata for the provided url',
    statusCode: 200,
    status: 'success',
  });
};
