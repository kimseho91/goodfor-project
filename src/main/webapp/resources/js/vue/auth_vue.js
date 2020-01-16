"use strict";
var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x=>{
		return `<header style="width: auto; height: 150px;">
	<!-- TOP ROW STARTS -->
	<div id="header_nav" style="float: right;">
		<span><a href="#">로그인</a></span>
		<span><a href="#">회원가입</a></span>
	</div>
	<div class="container" style="float: left;">
		<div class="">
			<div>
				<div class="logo"><a id="btn_main" href=""><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMzBfMjkz/MDAxNTc3Njg3MTc0MzU4.lf6wJBIhxl2Cd9f2HA9OBByODXJidyGp-7RhWimB5ycg.42lJGRUj5mRoZ6TB_GTuYFQ-X8LgUy1-aXhQyOt2K-gg.PNG/goodinfo.png?type=w740" style="width: 250px; float: left;" alt=""></a></div>
				<div>
					<br>
					<div style="float: left; margin-left: 100px"><a id="btn_trading" href="">트레이딩</a></div>
					<div style="float: left; margin-left: 100px"><a id="btn_notice" href="">공지사항</a></div>
					<div style="float: left; margin-left: 100px"><a id="btn_admin" href="">관리자화면</a></div>	
				</div>
			</div>
		</div>
	</div>
	</header>
	<body style="width: auto; height: 900px;">
		<div id="body_main">
			<div class="main_nav" style="float: left;">
				<div class="korea"><a href="#"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjM3/MDAxNTc3NTQ4MDk0OTgx.OHTTrxTvAxJGl1zQTRxGn4LBjOytGhkaStS5EPcha0Ig.tTNBhKb-0zhJaQbPCVOrUk7YKCnZ9dgY-n86F9MPdqYg.JPEG/%ED%95%9C%EA%B5%AD.jpg?type=w740" style="width: 100px"; alt=""></a></div>
				<div class="america"><a href="#"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjAy/MDAxNTc3NTQ4MDk0MTYx.uQ7jJkj0UhWPgsU_AZE2uIKOSSb8rpaSnHtN4_bRmBkg.VNhl9ivobbJ13Dakp-pTIEH6AJnB-xNoZ7ScG9FV3o4g.JPEG/%EB%AF%B8%EA%B5%AD%EA%B5%AD%EA%B8%B0.jpg?type=w740" style="width: 100px"; alt=""></a></div>
				<div class="china"><a href="#"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfMjY5/MDAxNTc3NTQ4MDk0Nzc3.oZUFvwjI0gj3wC5s5k9sD3UoGSAiTw8Vhp0ZMGlZJJUg.rBb1AVAwUvAId-11X1oNKp2uegN5AN_pYalZGCa2hI8g.JPEG/%EC%A4%91%EA%B5%AD%EA%B5%AD%EA%B8%B0.jpg?type=w740" style="width: 100px"; alt=""></a></div>
				<div class="japan"><a href="#"><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMjlfOTAg/MDAxNTc3NTQ4MDk0NDgz._BeeF3jBI0G-ewEWknTqyEyt4WxSbd7hoTBtT3Bnjgkg.Mqak3V24t77TB_QG0aYobG-zpCEbqCtTvSx4hKuxQMEg.JPEG/%EC%9D%BC%EB%B3%B8%EA%B5%AD%EA%B8%B0.jpg?type=w740" style="width: 100px"; alt=""></a></div>
			</div>
			<div>
				<span><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMzBfMjA0/MDAxNTc3Njg3MTc0MTQ0.YLlmM9Q4CiXdo7UC4bWtT7ukYZbp4GfIG3D71JrndwQg.g66cmP3L-E9Dynu11MICgAEIEe8Jqi85RChSzlB1TVcg.PNG/good.png?type=w740" alt="" style="width: 250px; margin-left: 80px; float: left;"></span>
				<span><img src="https://cafeptthumb-phinf.pstatic.net/MjAxOTEyMzBfMjA0/MDAxNTc3Njg3MTc0MTQ0.YLlmM9Q4CiXdo7UC4bWtT7ukYZbp4GfIG3D71JrndwQg.g66cmP3L-E9Dynu11MICgAEIEe8Jqi85RChSzlB1TVcg.PNG/good.png?type=w740" alt="" style="width: 250px; margin-left: 80px; float: left;"></span>
			</div>
		</div>
	</body`
	}
	
};