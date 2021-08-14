'use strict';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var React = require('react');
var ReactDOM = require('react-dom');
var VectorWidget = require('./VectorWidget');

var Circle = require('react-art/Circle');
var React = require('react');
var ReactART = require('react-art');
var Group = ReactART.Group;
var Shape = ReactART.Shape;
var Surface = ReactART.Surface;
var Transform = ReactART.Transform;

var MOUSE_UP_DRAG = 0.978;
var MOUSE_DOWN_DRAG = 0.9;
var MAX_VEL = 11;
var CLICK_ACCEL = 3;
var BASE_VEL = 0.15;


ReactDOM.render(<VectorWidget />, document.getElementById('container'));
