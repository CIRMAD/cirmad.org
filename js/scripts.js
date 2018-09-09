
/*$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());$nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});*/

/* Make top navigation sticky */

window.onscroll = function() {myFunction()};
var nav = document.getElementById("top-nav");
var navSticky=nav.offsetTop;

function myFunction() 
{
	if(window.pageYOffset>=navSticky)
		{
			nav.classList.add("sticky");
		}
	else
		{
			nav.classList.remove("sticky");
		}
	
}

 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, options);
  });
