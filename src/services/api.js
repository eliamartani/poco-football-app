import superagent from 'superagent';

export const API_ENDPOINT = 'https://football-server.eliamartani.now.sh/api';

export const fetch = path => {
  return new Promise((resolve, reject) => {
    superagent(`${API_ENDPOINT}${path}`).end((err, res) => {
      if (!err && res.ok) {
        return resolve(res.body);
      }

      return reject(err);
    });
  });
};
