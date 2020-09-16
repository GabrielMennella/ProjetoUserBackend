// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'localhost',
            port: 3003,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'root',
            password: 'Gabriel#123'
        }
    },
    production:{
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}

