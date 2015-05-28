/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-web-js/sock_js_socket */
var utils = require('vertx-js/util/utils');
var Session = require('vertx-web-js/session');
var User = require('vertx-auth-common-js/user');
var Buffer = require('vertx-js/buffer');
var WriteStream = require('vertx-js/write_stream');
var ReadStream = require('vertx-js/read_stream');
var MultiMap = require('vertx-js/multi_map');
var SocketAddress = require('vertx-js/socket_address');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSockJSSocket = io.vertx.ext.web.handler.sockjs.SockJSSocket;

/**

 You interact with SockJS clients through instances of SockJS socket.
 <p>
 @class
*/
var SockJSSocket = function(j_val) {

  var j_sockJSSocket = j_val;
  var that = this;
  ReadStream.call(this, j_val);
  WriteStream.call(this, j_val);

  /**

   @public

   @return {boolean}
   */
  this.writeQueueFull = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_sockJSSocket["writeQueueFull()"]();
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {SockJSSocket}
   */
  this.exceptionHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sockJSSocket["exceptionHandler(io.vertx.core.Handler)"](function(jVal) {
      handler(utils.convReturnTypeUnknown(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {SockJSSocket}
   */
  this.handler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sockJSSocket["handler(io.vertx.core.Handler)"](function(jVal) {
      handler(new Buffer(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {SockJSSocket}
   */
  this.pause = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_sockJSSocket["pause()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {SockJSSocket}
   */
  this.resume = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_sockJSSocket["resume()"]();
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param endHandler {function} 
   @return {SockJSSocket}
   */
  this.endHandler = function(endHandler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sockJSSocket["endHandler(io.vertx.core.Handler)"](endHandler);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param data {Buffer} 
   @return {SockJSSocket}
   */
  this.write = function(data) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'object' && __args[0]._jdel) {
      j_sockJSSocket["write(io.vertx.core.buffer.Buffer)"](data._jdel);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param maxSize {number} 
   @return {SockJSSocket}
   */
  this.setWriteQueueMaxSize = function(maxSize) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] ==='number') {
      j_sockJSSocket["setWriteQueueMaxSize(int)"](maxSize);
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param handler {function} 
   @return {SockJSSocket}
   */
  this.drainHandler = function(handler) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_sockJSSocket["drainHandler(io.vertx.core.Handler)"](handler);
      return that;
    } else utils.invalidArgs();
  };

  /**
   When a <code>SockJSSocket</code> is created it automatically registers an event handler with the event bus, the ID of that
   handler is given by <code>writeHandlerID</code>.
   <p>
   Given this ID, a different event loop can send a buffer to that event handler using the event bus and
   that buffer will be received by this instance in its own event loop and written to the underlying socket. This
   allows you to write data to other sockets which are owned by different event loops.

   @public

   @return {string}
   */
  this.writeHandlerID = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_sockJSSocket["writeHandlerID()"]();
    } else utils.invalidArgs();
  };

  /**
   Close it

   @public

   */
  this.close = function() {
    var __args = arguments;
    if (__args.length === 0) {
      j_sockJSSocket["close()"]();
    } else utils.invalidArgs();
  };

  /**
   Return the remote address for this socket

   @public

   @return {SocketAddress}
   */
  this.remoteAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new SocketAddress(j_sockJSSocket["remoteAddress()"]());
    } else utils.invalidArgs();
  };

  /**
   Return the local address for this socket

   @public

   @return {SocketAddress}
   */
  this.localAddress = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new SocketAddress(j_sockJSSocket["localAddress()"]());
    } else utils.invalidArgs();
  };

  /**
   Return the headers corresponding to the last request for this socket or the websocket handshake
   Any cookie headers will be removed for security reasons

   @public

   @return {MultiMap}
   */
  this.headers = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new MultiMap(j_sockJSSocket["headers()"]());
    } else utils.invalidArgs();
  };

  /**
   Return the URI corresponding to the last request for this socket or the websocket handshake

   @public

   @return {string}
   */
  this.uri = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return j_sockJSSocket["uri()"]();
    } else utils.invalidArgs();
  };

  /**
   @return the Vert.x-Web session corresponding to this socket

   @public

   @return {Session}
   */
  this.webSession = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new Session(j_sockJSSocket["webSession()"]());
    } else utils.invalidArgs();
  };

  /**
    @return the Vert.x-Web user corresponding to this socket

   @public

   @return {User}
   */
  this.webUser = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new User(j_sockJSSocket["webUser()"]());
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_sockJSSocket;
};

// We export the Constructor function
module.exports = SockJSSocket;