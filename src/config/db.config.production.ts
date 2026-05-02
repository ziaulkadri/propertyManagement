import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions.js";
import { join } from "path";


export default():PostgresConnectionOptions => ({

    //dont hardcode credentials in production, use environment variables or a secrets manager

    url:process.env.DATABASE_URL,
    type: "postgres",
    entities:[join(__dirname, '..', 'entities', '*.entity{.ts,.js}')],
    // in production, set synchronize to false and use migrations to manage your database schema
    synchronize:false,
    logging:false
});
