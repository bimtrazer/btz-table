// Using async/await
async function getDataFromApi () {
  const URL = 'http://36.bimtrazer.com/'

  try {
    const response = await fetch(URL)
    return await response.json()
  } catch (error) {
    console.error(error)
    return {}
  }
}

// Using promises
function getDataFromApi () {
  const URL = 'http://36.bimtrazer.com/'

  return fetch(URL)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
      return RESPONSE_EXAMPLE
    })
}
