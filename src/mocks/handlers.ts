import { rest } from 'msw';

export const handlers = [
  rest.get('https://the-one-api.dev/v2/character', (req, res, ctx) => {
    req.url.searchParams.get('name=//i');
    return res(
      ctx.status(200),
      ctx.json({
        docs: [
          {
            birth: '1',
            death: '2',
            realm: '3',
            spouse: '4',
            race: '5',
            gender: '6',
            hair: '7',
            height: '8',
            wiki: '9',
            _id: '0',
          },
        ],
      })
    );
  }),
];
