const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Database');

        // Check collections
        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log('Collections:', collections.map(c => c.name));

        // Check specific counts if collections exist
        if (collections.find(c => c.name === 'products')) {
            const count = await mongoose.connection.db.collection('products').countDocuments();
            console.log(`Products count: ${count}`);
        } else {
            console.log('Products collection does not exist');
        }

        process.exit(0);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
};

connectDB();
