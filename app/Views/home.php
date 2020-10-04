<?= $this->include('header') ?>
<!-- HOME -->
<section id="slider" class="fullheight" style="background: rgba(0, 0, 0, 0) url(&quot;assets/haqdarshak/images/web-banner.jpg&quot;) repeat scroll 0% 0%; height: 492px;">
	<div class="overlay dark-5"><!-- dark overlay [1 to 9 opacity] --></div>

	<div class="display-table">
		<div class="display-table-cell vertical-align-middle">
			
			<div class="container text-center margin-top-30">

				<!-- <section> -->
					<div class="callout ">

						<div class="text-center">

							<h3 class="weight-700 size-40 ">Download the Haqdarshak app</h3>
							<p class="font-lato fs-20">
							A multilingual app which will help you discover and apply for government welfare schemes
							</p> 	
							
							<!-- 	<div class="row">
									<p  class="dnld-now nomargin size-35 wow weight-700">Download Now</p>
								</div> -->
							 
							<a href="https://play.google.com/store/apps/details?id=com.haqdarshak.jana&amp;hl=en_IN" class=""><img id="gplay-icon" class="icons margin-top-20" src="<?php echo base_url('images/google.png'); ?>" alt=""></a>
						</div>

					</div>
				<!-- </section> -->
				<br>
				<!-- <div class="row">
					<h4 class="nomargin size-40 wow weight-700" id="title"></h4>
				</div> -->

			 <section id=" " class="container">
    <div class="row countTo-lg text-center">

        <div class="col-xs-6 col-sm-4">
            <span class="countTo"  style="color:#59BA41" id="citiezen_serviced"></span>
            <h4>CITIZENS SERVICED</h4>
        </div>

        <div class="col-xs-6 col-sm-4">
            <span class="countTo"  style="color:#59BA41" id="application_facilited">388521</span>
            <h4>APPLICATIONS FACILITATED</h4>
        </div>

        <div class="col-xs-6 col-sm-4">
            <span class="countTo"  style="color:#59BA41" id="benefits_rs">225663</span>
            <h4>CITIZENS RECEIVED BENEFITS in <span style="font-size: 35px;color:#59BA41;">&#x20B9;</span></h4>
        </div>

    </div>
</section>
				<div class="clearfix"></div>
				
				<div class="row">
					<div class="col-md-3 col-sm-6 col-xs-6">
						<a href="<?php echo base_url('gov-res');?>">
							<div class="wow fadeInLeft animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;">
							<img class="icons" src="<?php echo base_url('images/icons8-brochure-48.png'); ?>" alt="">
							<h2 class="size-20 weight-300">Snapshot of COVID-19 Relief Measures</h2>
							</div>
						</a>
					</div>
                    <div class="col-md-3 col-sm-6 col-xs-6">
                        <a href="<?php echo base_url('our-impact'); ?>">
                            <div class="wow fadeInLeft animated" data-wow-delay="0.2s" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft;">
                            <img class="icons" src="<?php echo base_url('images/impact.png'); ?>" style="max-width: 48px;" alt="">
                            <h2 class="size-20 weight-300">Impact of Haqdarshaq</h2>
                            </div>
                        </a>
                    </div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<a href="<?php echo base_url('faq');?>">
							<div class="wow fadeInLeft animated" data-wow-delay="0.6s" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;">
							<img class="icons" src="<?php echo base_url('images/icons8-questions-48.png'); ?>" alt="">
							<h2 class="size-20 weight-300">FAQs</h2>
							</div>
						</a>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<div class="wow fadeInLeft animated" data-wow-delay="1.0s" style="visibility: visible; animation-delay: 1s; animation-name: fadeInLeft;">
							<a href="<?php echo base_url('gallery?type=covid');?>">
								<img class="icons" src="<?php echo base_url('images/icons8-natural-user-interface-2-48.png'); ?>" alt="">
								<h2 class="size-20 weight-300">COVID-19 Scheme Gallery</h2>
							</a>
						</div>
					</div>
				</div>  
			</div>

		</div>
	</div>
</section>
<section>
	<div class="container">
		
		<div class="row">

			<!-- <div class="text-center">
				<h1 class="nomargin-bottom">OUR <span>IMPACT</span> </h1><br>
			</div> -->
			<img class="img-fluid" src="<?php echo base_url('images/COVID-Impact-snapshot.jpg'); ?>" alt="">			
			 
		</div> 
		
	</div>
</section>
<script src="<?php echo base_url('js/X14M4Ze4qVIE_tq03ZVmVd9HmKhGO_MbInOjpoZfql8YbXBja29cRmVDffvp5.js'); ?>" type="text/javascript" data-info="modules-covid-controller-covid-ctrl"></script>

<script>
function blink_text() {
		$('.blink').fadeOut(500);
		$('.blink').fadeIn(500);
	}
	setInterval(blink_text, 1000);

	$(function() {

		$.getJSON('assets/covid-19/json-files/home.json', function(data) {

			$.each(data.title, function(index, value) {
				$.each(value, function(index1, value1) {
					if(index1 == "en"){
						$("#title").append(value1);
					}
				});
			});

			$.each(data.subTitle, function(index, value) {
				$.each(value, function(index1, value1) {
					if(index1 == "en"){
						$("#sub-title").append(value1);
					}
				});
			});

			$.each(data.helplineNosText, function(index, value) {
				$.each(value, function(index1, value1) {
					if(index1 == "en"){
						$("#helplineNosText").append(value1);
					}
				});
			});

			$.each(data.helplineNos, function(index, value) {
				$.each(value, function(index1, value1) {
					if(index1 == "en"){
						var str = $.map(value1, function(val,index) {
							var str = val;
							return str;
						}).join(", ");
					$("#helpline-nos").append(str);
					}
				});
			});

		});

	});

	
$('.carousel .vertical .item').each(function(){

	var next = $(this).next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	next.children(':first-child').clone().appendTo($(this));

	for (var i=1;i<2;i++) {
		next=next.next();
	if (!next.length) {
		next = $(this).siblings(':first');
	}
	
	next.children(':first-child').clone().appendTo($(this));
	}

});
</script> 
<script type="text/javascript">
  function updatewebtrade() {
    $.ajax({
      url: "<?php echo base_url('get-stats'); ?>",
      type: "GET",
      data: "values=1",
      success: function(response) {
        response = JSON.parse(response);

        if(response.status === 'success') {
          let stats = response.data;

          let benefits_rs = Math.round((stats.benefits_rs) * 100) / 100
          let application_facilited = Math.round((stats.application_facilited) * 100) / 100
          let citiezen_serviced = Math.round(stats.citiezen_serviced * 100) / 100

          jQuery("#benefits_rs").text(benefits_rs);
          jQuery("#application_facilited").text(application_facilited);
          jQuery("#citiezen_serviced").text(citiezen_serviced);
        } else {
          jQuery("#benefits_rs").text(0);
          jQuery("#application_facilited").text(0);
          jQuery("#citiezen_serviced").text(0);
        }
      },
      error: function() {
      }
    });
  }

jQuery(document).ready(function() {
  updatewebtrade();
  setInterval(function(){ updatewebtrade(); }, 5000);
});
</script>
</main>

<?= $this->include('footer') ?>