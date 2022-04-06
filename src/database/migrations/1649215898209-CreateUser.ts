import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1649215898209 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tb_users",
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
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"password",
                        type:"varchar"
                    },
                    {
                        name:"isAdmin",
                        type:"boolean",
                    },
                    {
                        name:"created_at",
                        type:"datetime",
                        default:"CURRENT_TIMESTAMP"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_users");
    }

}
