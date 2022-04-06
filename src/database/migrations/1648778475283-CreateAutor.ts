import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAutor1648778475283 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tb_autor",
                columns: [
                    {
                       name:"id",
                       type:"uniqueidentifier",
                       isPrimary:true,
                       generationStrategy:"uuid" 
                    },
                    {
                        name:"name",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"datetime",
                        default:"CURRENT_TIMESTAMP"
                    },
                    {
                        name:"updated_at",
                        type:"datetime",
                        default:"CURRENT_TIMESTAMP"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_autor");
    }

}
