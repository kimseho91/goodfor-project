var admin_vue = admin_vue || {}
admin_vue = {
	admin_body : x=>{
		return `<body style="width: auto; height: 900px;">
		<table id="testTab" style="width: 100%; height: 100%; margin: 0px auto;">
		<tbody>
		<tr id="testDown" style="width: 100%; height: 100%;">
			<td id="testLeft" style="width: 12%; height: 850px; vertical-align: top; background-color: rgb(202, 207, 210);">
				<div id="selectbtn0" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;"></div>
				<div id="selectbtn1" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">대쉬보드</div>
				<div id="selectbtn2" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">고객현황</div>
				<div id="selectbtn3" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">거래현황</div>
				<div id="selectbtn5" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">test</div>
				<div id="selectbtn4" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;"><a id="btn_attention" href="">관심종목</a></div>
			</td>
			<td id="testMiddle" style="width: 78%; height: 850px; vertical-align: top; background-color: rgb(244, 246, 246);">
				<div id="boxOne" style="float: left; width: 23%; height: 150px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">Customers
					<br>
					<div style="color: rgb(14, 102, 85); text-align: right; font-size: xxx-large; font-weight: 800;">1,092명</div>
				</div>
				<div id="boxTwo" style="float: left; width: 23%; height: 150px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">체결금액
					<br>
					<div style="color: rgb(14, 102, 85); text-align: right; font-size: xxx-large; font-weight: 800;">94억원</div>
				</div>
				<div id="boxThree" style="float: left; width: 23%; height: 150px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">체결건수
					<br>
					<div style="color: rgb(14, 102, 85); text-align: right; font-size: xxx-large; font-weight: 800;">192만주</div>
				</div>
				<div id="boxfour" style="float: left; width: 43%; height: 500px; margin: 30px; border: 5px solid white; padding: 10px; background-color: rgb(251, 238, 230);">그래프 1 : 최근 1년간 월별 체결건수 및 체결금액</div>
				<div id="boxfive" style="float: left; width: 43%; height: 500px; margin: 30px; border: 5px solid white; padding: 10px; background-color: rgb(251, 238, 230);">그래프 2 : 최근 1년간 월별 보유고객 명수 및 예치금액</div>
			</td>
			<td id="testRight" style="width: 10%; height: 800px; background-color: rgb(213, 219, 219);"></td>
		</tr>
		</tbody></table>
	</body>`
	},
	attention_body : x=>{
		return `<body style="width: auto; height: 900px;">
    <table id="m1testTab" style="width: 100%; height: 100%; margin: 0px auto;">
        <tbody>
        <tr id="m1testDown" style="width: 100%; height: 100%;">
            <td id="m1testLeft" style="width: 12%; height: 850px; vertical-align: top; background-color: rgb(202, 207, 210);">
                <div id="m1selectbtn0" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;"></div>
                <div id="m1selectbtn1" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">관심종목01</div>
                <div id="m1selectbtn2" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">관심종목02</div>
                <div id="m1selectbtn3" style="width: 80%; height: 90px; color: rgb(26, 82, 118); font-size: large; font-weight: 800; text-align: right;">관심종목03</div>
            </td>
            <td id="m1testMiddle" style="width: 78%; height: 850px; vertical-align: top; background-color: rgb(244, 246, 246);">
                <div id="m0boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">삼성증권
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">50,050원</div>
                </div>
                <div id="m1boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">대신증권
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">1,000,150원</div>
                </div>
                <div id="m2boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">미래에셋
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">70,500원</div>
                </div>
                <div id="m4boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">현대차
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">101,500원</div>
                </div>
                <div id="m5boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">엔씨소프트
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">80,500원</div>
                </div>
                <div id="m6boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">포스코
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">45,100원</div>
                </div>
                <div id="m7boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">삼화전기
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">830,100원</div>
                </div>
                <div id="m8boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">KEC
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">5,800원</div>
                </div>
                <div id="m9boxOne" style="float: left; width: 16%; height: 130px; margin: 30px; border: 10px solid white; padding: 30px; color: rgb(14, 102, 85); font-weight: 800;">LG이노텍
                    <div style="color: rgb(14, 102, 85); text-align: right; font-size: x-large; font-weight: 800;">78,250원</div>
                </div>
            </td>
            <td id="m1testRight" style="width: 10%; height: 800px; background-color: rgb(213, 219, 219);"></td>
        </tr>
    </tbody>
    </table>
</body>`
	}
};