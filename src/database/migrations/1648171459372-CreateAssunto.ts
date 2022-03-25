import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAssunto1648171459372 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name:"assuntos",
                    columns: [
                        {
                            name:"cod_assunto",
                            type:"uuid",
                            isPrimary:true
                        },
                        {
                            name:"assunto",
                            type:"varchar"
                        },
                        {
                            name:"created_at",
                            type:"timestamp",
                            default:"now()"
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
