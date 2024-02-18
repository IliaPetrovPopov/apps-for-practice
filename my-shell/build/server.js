import app from "./app";
const server = app.listen(process.env.PORT, () => {
    console.log("Go go go!");
});
process.on("unhandledRejection", (err) => {
    console.log("An error happened, while executing the code... Shutting down 💥");
    server.close(() => {
        process.exit(1);
    });
});
