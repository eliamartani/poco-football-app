import superagent from 'superagent'

const API = 'http://acor.sl.pt:7777'

export const fetch = (path) => {
  return new Promise((resolve, reject) => {
    superagent(`${API}${path}`).end((err, res) => {
      if (res.ok) {
        return resolve(res.body)
      }

      return reject(err)
    })
  })
}
