import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAssunto1648774958822 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tb_assunto",
                columns:[
                    {
                        name:"cod_assunto",
                        type:"uniqueidentifier",
                        isPrimary:true,
                        generationStrategy:"uuid"
                    },
                    {
                        name:"assunto",
                        type:"varchar"
                    },
                    {
                        name:"created_at",
                        type:"datetime",
                        default:"CURRENT_TIMESTAMP"
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_assunto")
    }

}
