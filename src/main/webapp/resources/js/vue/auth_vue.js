var auth_vue = auth_vue || {}
auth_vue = {
	auth_body: x=>{
		return `
		<div id="wrapper">		
			<div class="topbar">

                <div class="topbar-left">
                    <a href="index.html" class="logo">
                        <span>
                            GoodFor
                        </span>
                    </a>
                </div>

                <nav class="navbar-custom">
                
                    <ul class="list-unstyled topbar-right-menu float-right mb-0">
                    
	                    <li class="nav-link dropdown-toggle arrow-none waves-light waves-effect">
							<div id="btn_trading" style="display:inline-block;width:200px;color:white;font-size:15px">계좌정보</div>
							<div id="btn_notice" style="display:inline-block;width:200px;color:white;font-size:15px">주식정보</div>
							<div id="btn_admin" style="display:inline-block;width:200px;color:white;font-size:15px">관리자</div>
						</li>
						
                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" href="#">
                                <i class="fi-bell noti-icon"></i>
                            </a>
                        </li>

                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fi-speech-bubble noti-icon"></i>
                            </a>
                        </li>

                        <li class="dropdown notification-list">
                            <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <span class="ml-1"> . . . . <i class="mdi mdi-chevron-down"></i> </span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" x-placement="bottom-end" style="position: absolute; transform: translate3d(130px, 70px, 0px); top: 0px; left: 0px; will-change: transform;">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h6 class="text-overflow m-0">Welcome !</h6>
                                </div>

                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-head"></i> <span>My Account</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-cog"></i> <span>Settings</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-help"></i> <span>Support</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-lock"></i> <span>Lock Screen</span>
                                </a>
                    <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <i class="fi-power"></i> <span>Logout</span>
                                </a>
                            </div>
                        </li>
                    </ul>
                    
                </nav>
                
			</div>		<!-- End topbar-->
		
		<div id="body_main">
		<div style="padding: 0 10px; margin-top: 70px ">
			<h1>test2</h1>
		</div></div>
		
		<div id="s-footer">
			<h1>test3</h1>
		</div>
	</div>
	`	
	}
	
};