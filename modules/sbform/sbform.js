jQuery.noConflict();
jQuery(document).ready(function($){
	//as default, cc form is shown.
	//show voucher form if page = voucher

	if (window.location.href.indexOf('form=voucher') >= 0){
		$('.sb-form-cc').addClass('hidden');
		$('.sb-form-voucher').removeClass('hidden');
		$('.btn-sb-form-voucher').html('Voucher >>');
        $('.btn-sb-form-cc').html('Credit card');
	}

	// tabs, switching between cc and voucher form on click
	// Page reload is implement to maintain the cositency of forms' state between user interaction. 
	// i.e. voucher form is display correct after submission.
	// ideally this should be implemented using JS. But time is limited hence the reloading implementation.
    $(".btn-sb-form").click(function(){
    	var currentUrl = window.location.href;
        if (this.getAttribute('value')  == 'cc'){
        	if (currentUrl.indexOf('form=cc') < 0) {
	        	if (currentUrl.indexOf('form=voucher') >= 0 ) {
	        		newUrl = currentUrl.replace('form=voucher','form=cc');
	        	} else if (currentUrl.indexOf('?') < 0 ) {
	        		newUrl = currentUrl + '?form=cc';
	        	} else {
	        		newUrl = currentUrl + '&form=cc';
	        	}

	        	window.location.href = newUrl;
        	}
        } else {
        	if (currentUrl.indexOf('form=voucher') < 0) {
	        	if (currentUrl.indexOf('form=cc') >= 0 ) {
	        		newUrl = currentUrl.replace('form=cc','form=voucher');
	        	} else if (currentUrl.indexOf('?') < 0 ) {
	        		newUrl = currentUrl + '?form=voucher';
	        	} else {
	        		newUrl = currentUrl + '&form=voucher';
	        	}

	        	window.location.href = newUrl;
        	}
        }
    });
});

jQuery.noConflict();