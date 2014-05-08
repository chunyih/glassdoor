jQuery(document).ready(function($) {
  var sortedArr = [];
  var timer = 800;
  var typingTimer;

  $('input').keypress(function(event){
    clearTimeout(typingTimer);
    typingTimer = setTimeout(finishTyping, timer);
  });

  function finishTyping() {
    var i, j, order, pos;
    var spaceOrder = 0;
    var spaceArr = [];
    var notSpaceArr = [];
    var newSortedArr = [];

    $('input').each(function(index) {
      sortedArr[index] = $(this).val();
    });

    console.log(sortedArr);
    sortedArr.sort();
    console.log(sortedArr);

    i = 0;
    while (sortedArr[i] === "" && i <= 10) {
      i += 1;
    }

    console.log(i);
    spaceArr = sortedArr.slice(0,i);
    notSpaceArr = sortedArr.slice(i);
    newSortedArr = notSpaceArr.concat(spaceArr);
    console.log(newSortedArr);

    $('input').each(function(index) {
      if($(this).val() === "" && spaceOrder === 0) {
        spaceOrder = newSortedArr.indexOf($(this).val());
        pos = spaceOrder*30 + 30 + "px";
        console.log(pos);
        $(this).animate({top: pos}, 500);
      }
      else if($(this).val() === "" && spaceOrder != 0) {
        spaceOrder += 1;
        pos = spaceOrder*30 + 30 + "px";
        console.log(pos);
        $(this).animate({top: pos}, 500);
      }
      else {
        order = newSortedArr.indexOf($(this).val());
        pos = order*30 + 30 + "px";
        console.log(pos);
        $(this).animate({top: pos}, 500);
      }
    });
  };

});