import { DataSource } from "typeorm";


export const dataSource = new DataSource({
    type: "mssql",
    port: 5432,
    host: "localhost",
    username: "SA",
    password: "sqlserver_docker",
    database:"library",
});
interface IOptions {
    host: string;
}

dataSource.initialize().then(() => {
    options => {
        const newOptions = options as IOptions;
        newOptions.host = "sqldata";
    }
}).catch((error)=> console.log(error))
