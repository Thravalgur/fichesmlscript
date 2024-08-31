function sumAll() {
  // Get document body.
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  // Get the tables.
  var tables = body.getTables();

  // First column is “column[0]”. We aim the second column.
  var column_index = 1;

  // Initialize other variables.
  var table;
  var numRows;
  var val;
  var total = 0.0;

  // Starting from the first table (is “table[0]”), loop over all tables until the fifth.
  for(table = 0; table<5; table++) {
    // Find out how many rows are in each table.
    numRows = tables[table].getNumRows();
    // Get the value of each last cell.
    cell = tables[table].getCell(numRows-1, column_index).getText();
    // Replace commas
    if (cell[1] == ',') {
      val = cell.replace(',', '.');
    }
    else if (cell[2] == ',') {
      val = cell.replace(',', '.');
    }
    else {
      val = cell;
    }
    // If there is a value in the cell.
    if(val) {
      total += parseFloat(val);
    }
  }
  // display result
  var numRows2 = tables[5].getNumRows();
  tables[5].getCell(numRows2-1,column_index).setText(total.toString().replace('.', ','));
}
