var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x=>{
		return '<header style="width: auto; height: 150px;">'+
	'<!-- TOP ROW STARTS -->'+
	'<div id="header_nav" style="float: right;">'+
		'<span><a href="#">로그인</a></span>'+
		'<span><a href="#">회원가입</a></span>'+
	'</div>'+
	'<div class="container" style="float: left;">'+
		'<div class="">'+
			'<div>'+
				'<div class="logo"><a id="btn_main" href=""><img src="'+x.img+'/goodinfo.png" style="width: 250px; float: left;" alt=""></a></div>'+
				'<div>'+
					'<br>'+
					'<div style="float: left; margin-left: 100px"><a id="btn_trading" href="">트레이딩</a></div>'+
					'<div style="float: left; margin-left: 100px"><a id="btn_notice" href="">공지사항</a></div>'+
					'<div style="float: left; margin-left: 100px"><a id="btn_admin" href="">관리자화면</a></div>	'+
				'</div>'+
			'</div>'+
		'</div>'+
	'</div>'+
	'</header>'+
	'<body style="width: auto; height: 900px;">'+
		'<div id="body_main">'+
			'<div class="main_nav" style="float: left;">'+
				'<div class="korea"><a href="#"><img src="'+x.img+'/korea.jpg" style="width: 100px"; alt=""></a></div>'+
				'<div class="america"><a href="#"><img src="'+x.img+'/america.jpg" style="width: 100px"; alt=""></a></div>'+
				'<div class="china"><a href="#"><img src="'+x.img+'/china.jpg" style="width: 100px"; alt=""></a></div>'+
				'<div class="japan"><a href="#"><img src="'+x.img+'/japan.jpg" style="width: 100px"; alt=""></a></div>'+
			'</div>'+
			'<div>'+
				'<span><img src="'+x.img+'/KOSPI.png" alt="" style="width: 250px; margin-left: 80px; float: left;"></span>'+
				'<span><img src="'+x.img+'/KOSPI.png" alt="" style="width: 250px; margin-left: 80px; float: left;"></span>'+
			'</div>'+
		'</div>'+
	'</body>'
	}
	
};