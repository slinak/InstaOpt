'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  Description: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Like_count: {
    type: Number
  },
  Comment_count: {
    type: Number
  },
  Hashtags: {
    type: [{
      type: String
    }]
  }
});

module.exports = mongoose.model('Post', PostSchema);