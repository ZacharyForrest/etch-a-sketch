

$(document).ready(function(){
  createGrid(10);
  sketch();
  getDimensions();

})

function createGrid(dimensions){
  for(var height=0; height<dimensions;height++){
    $('table').append('<tr></tr>');
  };
  for(var width=0;width<dimensions;width++){
    $('tr').append('<td>&nbsp&nbsp</td>');
  };
  reset();

}

function sketch(){
  $('table').on('mouseenter','td', function(){
    $(this).css('background-color', 'black')
  })
}

function reset(){
  $('.reset').click(function(){
    $('td').css('background-color', 'red')
  })
}

function getDimensions(){
  $('.draw').click(function(){
    var dims = $('#dims').val();
    if(dims<100){
      $('tr').remove();
      createGrid(dims);
     }
  })
}
