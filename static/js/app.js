// import the data from data.js into app.js
const tableData=data;
// Declare a variable, tbody
// Use d3.select to tell JavaScript to look for the <tbody> tags in the HTML
var tbody = d3.select('tbody');
 
// function buildTable(data){
//     tbody.html("");
//     data.forEach((dataRow)=>{
// // create rows for the table
//         let row = tbody.append('tr')
// // seperate the rows into cells by iterating through each of them with a for each arrow function
//         Object.values(dataRow).forEach((val)=>{
//             // pair the forEach value with the object.values() to specify that each value within the objects with go through the function
//             let cell = row.append("td");
//             // add "td " to each value in each row to specify that that is a new column
//             cell.text(val);} 
//             // extract the ext from each cell 
//         );}
//     ); 
// }



function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

    
// function handleClick(){
//     // create a function to filter through the data
//     let date = d3.select("#datetime").property('value');
//     // declare the desired data by using the d3.select methond
//     // and pair it with the property.('value') to bring back the values and assign it to date
//     let filteredData = tableData;
//     // declare the filtered data by intitializing it as the orginal data pulled in from data.js
//     // This is the original data as imported from our data.js file. By setting the filteredData variable to our raw data, we're basically using it as a blank slate. The function we're working on right now will be run each time the filter button is clicked on the website. If no date has been entered as a filter, then all of the data will be returned instead.
//     if (date){
//         filteredData = filteredData.filter(row=> row.datetime === date);
//         // using an if statement to determine if the datetime is found within the rows
//         // if found, based on the same data type, shown by the three equal signs, then 
//         // that data is sorted using the .filter function into the new, corrected filteredData 

//     };

//     buildTable(filteredData);


// }
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
  
     // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
      // Apply `filter` to the table data to only keep the
      // rows where the `datetime` value matches the filter value
      filteredData = filteredData.filter(row => row.datetime === date);
    };
  
     // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
  };

        // d3. listens for an event to trigger handle click 
        // d3 select all connects to the html page, looks for the filter button and when the button is clicked 
        // 
        d3.selectAll("filter-btn").on("click", handleClick);

        buildTable(tableData);
