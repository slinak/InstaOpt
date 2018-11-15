// Userlist data array for filling in info box
var postListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

  // Populate the user table on initial page load
  populateTable();

});

// Functions =============================================================

// Fill table with data
function populateTable() {

  // Empty content string
  var tableContent = '';

  // jQuery AJAX call for JSON
  $.getJSON( '/posts/postlist', function( data ) {

    // For each item in our JSON, add a table row and cells to the content string
    $.each(data, function(){
      tableContent += '<tr>';
      tableContent += '<td>' + this.Description + '</td>';
      tableContent += '<td>' + this.Created_date + '</td>';
      tableContent += '<td>' + this.Like_count + '</td>';
      tableContent += '<td>' + this.Comment_count + '</td>';
      tableContent += '</tr>';
    });

    // Inject the whole content string into our existing HTML table
    $('#postList table tbody').html(tableContent);
  });
};