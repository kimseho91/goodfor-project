var s_admin02_vue = s_admin02_vue || {}
s_admin02_vue = {
		admin02_body : x=>{
			return `
			<div class="content">	<!-- Start content -->
				<div class="container-fluid">	<!-- Start container -->

                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box">
                                <h4 class="page-title float-left">Todo List</h4>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-md-3">
	                    <a href="#" data-toggle="modal" data-target="#add-category" class="btn btn-lg btn-gradient btn-block waves-effect m-t-20 waves-light">
	                        <i class="fa fa-plus"></i> Create New
	                    </a>
	                    <div id="external-events" class="m-t-20">
	                        <br>
	                        <p class="text-muted">Drag and drop your event or click in the calendar</p>
	                        <div class="external-event bg-success ui-draggable ui-draggable-handle" data-class="bg-success" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>New Theme Release
	                        </div>
	                        <div class="external-event bg-info ui-draggable ui-draggable-handle" data-class="bg-info" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>My Event
	                        </div>
	                        <div class="external-event bg-warning ui-draggable ui-draggable-handle" data-class="bg-warning" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Meet manager
	                        </div>
	                        <div class="external-event bg-purple ui-draggable ui-draggable-handle" data-class="bg-purple" style="position: relative;">
	                            <i class="mdi mdi-checkbox-blank-circle mr-2 vertical-middle"></i>Create New theme
	                        </div>
	                    </div>
	
	                    <!-- checkbox -->
	                    <div class="checkbox checkbox-primary mt-3">
	                        <input type="checkbox" id="drop-remove">
	                        <label for="drop-remove">
	                            Remove after drop
	                        </label>
	                    </div>
	                </div>
	                
	                <div class="col-md-9">
						<div id="calendar" class="fc fc-unthemed fc-ltr">
						<div class="fc-toolbar">
						
							
							
						</div>
						</div>
					</div>
                    
				</div>	<!-- End container -->
			</div>	<!-- End content -->
     `
	}
}