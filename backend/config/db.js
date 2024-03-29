import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            //useCreateIndex: true // deprecated v6 mongoose
        })

        console.log(`MongoDB Connected: ${ conn.connection.host }`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${ error.message }`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB