exports.readArgs = () => {
    if (process.argv.length < 4) {
        console.log(`Usage: ${process.argv[1]} <email> <password>`);
        process.exit(1);
    }
    return {
        email: process.argv[2],
        password: process.argv[3]
    }
};
