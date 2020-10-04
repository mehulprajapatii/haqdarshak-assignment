<?php
namespace App\Database\Migrations;

use CodeIgniter\Database\Migration;

class SchemesTypes extends Migration
{
    public function up()
    {
        $this->db->disableForeignKeyChecks();
        $this->forge->addField([
            'id'          => [
                'type'           => 'INT',
                'constraint'     => 11,
                'unsigned'       => true,
                'auto_increment' => true
        ],'title'       => [
                'type'           => 'VARCHAR',
                'constraint'     => '255',
                'unique'         => true,
        ],'description' => [
                'type'           => 'TEXT',
                'null'           => true,
        ], 'status'      => [
                'type'           => 'ENUM',
                'constraint'     => ['active', 'inactive', 'deleted'],
                'default'        => 'active',
        ],
                ]);
        $this->forge->addKey('id', true);
        $this->forge->createTable('schemes_types');
        $this->db->enableForeignKeyChecks();
    }

    //--------------------------------------------------------------------

    public function down()
    {
        $this->db->disableForeignKeyChecks();
        $this->forge->dropTable('schemes_types');
        $this->db->enableForeignKeyChecks();
    }
}
