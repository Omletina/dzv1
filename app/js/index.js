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

				if (obj.index == 0) {
					$('.catalog-list').removeClass('lines').addClass('grid');
				}else if (obj.index == 1){
					$('.catalog-list').removeClass('grid').addClass('lines');
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

		var dd = new DropDown( $('#dd') );

		$(document).click(function() {
			// all dropdowns
			$('.dropdown-ninja').removeClass('active');
		});

	});

		


 })();





		