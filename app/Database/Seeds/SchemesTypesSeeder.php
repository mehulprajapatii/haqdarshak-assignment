<?php
namespace App\Database\Seeds;

class SchemesTypesSeeder extends \CodeIgniter\Database\Seeder
{
    public function run()
    {
        $this->db->query('SET FOREIGN_KEY_CHECKS=0;');
        $this->db->query('TRUNCATE TABLE schemes_types');
        // $this->db->truncate('schemes_types');

        $schmesList = \json_decode(\file_get_contents(
            __DIR__ . '/data/schemes_types.json'
        ), true);

        $schemes = [];

        $sort = 1;
        foreach ($schmesList as $key => $value) {
            $schemes[] = [
            'title'         => $value['name'],
    ];
            $sort++;
        }
        try {
            $this->db->transBegin();
            // print_r($schemes);
            // exit;
            // echo count($schemes);
            foreach ($schemes as $data) {
                // print_r($data);
                // exit;
                $this->db->query(
                    "INSERT INTO schemes_types (title) VALUES(:title:)",
                    $data
                );
            }
            $this->db->transCommit();
        } catch (\Exception $exception) {
            $this->db->transRollback();
            echo $exception->getMessage();
        }

        // Using Query Builder
        $this->db->query('SET FOREIGN_KEY_CHECKS=1;');
    }
}
