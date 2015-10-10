	///https://github.com/fahadmahmood8/chilimili.js
	var cm;
	cm = {
		init: function(){
			return ('Chilimili.js Loaded...');
		},
		scrollTop: function(){
			jQuery("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		},
		searchIn: function(parent, child){
			jQuery('input#q').on('keyup', function () {
				//console.log(filter);
				var filter = jQuery(this).val(); // get the value of the input, which we filter on
				//console.log(filter);
				if(filter!=""){
					filter = filter.toLowerCase();
					
					var obj = $(parent).find(child+":contains("+filter+")");
					jQuery.each($(parent).find(child), function(){
						//console.log($(this));
						if(jQuery(this).text().search(new RegExp(filter, "i")) > 0){
							jQuery(this).show();
							//console.log(filter);
						}else{
							jQuery(this).hide();
						}
					});
					if(obj.length>0){
						obj.show();
					}else{
						obj.hide();
					}
				}else{
					jQuery(parent).find(child).show();
				}		
			});	
		},
		glow: function(container, object, fadein_int, fadeout_int, start_int){
				var obj = jQuery(container);		
				function inGlow(){
					obj.find(object).fadeIn(fadein_int, function(){ outGlow(); });
				}
				
				function outGlow(){
					obj.find(object).fadeOut(fadeout_int, function(){ inGlow(); });
				}					
				setTimeout(inGlow(), start_int);
		}
	}