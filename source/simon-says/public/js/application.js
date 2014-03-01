$(function() {
   $('#get_color').on('click', function() {
    changeRandomCelltoRandomColor()
   });
});

function changeRandomCelltoRandomColor() {
    randomCell().css('background-color', randomColor());
};

function cellCount() {
    return $("#color_me li").size();
};

function randomCell() {
    randomNumber = Math.floor(Math.random()*cellCount() + 1);
    return $('#color_me li:nth-child(' + randomNumber + ')' );
};

function randomColor() {
    return '#' + randomHexValue();
};

function randomHexValue() {
    color = Math.floor(Math.random()*16777215).toString(16);
    return color;
};















// $(document).ready(function(){
//     $('#get_color').on('click', function() {
//         $("#color_me li:nth-child(1)" ).css('background-color', randomHexValue());
//     })
    
// }
// });

// function Cell() {
//     this.color = "FFFFFF";
// }



