import mongoose from 'mongoose';

export const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Use backticks (`` ` ``)
    } catch (error) {
        console.log(`Error: ${error.message}`); // Use backticks (`` ` ``)
        process.exit(1); // 1 could means failure, 0 means success
    }
};
