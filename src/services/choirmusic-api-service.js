import config from '../config'

const ChoirMusicApiService = {
  getAllMusic() {
    return fetch(`${config.API_ENDPOINT}/music/`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getRecord(recordId) {
    return fetch(`${config.API_ENDPOINT}/music/${recordId}`, {
      headers: {
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  
  postRecord(recordId, text) {
    return fetch(`${config.API_ENDPOINT}/music/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        music_id: recordId,
        text,
      }),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ChoirMusicApiService