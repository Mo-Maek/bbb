$(function(){
	var ul = $('#gouwu');
	var ull = $('.yeshu');
	var search = window.location.search ? window.location.search.split('=')[1] : 'data';
	var hash = window.location.hash.split('=')[1];
	var time = null;
	var num = 0;
	if(hash) {

	} else {
		window.location.hash = 'page=1';
		hash = 1;
	}

	function setPage(index) {
		ul.innerHTML = '';
		var str = '';
		for(var i = ((index - 1) * 2); i <= ((index - 1) * 2 + 7); i++) {

			str += `<li>
							<a href="javascript:;">
								<img src="${aData.data[i].Img}" />
								<p><span>${aData.data[i].tm}</span></p>
								<span class="s1">￥${aData.data[i].jg}</span>
								<span class="s3">${aData.data[i].sb}</span>
							</a>
						</li>`;
						
		}
		ul.html(str);
	}
	setPage(hash)
	function setYe(){
		var len = Math.ceil(aData.data.length / 8);
		var str1 = '';
	for(let j = 0; j < len; j++) {
		if(j == (hash - 1)) {
			str1 += '<li class="focus aaA"><a href="javascript:;" class="aA">' + (j + 1) + '</a></li>';
			ull.html(str1);
		} else {
			str1 += '<li class="aaA"><a href="javascript:;" class="aA">' + (j + 1) + '</a></li>';
			ull.html(str1);
		}
	}
	}
	
	setYe()
	var aA = $('.aA');
	var Lis = $('.aaA');
		$('.aA').on('tap',function(){
			window.location.hash = 'page=' + this.innerHTML;
			console.log(this.innerHTML)
		})
	

	window.onhashchange = function() {
		hash = window.location.hash.split('=')[1];
		console.log(hash)
		for(var i = 0; i < aA.length; i++) {
			Lis[i].className = '';
		}

		Lis[hash - 1].className = 'focus';
		setPage(hash);

	}




})