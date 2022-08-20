const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://enajera1:ENZObolton1223.@cluster0.dy7ehak.mongodb.net/googlebooks`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
