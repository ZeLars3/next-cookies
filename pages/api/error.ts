import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
};

export default (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize('token', req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      expires: new Date(0),
      sameSite: 'strict',
      path: '/',
    })
  );

  res.statusCode = 200;
  res.json({
    success: true,
  });
};
