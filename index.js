    function loadGrades() {
      var fileInput = document.getElementById("fileInput");
     let tablicka =document.getElementById("tablica");
     var file = fileInput.files[0];
        if (file) {
        var reader = new FileReader();
        reader.onload = function(e) {
        var contents = e.target.result;
        displayDownloadedData(contents);
    };
reader.readAsText(file);
}
    }
        function hidetable(){
        document.getElementById('tablica').style.display = 'none';
        }
        
        function showtable(){
        document.getElementById('tablica').style.display = 'block';
        }
        function displayDownloadedData(data) {
         var table = document.getElementById("tablica");
        table.innerHTML = "";
        var rows = data.split("\n");
        for (var i = 0; i < rows.length-1; i++) {
        var rowData = rows[i].split(";");
        var row = table.insertRow(-1);
        for (var j = 0; j < rowData.length; j++) {
        var cell = row.insertCell(-1);
        cell.innerHTML = rowData[j];
        }
        }
        }
        var str = ["fio","klas","oc1","oc2","oc3","oc4","oc5"];
       function dobavstroki() {
      var table = document.getElementById("tablica");
     var row = table.insertRow();
      for (var i=0; i<table.rows[0].cells.length; i++){
        var cell=row.insertCell();
        var inp = document.getElementById(str[i]);
        cell.textContent=inp.value;
      }
    }
    function ochistkapolya() {
      for (var i=0; i<7; i++){
        var inp = document.getElementById(str[i]);
        inp.value="";
      }
    }
    function ydalenie() {
    var table = document.getElementById("tablica");
    var inp = document.getElementById(str[0]);
    for (var i=1; i<table.rows.length; i++){
      if (inp.value===table.rows[i].cells[0].textContent)
    {
      table.deleteRow(i);
      break;
    }
    } 
  } 
  function redaktirovanie() {
    var table = document.getElementById("tablica");
    var inp = document.getElementById(str[0]);
    for (var i=1; i<table.rows.length; i++){
      if (inp.value===table.rows[i].cells[0].textContent)
    {
      for (var j=0; j<7; j++)
      {
    var inp2 = document.getElementById(str[j]);
        inp2.value=table.rows[i].cells[j].textContent;
      }
      break;
    }
    } 
  } 
  function redaktirovanie2() {
    var table = document.getElementById("tablica");
    var inp = document.getElementById(str[0]);
    for (var i=1; i<table.rows.length; i++){
      if (inp.value===table.rows[i].cells[0].textContent)
    {
      for (var j=0; j<7; j++)
      {
    var inp2 = document.getElementById(str[j]);
        table.rows[i].cells[j].textContent=inp2.value;
      }
      break;
    }
    } 
  } 
  function getMedianst(v) {
    var table = document.getElementById("tablica");
    var rows = table.getElementsByTagName("tr");
    var t = document.getElementById("deti").value;
    var numbers = [];
   
    for (var i = 1; i < rows.length; i++) {
       var cell = rows[i].getElementsByTagName('td')[v];
       if (cell) {
        if ((table.rows[i].cells[1].textContent == t)||(t=="")){
         numbers.push(parseInt(cell.innerHTML));
       }
    }
  }
    numbers.sort(function(a, b) {
       return a - b;
    });
   
    var medianIndex = Math.floor(numbers.length / 2);
   
    if (numbers.length % 2 === 0) {
       return (numbers[medianIndex - 1] + numbers[medianIndex]) / 2;
    } else {
       return numbers[medianIndex];
    }
   }
   
   function med1(){
    var table = document.getElementById('tablica');
    var stat = document.getElementById('stat3');
   
    for (var i = 1; i < stat.rows[0].cells.length; i++) {
       var median = getMedianst(i+1);
       stat.rows[2].cells[i].textContent = median.toFixed(2).toString();
    }
  }
  function average(k) {
    var table = document.getElementById("tablica");
    var sum = 0;
    var count = 0;
    var t = document.getElementById("deti").value;
   
    for (var i = 1; i < table.rows.length; i++) {
       var row = table.rows[i];
       var cell = row.cells[k]; 
  
   
       // проверка на пустоту ячейки и наличие в ней числа
       if ((cell && !isNaN(parseInt(cell.innerText)))) { 
        if ((table.rows[i].cells[1].textContent == t)||(t=="")){
         sum += parseInt(table.rows[i].cells[k].innerText);
         count++;
       }
    }
  }
    var average = sum / count;
    return average;
   }
  
   function sred(N){
    var table = document.getElementById('tablica');
    var stat = document.getElementById('stat3');
    for (var i = 1; i < stat.rows[0].cells.length; i++) {
      stat.rows[1].cells[i].textContent = average(i+1).toFixed(2).toString();
    }
  }
  function countObjects2(searchValue, nomer) {
    let table = document.getElementById("tablica");
    let rows = table.getElementsByTagName('tr');
    var t = document.getElementById("deti").value;
    let count = 0;
    let c=0;
    for (let i = 1; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName('td');
            if (cells[nomer].innerHTML == searchValue) {
              if ((table.rows[i].cells[1].textContent == t)||(t=="")){
                count++;
            }}
        if (count > 0){
          c++;
          count=0;
        }
    }
    return c;
  }
  
  function deticlassa(){
    let table = document.getElementById("tablica");
    var t = document.getElementById("deti").value;
    var count = 0;
    for (var i = 1; i < table.rows.length; i++){
      if ((table.rows[i].cells[1].textContent == t)||(t=="")){
        count++;
    }
  }
  return count;
  }
  
   function kolvo2(){
    var t = document.getElementById("deti").value;
    let table = document.getElementById("stat4");
    let table2 = document.getElementById("tablica");
    var rows = table.getElementsByTagName("tr");
    
    for (let i = 1; i < rows.length; i++) {
    for (var j = 1; j < table.rows[0].cells.length; j++) {
       rows[i].cells[j].textContent = countObjects2(6-i,j+1).toString()+"шт"+"-"+(((countObjects2(6-i,j+1)))/(deticlassa())*100).toFixed(2).toString()+"%";
    }
   }
  }
  function vibortablica(){
    for (var i = 0; i < 4; i++){
      var t = document.getElementById("diagramma").getElementsByTagName("input")[i];
      var checkedValue = t.checked ? t.value : '';
  if((checkedValue == "dsred")) {
    return "stat3";
  }
  if (checkedValue == "dmed")
    return "stat3";
    if (checkedValue == "dkolvo")
    return "stat4";
    if (checkedValue == "dprocent")
    return "stat4";
  }
  }
  
  function viborstroka(){
    for (var i = 0; i < 4; i++){
      var t = document.getElementById("diagramma").getElementsByTagName("input")[i];
      var checkedValue = t.checked ? t.value : '';
  if(checkedValue == "dsred") {
    return 1;
  }
    if (checkedValue == "dmed") 
    return 2;
    if (checkedValue == "dkolvo")
    return 3;
    if (checkedValue == "dprocent")
    return 4;
  }
  }
  
  function getTextFromCell(cell, startPosition) {
    var cellText = cell.textContent || cell.innerText;
    return cellText.substring(startPosition);
  }
  
  function drawChart() {
    var cvet = ['#583075','#ff0000','#00ff00','#764097','#583075'];
    var options = {
       backgroundColor: '#a0a1a6', 
       width: 1000, // минимальная ширина графика
       height: 1000,
       legend: { position: 'top' },
       colors: ['#583075','#ff0000','#00ff00','#764097','#583075'],
       series:{
         0: {targetAxisIndex: 0},
          1: {targetAxisIndex: 1},
          2: {targetAxisIndex: 2},
          3: {targetAxisIndex: 3},
          4: {targetAxisIndex: 4},
       }
    };
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Ученик');
      data.addColumn('number', '');
   
      var table = document.getElementById(vibortablica());
      var numRows = table.rows.length;
      var i = viborstroka();
      if (vibortablica()== "stat3"){
       for (var j = 1; j < table.rows[0].cells.length; j++){
        var category = table.rows[0].cells[j].innerText;
        var value = parseFloat(table.rows[i].cells[j].innerText);
        data.addRow([category, value]);
       }
        
    }
    else{
       for (var l = 1; l < table.rows.length; l++){
         for (var j = 1; j < table.rows[0].cells.length; j++){
           var category = table.rows[0].cells[j].innerText+" "+(6-l);
           if (i == 3){
           var value = parseFloat(table.rows[l].cells[j].innerText);
           }
           if (i == 4)
           var value = parseFloat(table.rows[l].cells[j].innerText.substring(table.rows[l].cells[j].innerText.indexOf("-",3)+1));
           data.addRow([category, value]);
       }
    }
    }
      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));
      chart.draw(data,options);
   }
   function svazat(){
    let table = document.getElementById("deti");
    let table2 = document.getElementById("deti2");
      table.value = table2.value;
      kolvo2(); sred(2); med1();
   }