$(function() {
   $('#get_color').on('click', function() {
    changeRandomCelltoRandomColor()
   });
});



function changeRandomCelltoRandomColor() {
     $.ajax({
      type: "POST",
      url: "/color",
      dataType: 'json',
      success: function(response) {
        $( "#color_me li:nth-child( " + response.cell + ")" ).css("background-color", "" + response.color + "");
      }
    })    
};
