(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{858:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"PasswordStrength",(function(){return PasswordStrength}));__webpack_require__(41),__webpack_require__(104),__webpack_require__(21),__webpack_require__(87),__webpack_require__(20);var react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),zxcvbn__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(961),zxcvbn__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(zxcvbn__WEBPACK_IMPORTED_MODULE_6__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(0),_excluded=["Component","userInputs","minScore","lowScoreMessage","customError","suggest"];function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PasswordStrength=Object(react__WEBPACK_IMPORTED_MODULE_5__.memo)((function PasswordStrength(_ref){var Component=_ref.Component,userInputs=_ref.userInputs,_ref$minScore=_ref.minScore,minScore=void 0===_ref$minScore?3:_ref$minScore,_ref$lowScoreMessage=_ref.lowScoreMessage,lowScoreMessage=void 0===_ref$lowScoreMessage?"Password too weak":_ref$lowScoreMessage,customError=_ref.customError,_ref$suggest=_ref.suggest,suggest=void 0!==_ref$suggest&&_ref$suggest,props=_objectWithoutProperties(_ref,_excluded),value=props.value,result=Object(react__WEBPACK_IMPORTED_MODULE_5__.useMemo)((function(){return zxcvbn__WEBPACK_IMPORTED_MODULE_6___default()(value,userInputs)}),[value,userInputs]);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(Component,Object.assign({},props,{score:result.score,suggestion:suggest&&result.feedback.suggestions.join(", "),customError:value&&result.score<minScore?lowScoreMessage:customError}))}))}}]);