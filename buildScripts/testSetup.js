// This file ins't transpiled, so must use CommonJS and ES5

// Register bable to transpile before our tests run.
require('babel-register')();

// Disable webpack features that Mocha doesn't undestand.
require.extensions['.css'] = function() {};
