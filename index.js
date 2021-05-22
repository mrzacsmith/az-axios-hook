const { useState, useEffect } = 'react'
const axios = require('axios')

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

const useAxios = ({ method, url, headers = null, body = null }) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchApi = () => {
    axios`.${method}(${url}, JSON.parse(${headers}), JSON.parse(${body}))`
      .then((res) => setResponse(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchApi()
  }, [method, url, body, headers])

  return { response, error, loading }
}

exports.useAxiosAsync = ({ method, url, headers = null, body = null }) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchApi = async () => {
    try {
      const res = await axios`.${method}(${url}, JSON.parse(${headers}), JSON.parse(${body}))`
      setResponse(res.data)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchApi()
  }, [method, url, body, headers])

  return { response, error, loading }
}

useAxios('get', 'https://jsonplaceholder.typicode.com/posts')
