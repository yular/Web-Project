$(function() {

	var clearAd = {
		checkUrl: function() {
			var Checkflag = 0,
				url = window.location.href;

			
			var notDel = [
				"www.codeforces.com",
				"www.nba.com"
			];

			
			for (var i = 0; i < notDel.length; i++) {
				var reg = new RegExp(notDel[i], "g");

				if (reg.test(url)) {
					console.log('This page does not clear ads.');
					break;
				} else {
					if (i == notDel.length - 1) {
						Checkflag = 1;
					}
				}
			}
			
			if (Checkflag == 1) {
				this.clear();
				this.findSomeAdPossible();
			}
		},
		clear:function(){
			var ad_id_name = [
			"cprolframe2001holder",
			"cprolframe2002holder",
			"cprolframe2003holder",
			"cprolframe2004holder",
			"cprolframe2005holder",
			"cprolframe2006holder",
			"cprolframe2007holder",
			"cprolframe2008holder",
			"cprolframe2009holder",
			"cprolframe2010holder",
			"id_300x250_banner_top",
	        "ads",
	        "google_image_div",
	        "mx_cs_71603_1261456",
	        "AC_TR86_71603",
	        "cproIframe_u2060917_1",
	        "google_image_div",
	        "content_right"
			];

			var ad_css_name = [
				"cprolframe_u410704_3",
				"img_ad",
				"hover_btn"
			];

			for(var i = 0; i < ad_id_name.length; ++ i){
				$('#'+ad_id_name[i]).remove();
			}

			for(var i = 0; i < ad_css_name.length; ++ i){
				$('.'+ad_css_name[i]).remove();
			}
		},

		findSomeAdPossible:function(){
			var sap = $('div iframe'), ad_img = $('div script').parent().find('img,embed'), float_img = $('div object').parent().find('img,embed');

			this.arrayDel(sap, 360, 200);
			this.arrayDel(ad_img, 350, 150);
			this.arrayDel(float_img, 350, 150);
		},

		arrayDel:function(arr, conWidth, conHeight){
			var len = arr.length;

			for (var i = 0; i < len; ++ i) {
				var self = arr.eq(i);

				if(self.width() <= conWidth || self.height() <= conHeight){
					self.remove();
				}
			}
		},

		init: function() {
			this.checkUrl();
		}
	}

	$(document).ready(function() {
		clearAd.init();

		setTimeout(function() {
			clearAd.init();
		}, 4000)
	});

})