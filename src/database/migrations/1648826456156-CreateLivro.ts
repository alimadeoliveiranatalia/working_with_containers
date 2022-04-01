import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLivro1648826456156 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"tb_livro",
                columns: [
                    {
                        name:"cod_ISBN",
                        type:"uniqueidentifier",
                        isPrimary:true,
                        generationStrategy:"uuid"
                    },
                    {
                        name:"name_livro",
                        type:"varchar"
                    },
                    {
                        name:"autor",
                        type:"varchar"
                    },
                    {
                        name:"ic_venda",
                        type:"int"
                    },
                    {
                        name:"preco_renovacao_aluguel",
                        type:"decimal"
                    },
                    {
                        name:"ic_importado",
                        type:"int"
                    },
                    {
                        name:"quantidade",
                        type:"int"
                    },
                    {
                        name:"preco_venda",
                        type:"decimal"
                    },
                    {
                        name:"preco_aluguel",
                        type:"decimal"
                    },
                    {
                        name:"editora",
                        type:"varchar"
                    },
                    {
                        name:"assunto",
                        type:"varchar"
                    }

                ]
            })
        );
        await queryRunner.createForeignKey(
            "tb_livro", 
            new TableForeignKey({
                columnNames:["autor"],
                referencedColumnNames:["id"],
                referencedTableName:"tb_autor"
            })
        );
        await queryRunner.createForeignKey(
            "tb_livro", 
            new TableForeignKey({
                columnNames:["editora"],
                referencedColumnNames:["cod_editora"],
                referencedTableName:"tb_editora"
            })
        );
        await queryRunner.createForeignKey(
            "tb_livro", 
            new TableForeignKey({
                columnNames:["assunto"],
                referencedColumnNames:["id"],
                referencedTableName:"tb_assunto"
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("tb_livro","autor");
        await queryRunner.dropForeignKey("tb_livro","editora");
        await queryRunner.dropForeignKey("tb_livro","assunto");
        await queryRunner.dropTable("tb_livro");
    }

}
