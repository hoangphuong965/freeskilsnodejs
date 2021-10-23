const express = require("express");
const app = express();
const morgan = require("morgan");
const contactsRoutes = require("./api/routes/contacts");
const todosRoutes = require("./api/routes/todos");
const usersRoutes = require("./api/routes/users");

app.use(morgan("dev"));

//Routes
app.use("/contacts", contactsRoutes);
app.use("/todos", todosRoutes);
app.use("/users", usersRoutes);

// Error Handling
app.use((req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  next(error);
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
