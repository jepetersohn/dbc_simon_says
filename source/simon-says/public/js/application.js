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



// $.ajax({
//       type: "POST",
//       url: "/games/new",
//       data: { the_winner: "player_one"},
//       success: function(response) {
//         // console.log(response);
//         window.location.replace('/');
//       }
//     })

// function cellCount() {
//     return $("#color_me li").size();
// };

// function randomCell() {
//     randomNumber = Math.floor(Math.random()*cellCount() + 1);
//     return $('#color_me li:nth-child(' + randomNumber + ')' );
// };

// function randomColor() {
//     return '#' + randomHexValue();
// };

// function randomHexValue() {
//     color = Math.floor(Math.random()*16777215).toString(16);
//     return color;
// };














// $(document).ready(function(){
//     $('#get_color').on('click', function() {
//         $("#color_me li:nth-child(1)" ).css('background-color', randomHexValue());
//     })
    
// }
// });

// function Cell() {
//     this.color = "FFFFFF";
// }



