import superagent from 'superagent'

const API_ENDPOINT = 'http://acor.sl.pt:7777'

export const fetch = (path) => {
  return new Promise((resolve, reject) => {
    superagent(`${API_ENDPOINT}${path}`).end((err, res) => {
      if (!err && res.ok) {
        return resolve(res.body)
      }

      return reject(err)
    })
  })
}
