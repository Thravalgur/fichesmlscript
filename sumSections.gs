function sumSections() {
  // Get document body.
  var doc = DocumentApp.getActiveDocument();
  var body = doc.getBody();
  // Get the tables.
  var tables = body.getTables();
  // First column is “column[0]”. We aim the second column.
  var column_index = 1;    
  // First row is “row[0]”. Starting row offset for skipping a header.
  var row_start_offset = 1;

  // Starting from the firt table (is “table[0]”), loop over all tables until the fifth.
  for(table_index = 0; table_index<5; table_index++) {
    // Find out how many rows are in the table.
    var numRows = tables[table_index].getNumRows();
    // Initialize other variables.
    var row;
    var cell;
    var val;
    var section = 0.0;
    // Starting from the row offset, loop over all rows until the last.
    for(row = row_start_offset; row<numRows-1; row++) {
      // Get the value of the cell.
      cell = tables[table_index].getCell(row, column_index).getText();
      // Skip the "+" if present.
      if (cell[0] == '+') {
        val = cell.slice(1);
      }
      // Replace commas
      if (cell[1] == ',') {
        val = cell.replace(',', '.');
      }
      else {
        val = cell;
      }
      // Make sum if there is a value in the cell.
      if(val) {
        section += parseFloat(val);
      }
    }
    // display result
    tables[table_index].getCell(numRows-1,column_index).setText(section.toString());
  }
}
