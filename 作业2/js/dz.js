//内容
window.onload = function() {
	var ul = document.getElementById('gouwu');
	var ull = document.getElementsByClassName('yeshu')[0];
	var search = window.location.search ? window.location.search.split('=')[1] : 'data';
	var hash = window.location.hash.split('=')[1];
	var time = null;
	var num = 0;
	if(hash) {
		//console.log(hash)

	} else {
		window.location.hash = 'page=1';
		hash = 1;
	}

	function setPage(index) {
		ul.innerHTML = '';
		var str = '';

		for(var i = ((index - 1) * 2); i <= ((index - 1) * 2 + 7); i++) {

			str += `<li><div class="show">
							<a href="javascript:;">
								<img src="${aData.data[i].Img}" />
								<p><span>${aData.data[i].tm}</span></p>
								<span class="yisou">${aData.data[i].ys}</span>
								<span class="new-jia">￥<strong>${aData.data[i].jg}</strong></span>
								<span class="old-jia">￥<strong>${aData.data[i].yj}</strong></span>
								<span class="zhekou">${aData.data[i].zk}</span>
								<span class="dian">${aData.data[i].sb}</span>
							</a>
						</div>
						</li>`;
		}
		ul.innerHTML = str;
	}
	setPage(hash)
	var len = Math.ceil(aData.data.length / 8);
	for(let j = 0; j < len; j++) {
		if(j == (hash - 1)) {
			ull.innerHTML += '<li class="focus"><a href="javascript:;">' + (j + 1) + '</a></li>';
		} else {
			ull.innerHTML += '<li><a href="javascript:;">' + (j + 1) + '</a></li>';
		}

	}
	var aA = ull.getElementsByTagName('a');
	var Lis = ull.getElementsByTagName('li');
	for(var i = 0; i < aA.length; i++) {
		aA[i].onclick = function() {
			window.location.hash = 'page=' + this.innerHTML;
		}
	}

	window.onhashchange = function() {
		hash = window.location.hash.split('=')[1];
		console.log(hash)
		for(var i = 0; i < aA.length; i++) {
			Lis[i].className = '';
		}

		Lis[hash - 1].className = 'focus';
		setPage(hash);

	}

	$(document).scroll(function() {
		console.log($(document).height() - $(document).scrollTop());
		if(($(document).height() - $(document).scrollTop()) <= 2300) {
			$('.nav-main').css({ display: 'block' });
		} else {
			$('.nav-main').css({ display: 'none' });
		}
	})

	//轮播图
	function lunbo() {
		function fn(index) {
			clearInterval(time);
			time = setInterval(function() {

				if(index >= 2) {
					index = 0;
				} else if(index < 0) {
					index = 2;
				} else {
					index++;
				}

				yansi(index)
			}, 3000)
		}
		fn(num);
		$('.banner').on('mousemove', function() {
			clearInterval(time);
		})
		$('.banner').on('mouseout', function() {
			fn(num);
		})
		$('.btn-left').on('click', function() {
			num--
			if(num < 0) num = 2;
			num = num;
			yansi(num)
			console.log(num)
		})
		$('.btn-right').on('click', function() {
			num++
			if(num > 2) num = 0;
			num = num;
			yansi(num)
			console.log(num)
		})
		$('.xiaodian').html(xiao())
		$('.xiaodian').children('li').on('click', function() {
			num = $(this).index();
			yansi(num)
			console.log($(this).index())
		})

		function xiao() {
			let str = '';
			str += '<li style=" background: #FF69B4"><a href="javascript:;"></a></li>';
			for(let i = 0; i < $('.banner').children('li').length - 1; i++) {
				str += '<li><a href="javascript:;"></a></li>';
			}
			return str;
		}

		function yansi(a) {
			$('.banner').children('li').eq(a).css({ opacity: 1 }).siblings('li').css({ opacity: 0 })
			$('.xiaodian').children('li').eq(a).css({ background: '#FF69B4' }).siblings('li').css({ background: '#67696D' })
		}
	}
	lunbo();
	
}