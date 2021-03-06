module.exports = { 
  "extends": ["airbnb-base"],
  "rules": {
    "linebreak-style" : [
      "error",
      "windows"
    ],
    "valid-jsdoc": ["error", {
      "requireReturn": true,
      "requireReturnType": true,
      "requireParamDescription": false,
      "requireReturnDescription": true
    }],
    "require-jsdoc": ["error", {
      "require": {
        "FunctionDeclaration": true,
        "MethodDefinition": true,
        "ClassDeclaration": true
      }
    }]
  },
  "env": {
    "mocha": true
  }
};