const mongoose = require("mongoose"),
  moment = require("moment"); // Used for date handling

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  first_name: { type: String, required: true, max: 100 },
  family_name: { type: String, required: true, max: 100 },
  date_of_birth: { type: Date },
  date_of_death: { type: Date }
});

// Virtual for author's full name
AuthorSchema.virtual("name").get(function() {
  return this.family_name + " , " + this.first_name;
});

// Virtual for author's URL
AuthorSchema.virtual("url").get(function() {
  return "/catalog/author/" + this._id;
});

// Virtual for author's lifespan
AuthorSchema.virtual("lifespan").get(function() {
  let lifetime_string = "";
  if (this.date_of_birth) {
    lifetime_string = moment(this.date_of_birth).format("MMMM Do, YYYY");
  }
  lifetime_string += " - ";
  if (this.date_of_death) {
    lifetime_string += moment(this.date_of_death).format("MMMM Do, YYYYY");
  }
  return lifetime_string;
});

// Virtual for DOB
AuthorSchema.virtual("date_of_birth_yyyy_mm_dd").get(function() {
  return moment(this.date_of_birth).format("YYYY-MM-DD");
});

// Virtual for dod
AuthorSchema.virtual("date_of_death_yyyy_mm_dd").get(function() {
  return moment(this.date_of_death).format("YYYY_MM_DD");
});

// Export model
module.exports = mongoose.model("Author", AuthorSchema);
