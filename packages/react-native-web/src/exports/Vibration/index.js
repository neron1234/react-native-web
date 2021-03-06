/**
 * Copyright (c) 2016-present, Nicolas Gallagher.
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

type VibratePattern = number | Array<number>;

const vibrate = (pattern: VibratePattern) => {
  if ('vibrate' in window.navigator) {
    if (typeof pattern === 'number' || Array.isArray(pattern)) {
      window.navigator.vibrate(pattern);
    } else {
      throw new Error('Vibration pattern should be a number or array');
    }
  }
};

const Vibration = {
  cancel() {
    vibrate(0);
  },
  vibrate(pattern: VibratePattern) {
    vibrate(pattern);
  }
};

export default Vibration;
