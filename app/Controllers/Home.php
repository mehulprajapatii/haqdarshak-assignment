<?php
namespace App\Controllers;

use App\Models\State;
use App\Models\Stats;
use Exception;

class Home extends BaseController
{
    public function index()
    {
        return view('home');
    }


    public function impact()
    {
        try {
            $db = \Config\Database::connect();
            $model = new Stats($db);
            $data['schemes_list'] = $model->getDistinctSchemesName();
            $data['state_list'] = $model->getDistinctState();
            // print_r($data['state_list']->getResult('array'));
            // exit;
            return view('impact', $data);
        } catch (\Exception $e) {
            throw Exception("Error Processing Request", 1);
        }
    }


    public function getStats()
    {
        try {
            $client = new \Predis\Client();
            // $client-Exception>set('foo', 'bar');
            $value = $client->get('stats');
            // print_r(json_decode($value, true));
            $response = [
                'citiezen_serviced' => 100,
                'application_facilited' => 500,
                'benefits_rs' => rand(100000, 190000),
            ];
            echo json_encode(['status' => 'success', 'data' => $response]);
        } catch (\Exception $e) {
            throw Exception("Error Processing Request", 1);
        }
    }
    public function fetchData()
    {
        try {
            if ($this->request->getVar('state')) {
                $db = \Config\Database::connect();
                $model = new Stats($db);
        
                $chart_data = $model->fetchDataByStateName($this->request->getPost('state'));
                foreach ($chart_data->getResult('array') as $row) {
                    $output[] = array(
     'schemes_type'  => $row["schemes_type"],
     'count' => floatval($row["count"])
    );
                }
                echo json_encode($output);
            }
        } catch (\Exception $e) {
            throw new Exception("Error Processing Request", 1);
        }
    }



    public function getStatsCount()
    {
        try {
            $db = \Config\Database::connect();
            $model = new Stats($db);
        
            $chart_data = $model->getStats();
            foreach ($chart_data->getResult('array') as $row) {
                $output[] = array(
     'state'  => $row["state_name"],
     'cnt' => $row["count"]
    );
            }
            echo json_encode($output);
        } catch (\Exception $e) {
            throw Exception("Error Processing Request", 1);
        }
    }



    //--------------------------------------------------------------------
}
