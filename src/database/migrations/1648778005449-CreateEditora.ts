import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateEditora1648778005449 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tb_editora",
                columns:[
                    {
                        name:"cod_editora",
                        type:"uniqueidentifier",
                        isPrimary: true,
                        generationStrategy:"uuid",
                    },
                    {
                        name:"name_editora",
                        type:"varchar"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_editora");
    }

}
