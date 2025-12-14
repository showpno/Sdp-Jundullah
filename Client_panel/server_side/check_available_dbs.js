const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        // Current connection to 'test' (default)
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Cluster');

        // Use the admin database to list all databases
        const adminLogger = mongoose.connection.db.admin();
        const result = await adminLogger.listDatabases();

        console.log('Available Databases:');
        result.databases.forEach(db => {
            console.log(` - ${db.name} (Size: ${db.sizeOnDisk})`);
        });

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

connectDB();
