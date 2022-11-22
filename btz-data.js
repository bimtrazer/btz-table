let dataSet = [
    { "Item": "Trabajos preliminares", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":12, "N10":80, "N11":100, "N12":100, "AZ":8},
    { "Item": "Movimiento de suelo", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":43, "N11":100, "N12":100, "AZ":23},
    { "Item": "Fundaciones", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":78, "N11":100, "N12":100, "AZ":100},
    { "Item": "Estructura de hormigón armado", "SS":100, "PB":100, "N1":100, "N2":100, "N3":100, "N4":100, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":12, "N11":100, "N12":100, "AZ":100},
    { "Item": "Mamposterias", "SS":100, "PB":100, "N1":10, "N2":100, "N3":100, "N4":40, "N5":100, "N6":100, "N7":100, "N8":100, "N9":100, "N10":100, "N11":100, "N12":12, "AZ":100},
  ];

// Builds the HTML Table out of dataSet.
function buildHtmlTable(selector) {
  

  let columns = addAllColumnHeaders(dataSet, selector);
  for (let i = 0; i < dataSet.length; i++) {
    let row$ = $('<tr/>');
    for (let colIndex = 0; colIndex < columns.length; colIndex++) {
      let cellValue = dataSet[i][columns[colIndex]];
      if (cellValue == null) cellValue = "";
      let rtd = false
      if (cellValue <= 34){
        //row$.append($('<td bgcolor = black /><font color = white/>').html(cellValue));
        row$.append($('<td bgcolor = black ></td>').html(cellValue));
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

      if (rtd==false){
        row$.append($('<td/>').html(cellValue));
      }
    }
    $(selector).append(row$);
  }
    
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