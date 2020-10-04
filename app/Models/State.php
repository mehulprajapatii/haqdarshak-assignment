<?php
namespace App\Models;

use CodeIgniter\Database\ConnectionInterface;
use CodeIgniter\Model;

class State extends Model
{
    protected $table      = 'states';
    protected $db;

    public function __construct(ConnectionInterface &$db)
    {
        $this->db =& $db;
    }
    public function fetch_state()
    {
        return $this->db->table('states')->select('name')->orderby('name', 'ASC')->get();
    }
}
