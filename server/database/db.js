import mongoose from "mongoose";

const Connection = async () => {
  try {
    const url = `mongodb+srv://material:material@blog.1vxwn.mongodb.net/blog-material?retryWrites=true&w=majority`;

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully!");
  } catch (error) {
    console.log("Error while connecting to MongoDB!", error);
  }
};

export default Connection;
