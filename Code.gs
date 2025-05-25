// Code for the server-side logic
function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Wallet Checker')
    .setFaviconUrl('https://ssl.gstatic.com/docs/script/images/favicon.ico');
}

// Function to include HTML files
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

// Function to search for a wallet address in the spreadsheet
function searchWallet(walletAddress) {
  // Get all sheets in the spreadsheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();
  
  // Normalize the wallet address (convert to lowercase)
  walletAddress = walletAddress.toLowerCase().trim();
  
  // Log the search query for debugging
  console.log("Searching for wallet address: " + walletAddress);
  console.log("Searching across " + sheets.length + " sheets");
  
  // Search through all sheets
  for (var i = 0; i < sheets.length; i++) {
    var sheet = sheets[i];
    var sheetName = sheet.getName();
    console.log("Searching sheet: " + sheetName);
    
    var data = sheet.getDataRange().getValues();
    console.log("Sheet contains " + data.length + " rows");
    
    // Search through all rows and columns
    for (var row = 0; row < data.length; row++) {
      for (var col = 0; col < data[row].length; col++) {
        var cellValue = String(data[row][col]).toLowerCase().trim();
        if (cellValue === walletAddress) {
          console.log("MATCH FOUND in sheet '" + sheetName + "' at row " + (row + 1) + ", column " + (col + 1));
          return {
            found: true,
            sheet: sheetName,
            row: row + 1,
            column: col + 1
          };
        }
      }
    }
  }
  
  // Wallet address not found
  console.log("No match found for wallet address: " + walletAddress);
  return {
    found: false
  };
}
