'use strict';

import profile from '../src/models/profile';

export default (dir) => {

  const fakeMongo = {
    find: () => Promise.resolve([]),
    findById: () => Promise.resolve({}),
    save: data => Promise.resolve(data),
    findByIdAndUpdate: () => Promise.resolve({}),
    findByIdAndDelete: () => Promise.resolve({}),
  };

  if(typeof dir !== 'string') {
    return {};
  }
  return {
    'foo': {default: fakeMongo},
    'profile': {default: profile},
  };
};
