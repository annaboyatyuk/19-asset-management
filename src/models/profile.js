'use strict';

import mongoose, {Schema} from 'mongoose';

const ProfileSchema = mongoose.Schema({
  images: {type: Schema.Types.ObjectId, ref: 'images'},
});

export default mongoose.model('profile', ProfileSchema);