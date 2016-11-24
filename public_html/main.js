/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function main() {
  $('.mod').hide();
  $('.mod').fadeIn(1000);
  $('.list').hide();
  $('.button1').on('click', function(){
    $(this).next().slideToggle(400);
    
  });
}


$(document).ready(main);

