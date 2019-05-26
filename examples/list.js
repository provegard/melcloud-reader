const { Languages } = require("../lib/constants");
const { Connection } = require("../lib/connection");
const { readArgs } = require("./args");

async function main() {
    const { email, password } = readArgs();
    const connection = await Connection.create(email, password, Languages.EN);
    const devices = await connection.listDevices();
    for (const device of devices) {
        console.log(device);
    }
}

main()
    .catch(err => {
        console.error("ERROR");
        console.error(err);
    });