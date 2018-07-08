'use strict';

import mongoose from 'mongoose';

const ImageSchema = mongoose.Schema({
  images: {data: Buffer, contentType: String},
});

export default mongoose.model('images', ImageSchema);