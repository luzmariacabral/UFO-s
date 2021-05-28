// import the data from the data.js
const tableData = data;
// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Starting a new table "buildTable"
function buildTable(data) {
    // First, clear out existing data
    tbody.html("");

    // Next, loop through each object in the data
    // and append a row and cells for ea value in the row
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");

        // Loop(k) through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        }
    );
});
}