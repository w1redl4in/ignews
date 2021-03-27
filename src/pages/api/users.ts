import { NextApiRequest, NextApiResponse } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    {
      id: 1,
      nome: 'Felipe',
    },
    {
      id: 2,
      nome: 'Renata',
    },
    {
      id: 3,
      nome: 'Maria',
    },
    {
      id: 4,
      nome: 'Letícia',
    },
  ];

  return response.json(users);
};
