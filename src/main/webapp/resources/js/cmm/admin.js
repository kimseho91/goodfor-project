"use strict";
var admin = admin || {}
admin = (()=>{
	const WHEN_ERR = '호출하는 JS파일을 찾지 못했습니다.'
	let _, js, css, img,admin_vue_js
	let init =()=> {
		_=$.ctx()
		js=$.js()
		css=$.css()
		img=$.img()
		admin_vue_js=js+'/vue/admin_vue.js'
	}

	let onCreate=()=>{
		init();
		$.when(
			$.getScript(admin_vue_js)
		)
		.done(()=>{
			$('#btn_attention').click(e=>{
				e.preventDefault()
				$('#body_main').empty()
				.html(admin_vue.attention_body({css: $.css(), img: $.img()}))
				.appendTo('#body_main')
			})
		})
		.fail()
	}
	return {onCreate}
})();