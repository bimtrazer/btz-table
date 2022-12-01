function handleApiData(response) {
  if (!response) return null

  const { DATA: dataFromApi } = response;

  // Transform column keys from [labelKey-name: value] to [name: value]
  const transformedData = dataFromApi.map(item => {
    const { column: columnFromApi } = item;
    const column = Object.keys(columnFromApi).reduce((acc, key) => {
      const [_, name] = key.split("-");
      acc[name] = columnFromApi[key];
      return acc;
    }, {});
    return { ...item, column };
  });

  return transformedData.map((item) => {
    const { Item, column } = item;
    return {
      Item,
      ...column,
    };
  });
}

// Builds the HTML Table out of dataSet.
function buildHtmlTable(selector) {
  const projectId = '36dev'
  getDataFromApi(projectId).then((res) => {

    console.log('res', res)
    
    const dataSet = handleApiData(res);

    if (!dataSet) {
      // get body element and add a message
      const body = document.getElementsByTagName('body')[0];
      const message = document.createElement('p');
      message.innerHTML = 'No data found';
      body.appendChild(message);
      
      return
    }

    let columns = addAllColumnHeaders(dataSet, selector);
  
    for (let i = 0; i < dataSet.length; i++) {
      let row$ = $('<tr/>');
      for (let colIndex = 0; colIndex < columns.length; colIndex++) {
        let cellValue = dataSet[i][columns[colIndex]];
        if (cellValue == null) cellValue = "";
        let rtd = false
        if (cellValue <= 34){
          row$.append($('<td bgcolor = black style="color: #e5e5e5" ></td>').html(cellValue));
          dataSet[i][columns[colIndex]]
          rtd = true;
        }
        if (cellValue > 34 && cellValue <= 69 ){
          row$.append($('<td bgcolor = red />').html(cellValue));
          rtd = true;
        } 
        if (cellValue > 69 && cellValue <= 94 ){
          row$.append($('<td bgcolor = yellow />').html(cellValue));
          rtd = true;
        }
        if (cellValue > 94 && cellValue <= 100 ){
          row$.append($('<td bgcolor = green />').html(cellValue));
          rtd = true;
        }
        if (rtd == false){
          row$.append($('<td/>').html(cellValue));
        }
      }
      $(selector).append(row$);
    }
  });
}

function addAllColumnHeaders(dataSet, selector) {
  let columnSet = [];
  let headerTr$ = $('<tr/>');

  for (let i = 0; i < dataSet.length; i++) {
    let rowHash = dataSet[i];
    for (let key in rowHash) {
      if ($.inArray(key, columnSet) == -1) {
        columnSet.push(key);
        headerTr$.append($('<th/>').html(key));
      }
    }
  }
  $(selector).append(headerTr$);

  return columnSet;
}

function exportTableToExcel(tableID, filename = ''){
    let downloadLink;
    let dataType = 'application/vnd.ms-excel';
    let tableSelect = document.getElementById(tableID);
    let tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        let blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

function getDataFromApi(projId) {
  const URL = `http://${projId}.bimtrazer.com/api/PostDataProj`
  const options = {
    method: 'POST',
    body: JSON.stringify({
      ID: 'LabelReport',
      DATA: ''
    })
  }

  return fetch(URL, options)
    .then(response => response.json())
    .catch(error => {
      console.error(error)
    })
}
