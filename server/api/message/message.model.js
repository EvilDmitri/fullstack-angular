'use strict';

import mongoose from 'mongoose';
import gridStore from 'mongoose-gridstore'
import {registerEvents} from './message.events';

let MessageSchema = new mongoose.Schema({
  name: String,
  data: String
});

MessageSchema.plugin(gridStore, {
  mongoose : mongoose  //optional, the mongoose instance your app is using. Defaults to latest mongoose version.
});

registerEvents(MessageSchema);
export default mongoose.model('Message', MessageSchema);
