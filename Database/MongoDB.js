const mongoose = require("mongoose")
mongoose.set("strictQuery", false)
const MongoDB = async () => {
    try {
        const isConnect = await mongoose.connect(process.env.MONGO_DB_URI, {
            useNewUrlParser: true,
        })
        if (isConnect) {
            console.warn("MongoDB Connected")
        }
    } catch (error) {
        console.warn(error.message)
    }
}

module.exports = MongoDB
