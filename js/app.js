// import the data from data.js into app.js
const tableData=data;
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select('tbody');
 
function buildTable(data){
    tbody.html("");
    data.forEach((dataRow)=>{

        let row = tbody.append('tr')

        Object.values(dataRow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);} 
        );
    });
}