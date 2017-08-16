
endTime = ((new Date('2017/08/11 10:00:00')).getTime() / 1000);
	console.log(endTime)

	function show_date_time(end, style, id) {
		today = new Date();

		timeold = ((end) * 1000 - today.getTime());
		if(timeold < 0) {
			$("#end_date_" + id).html("已结束");
		} else {

			setTimeout("show_date_time(" + end + ',' + style + ',' + id + ")", 100);
			sectimeold = timeold / 1000;
			secondsold = Math.floor(sectimeold);
			msPerDay = 24 * 60 * 60 * 1000;
			e_daysold = timeold / msPerDay;
			daysold = Math.floor(e_daysold);
			e_hrsold = (e_daysold - daysold) * 24;
			hrsold = Math.floor(e_hrsold);
			e_minsold = (e_hrsold - hrsold) * 60;
			minsold = Math.floor((e_hrsold - hrsold) * 60);
			e_seconds = (e_minsold - minsold) * 60;
			seconds = Math.floor((e_minsold - minsold) * 60);
			ms = e_seconds - seconds;
			ms = new String(ms);
			ms1 = ms.substr(2, 1);
			ms2 = ms.substr(2, 2);
			hrsold1 = daysold * 24 + hrsold;
			if(style == 1) {
				$("#end_date_" + id).html('<em>' + (hrsold1 < 10 ? '0' + hrsold1 : hrsold1) + "</em>小时<em>" + (minsold < 10 ? '0' + minsold : minsold) + "</em>分<em>" + (seconds < 10 ? '0' + seconds : seconds) + "</em>秒");
			} else if(style == 2) {
				$("#end_date_" + id).html('<em>' + daysold + "</em>天<em>" + (hrsold < 10 ? '0' + hrsold : hrsold) + "</em>时<em>" + (minsold < 10 ? '0' + minsold : minsold) + "</em>分<em>" + (seconds < 10 ? '0' + seconds : seconds) + "</em>秒");
			} else if(style == 3) {
				$("#end_date_" + id).html("<span class='hours'><em>" + (hrsold1 < 10 ? '0' + hrsold1 : hrsold1) + "</em><i>小时</i></span><span class='minutes'><em>" + (minsold < 10 ? '0' + minsold : minsold) + "</em><i>分</i></span><span class='seconds'><em>" + (seconds < 10 ? '0' + seconds : seconds) + "</em><i>秒</i></span>");
			} else {
				$("#end_date_" + id).html(daysold + "天" + (hrsold < 10 ? '0' + hrsold : hrsold) + "小 时" + (minsold < 10 ? '0' + minsold : minsold) + "分" + (seconds < 10 ? '0' + seconds : seconds) + "秒." + ms2);
			}
		}
	}

	$(".times").each(function() {
		var reg = /^[0-9]+$/;
		var times = $(this).attr('data-time');
		if(reg.test(times)) {
			show_date_time(times, 3, 0);
		}
	})