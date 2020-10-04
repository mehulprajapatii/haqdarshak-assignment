<?php
namespace App\Models;

use CodeIgniter\Database\ConnectionInterface;
use CodeIgniter\Model;

class Stats extends Model
{
    protected $table      = 'stats';
    protected $db;

    public function __construct(ConnectionInterface &$db)
    {
        $this->db =& $db;
    }

    public function getDistinctState()
    {
        return $this->db->table('stats')->select('state_name as name')->distinct('state_name')->get();
    }


    public function getDistinctSchemesName()
    {
        return
$this->db->table('stats')->select('schemes_type as schemes_type')->distinct('schemes_type')->where('schemes_type IS NOT NULL')->get();
    }

    public function getStats()
    {
        return
$this->db->table('stats')->select('state_name,sum(count) as count')->groupBY('state_name')->get();
    }

    public function fetch_chart_data($stateName)
    {
        return
$this->db->table('stats')->where('state_name', $stateName)->where('schemes_type IS NOT NULL')->groupBY('schemes_type')->get();
    }

    public function fetchDataByStateName($stateName)
    {
        return
$this->db->table('stats')->select('schemes_type,sum(count) as count')->where('state_name', $stateName)->where('schemes_type IS NOT NULL')->groupBY('schemes_type')->get();
    }
}
