import { Application } from "express";

import healthCheckRouter from "./moduls/healthCheck";
import userRouter from "./moduls/users";
import postRouter from "./moduls/posts";
import reviewRouter from "./moduls/reviews";

function routes(app: Application) {
  app.use("/api/healthcheck", healthCheckRouter);
  app.use("/api/users", userRouter);
  app.use("/api/posts", postRouter);
  app.use("/api/reviews", reviewRouter);
}

export default routes;
