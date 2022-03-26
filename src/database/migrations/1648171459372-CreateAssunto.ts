import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAssunto1648171459372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"assuntos",
                    columns: [
                        {
                            name:"id",
                            type:"int",
                            isPrimary:true
                        },
                        {
                            name:"cod_assunto",
                            type:"varchar"
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
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("assuntos");
    }

}
