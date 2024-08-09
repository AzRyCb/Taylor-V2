import mongoose from "mongoose";
import chalk from "chalk";
const {
  Schema,
  connect,
  model: _model
} = mongoose;
const defaultOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
export class mongoDB {
  constructor(url, options = defaultOptions) {
    this.url = url;
    this.options = options;
    this.data = this._data = {};
    this._schema = {};
    this._model = {};
    console.log(chalk.blue("Connecting to MongoDB..."));
    this.db = connect(this.url, {
      ...this.options
    }).then(() => console.log(chalk.green("MongoDB connected successfully"))).catch(err => console.error(chalk.red("Connection error:"), err));
  }
  async read() {
    console.log(chalk.blue("Reading data from MongoDB..."));
    this.conn = await this.db;
    const schema = this._schema = new Schema({
      data: {
        type: Object,
        required: true,
        default: {}
      }
    });
    try {
      this._model = _model("data", schema);
      console.log(chalk.green("Model created successfully."));
    } catch (err) {
      console.warn(chalk.yellow("Model creation error, reusing existing model:"), err);
      this._model = _model("data");
    }
    this._data = await this._model.findOne({});
    if (!this._data) {
      console.log(chalk.blue("No existing data found, initializing new data."));
      this.data = {};
      const [_, _data] = await Promise.all([this.write(this.data), this._model.findOne({})]);
      this._data = _data;
    } else {
      console.log(chalk.green("Data retrieved successfully."));
      this.data = this._data.data;
    }
    return this.data;
  }
  write(data) {
    return new Promise(async (resolve, reject) => {
      console.log(chalk.blue("Writing data to MongoDB..."));
      if (!data) return reject(chalk.red("No data provided for writing."));
      if (!this._data) {
        console.log(chalk.blue("No existing model data, creating new document."));
        return resolve(new this._model({
          data: data
        }).save());
      }
      this._model.findById(this._data._id, (err, docs) => {
        if (err) return reject(chalk.red("Error finding document by ID:"), err);
        if (!docs.data) docs.data = {};
        docs.data = data;
        this.data = {};
        docs.save(saveErr => {
          if (saveErr) {
            console.error(chalk.red("Error saving document:"), saveErr);
            return reject(saveErr);
          }
          console.log(chalk.green("Data written successfully."));
          resolve(true);
        });
      });
    });
  }
}
export const mongoDBV2 = class MongoDBV2 {
  constructor(url, options = defaultOptions) {
    this.url = url;
    this.options = options;
    this.models = [];
    this.data = {};
    this.lists;
    this.list;
    console.log(chalk.blue("Connecting to MongoDB..."));
    this.db = connect(this.url, {
      ...this.options
    }).then(() => console.log(chalk.green("MongoDB connected successfully"))).catch(err => console.error(chalk.red("Connection error:"), err));
  }
  async read() {
    console.log(chalk.blue("Reading data from MongoDB..."));
    this.conn = await this.db;
    const schema = new Schema({
      data: [{
        name: String
      }]
    });
    try {
      this.list = _model("lists", schema);
      console.log(chalk.green("List model created successfully."));
    } catch (err) {
      console.warn(chalk.yellow("List model creation error, reusing existing model:"), err);
      this.list = _model("lists");
    }
    this.lists = await this.list.findOne({});
    if (!this.lists?.data) {
      console.log(chalk.blue("No lists found, creating default list."));
      await this.list.create({
        data: []
      });
      this.lists = await this.list.findOne({});
    }
    const garbage = [];
    for (const {
        name
      }
      of this.lists.data) {
      let collection;
      try {
        collection = _model(name, new Schema({
          data: Array
        }));
        console.log(chalk.green(`Model for collection "${name}" created successfully.`));
      } catch (err) {
        console.error(chalk.red(`Model creation error for collection "${name}":`), err);
        try {
          collection = _model(name);
          console.warn(chalk.yellow(`Reusing existing model for collection "${name}".`));
        } catch (err) {
          garbage.push(name);
          console.error(chalk.red(`Failed to reuse model for collection "${name}":`), err);
        }
      }
      if (collection) {
        this.models.push({
          name: name,
          model: collection
        });
        const collectionsData = await collection.find({});
        this.data[name] = Object.fromEntries(collectionsData.map(v => v.data));
      }
    }
    try {
      const del = await this.list.findById(this.lists._id);
      del.data = del.data.filter(v => !garbage.includes(v.name));
      await del.save();
      console.log(chalk.green("Garbage collections cleaned up successfully."));
    } catch (err) {
      console.error(chalk.red("Error while cleaning up garbage collections:"), err);
    }
    console.log(chalk.green("Data reading completed."));
    return this.data;
  }
  write(data) {
    return new Promise(async (resolve, reject) => {
      console.log(chalk.blue("Writing data to MongoDB..."));
      if (!this.lists || !data) return reject(chalk.red("No lists or data provided for writing."));
      const collections = Object.keys(data);
      const listDoc = [];
      let index = 0;
      for (const key of collections) {
        if ((index = this.models.findIndex(v => v.name === key)) !== -1) {
          const doc = this.models[index].model;
          console.log(chalk.blue(`Updating existing collection "${key}".`));
          await doc.deleteMany().catch(err => console.error(chalk.red("Error deleting documents:"), err));
          await doc.insertMany(Object.entries(data[key]).map(v => ({
            data: v
          })));
          listDoc.push({
            name: key
          });
        } else {
          console.log(chalk.blue(`Creating new collection "${key}".`));
          const schema = new Schema({
            data: Array
          });
          let doc;
          try {
            doc = _model(key, schema);
            console.log(chalk.green(`Model for new collection "${key}" created successfully.`));
          } catch (err) {
            console.error(chalk.red(`Model creation error for new collection "${key}":`), err);
            doc = _model(key);
            console.warn(chalk.yellow(`Reusing existing model for collection "${key}".`));
          }
          index = this.models.findIndex(v => v.name === key);
          this.models[index === -1 ? this.models.length : index] = {
            name: key,
            model: doc
          };
          await doc.insertMany(Object.entries(data[key]).map(v => ({
            data: v
          })));
          listDoc.push({
            name: key
          });
        }
      }
      this.list.findById(this.lists._id, function(err, doc) {
        if (err) return reject(chalk.red("Error finding list document by ID:"), err);
        doc.data = listDoc;
        this.data = {};
        doc.save(saveErr => {
          if (saveErr) {
            console.error(chalk.red("Error saving list document:"), saveErr);
            return reject(saveErr);
          }
          console.log(chalk.green("Data written successfully."));
          resolve(true);
        });
      });
    });
  }
};