	// Подгоняет высоту блока
function setEqualHeight(columns){
    var tallestcolumn = 0;
    columns.each(function(){
      currentHeight = $(this).height();
      if(currentHeight > tallestcolumn){
        tallestcolumn = currentHeight;
      }
    });
    columns.height(tallestcolumn);
}

// Косит под селект
(function() {
  	'use strict';

	function DropDown(el) {
		this.dd = el;
		this.placeholder = this.dd.children('span');
		this.opts = this.dd.find('ul.dropdown > li');
		this.val = '';
		this.index = -1;
		this.initEvents();
	}
	DropDown.prototype = {
		initEvents : function() {
			var obj = this;

			obj.dd.on('click', function(event){
				$(this).toggleClass('active');
				return false;
			});

			obj.opts.on('click',function(){
				var opt = $(this);
				obj.val = opt.text();
				obj.index = opt.index();
				obj.placeholder.text(obj.val);
				obj.placeholder.attr("data-index", obj.index);
				obj.opts.removeClass('active');
				opt.addClass('active');
				var optIndex = obj.index;

				if (obj.index == 0) {
					$('.catalog-list').removeClass('lines').addClass('grid');
					$('.dropdown-ninja').find('li:eq(0)').addClass('active');
				}else if (obj.index == 1){
					$('.catalog-list').removeClass('grid').addClass('lines');
					$('.dropdown-ninja').find('li:eq(1)').addClass('active');
				}

			});
		},
		getValue : function() {
			return this.val;
		},
		getIndex : function() {
			return this.index;
		}
	}
	$(function() {
		var dd = new DropDown( $('.dropdown-ninja') );
		$(document).click(function() {
			// all dropdowns
			$('.dropdown-ninja').removeClass('active');
		});
	});

 })();



$(document).ready(function(){
	setEqualHeight($(".catalog-item"));

	// Animate to top
	var backTop = function(){
		var $this = $(this),
			 backTopG = $("#back-top");
		backTopG.hide();
		$(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
            backTopG.fadeIn();
         } else {
            backTopG.fadeOut();
         }
      });
		$('#back-top').click(function () {
         $('body,html').animate({
            scrollTop: 0
         }, 800);
         return false;
      });

	};
	backTop();

});



