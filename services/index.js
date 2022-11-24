async function getTableData() {
  const URL = 'https://api.example.com/v1/tables';
  const options = {
    method: 'GET',
    DATA: {},
  }

  const response = await fetch(URL, options);
  const data = await response.json();

  return data;
}
