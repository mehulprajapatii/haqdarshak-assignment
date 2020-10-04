<?= $this->include('header') ?>
<main role="main" style=" position: relative; ">
    <!-- /PAGE HEADER --> 
<section class="b-0">
    <div class="container-fluid">

        <div class="row"> 
            <div class="col-lg-12">

                <div class="hidden-xs-down mb-30">
                    <h4 class="m-0 fs-25 text-center">HOW WE ARE BRINGING ABOUT A CHANGE</h4>
                    <!-- <h6>JUNE 29, 2017 &ndash; PRESENT</h6> -->
                </div>
                
                <img class="img-responsive" src="<?php echo base_url('images/HD_Social_Impact.png'); ?>" width="1300" height="800">

            </div>

        </div>
    </div>
</section>
<section>
    
     <div class="container">

  <div class="panel panel-default">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-9">
                        <h3 class="panel-title">State Wise Impact</h3>
                    </div>
                    <div class="col-md-4">
                        <select name="state" id="state" class="form-control">
                            <option value="">Select State</option>
                        <?php
                        foreach ($state_list->getResult('array') as $row) {
                            echo '<option value="'.$row["name"].'">'.$row["name"].'</option>';
                        }
                        ?>

                        </select>
                    </div>
                   <!--  <div class="col-md-3">
                        <select name="schmes" id="schmes" class="form-control">
                            <option value="">Select Schemes</option>
                        <?php
                        foreach ($schemes_list->getResult('array') as $row) {
                            echo '<option value="'.$row["schemes_type"].'">'.$row["schemes_type"].'</option>';
                        }
                        ?>

                        </select>
                    </div> -->
                </div>
            </div>
            <div class="panel-body">
                <div id="chart_area" style="width: 1000px; height: 620px;"></div>
            </div>
        </div>
 </div>
</section>
<section id=" " class="container">
    <div class="row countTo-lg text-center">

        <div class="col-xs-6 col-sm-3">
            <span class="countTo" data-speed="3000" style="color:#59BA41">500882</span>
            <h4>CITIZENS SCREENED</h4>
        </div>

        <div class="col-xs-6 col-sm-3">
            <span class="countTo" data-speed="3000" style="color:#774F38">388521</span>
            <h4>APPLICATIONS FACILITATED</h4>
        </div>

        <div class="col-xs-6 col-sm-3">
            <span class="countTo" data-speed="3000" style="color:#C02942">225663</span>
            <h4>CITIZENS RECEIVED BENEFITS</h4>
        </div>

        <div class="col-xs-6 col-sm-3">
            <span class="countTo" data-speed="3000" style="color:#1693A5">100</span>
            <h4>Rs.100 CRORE BENEFITS VALUE CHANNELISED</h4>
        </div>

    </div>
</section>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">

google.charts.load('current', {packages:['corechart', 'bar']});

google.charts.setOnLoadCallback(drawChart);
 function drawChart() {



$.ajax({
        url:"<?php echo base_url(); ?>/get-data",
        method:"GET",
        dataType:"JSON",
        success:function(data)
        {
            
        var jsonData = data;
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Count');

    $.each(jsonData, function(i, jsonData){
        var state = jsonData.state;
        var cnt = parseFloat($.trim(jsonData.cnt));
        data.addRows([[state, cnt]]);
    });
        var options = {
          title: 'Haq Darshak Impact',
             pieSliceText: 'value-and-percentage'
        };

        var chart = new google.visualization.PieChart(document.getElementById('chart_area'));

        chart.draw(data, options);
        }
    })
        
      }
function load_statewise_data(state, title)
{
    var temp_title = title + ' ' + state;
    $.ajax({
        url:"<?php echo base_url(); ?>/fetch-data",
        method:"POST",
        data:{state:state},
        dataType:"JSON",
        success:function(data)
        {

            drawStatewiseChart(data, temp_title);
        }
    })
}

function drawStatewiseChart(chart_data, chart_main_title)
{
            
    var jsonData = chart_data;
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'State');
    data.addColumn('number', 'Count');
    console.log(jsonData);
    $.each(jsonData, function(i, jsonData){
        var schemes_type = jsonData.schemes_type;
        var cnt = parseFloat($.trim(jsonData.count));
        data.addRows([[schemes_type, cnt]]);
    });
        var options = {
          title: 'Haq Darshak Impact State Wise',
          pieSliceText: 'value-and-percentage'
        };
        console.log(data);
    var chart = new google.visualization.PieChart(document.getElementById('chart_area'));

    chart.draw(data, options);
}

</script>

<script>
    
$(document).ready(function(){
    $('#state').change(function(){
        var state = $(this).val();
        if(state != '')
        {  
            load_statewise_data(state, 'State Wise BENEFITS Data');
        }else{
            drawChart();
        }
    });
});

</script>
<!-- /RECENT WORK -->  
</main>
<?= $this->include('footer') ?>
