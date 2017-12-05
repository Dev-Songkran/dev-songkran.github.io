'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _document = require('next\\dist\\server\\document.js');

var _document2 = _interopRequireDefault(_document);

var _styledComponents = require('styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\github\\dev-songkran.github.io\\source\\pages\\_document.js?entry';

var resetStyles = '\n@font-face{\n  font-family: \'Athiti\';\n  font-style: normal;\n  font-weight: 300;\n  src: url(\'../static/fonts/Athiti-Light.ttf\');\n}\n@font-face{\n  font-family: \'Athiti\';\n  font-style: normal;\n  font-weight: 400;\n  src: url(\'../static/fonts/Athiti-Regular.ttf\');\n}\n*{font-family:\'Athiti\';font-weight:300; box-sizing:border-box};*,::after,::before{background-repeat:no-repeat;box-sizing:inherit}::after,::before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{text-decoration:none;color:inherit;background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:inherit}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{-ms-touch-action:manipulation;touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}\nbody{background: #6b5393;background: -webkit-linear-gradient(to left bottom, #fdccb0, #db848e, #6b5393);background: linear-gradient(to left bottom, #fdccb0, #db848e, #6b5393);}\ndiv[data-reactroot]{\n  display:flex;\n  align-items:center;\n  min-height: 100vh\n}\n';

var MyDocument = function (_Document) {
  (0, _inherits3.default)(MyDocument, _Document);

  function MyDocument() {
    (0, _classCallCheck3.default)(this, MyDocument);

    return (0, _possibleConstructorReturn3.default)(this, (MyDocument.__proto__ || (0, _getPrototypeOf2.default)(MyDocument)).apply(this, arguments));
  }

  (0, _createClass3.default)(MyDocument, [{
    key: 'render',
    value: function render() {
      var styleElements = this.props.styleElements;

      return _react2.default.createElement('html', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }, _react2.default.createElement(_document.Head, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }), _react2.default.createElement('meta', { property: 'og:url', content: 'https://dev-songkran.github.io', __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }), _react2.default.createElement('meta', { property: 'og:type', content: 'portfolio', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }), _react2.default.createElement('meta', { property: 'og:title', content: 'My Portfolio, built in next.js and React', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement('meta', { property: 'og:description', content: 'My name is Songkran Wichitpong. I\u2019m the Front-end Dev. from Thailand. ', __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }), _react2.default.createElement('meta', { property: 'og:image', content: 'https://dev-songkran.github.io/static/media/my.1bda1d7a.jpg', __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement('meta', { property: 'og:site_name', content: 'dev-songkran.github.io', __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }), _react2.default.createElement('meta', { property: 'fb:app_id', content: '169032400358673', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }), _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }), _react2.default.createElement('meta', { name: 'twitter:site', content: '@dev_Songkran', __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement('meta', { name: 'twitter:creator', content: '@dev_Songkran', __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'cache-control', content: 'no-cache', __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'expires', content: '0', __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), _react2.default.createElement('meta', { 'http-equiv': 'pragma', content: 'no-cache', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }), _react2.default.createElement('title', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, 'My Portfolio, built in next.js and React'), _react2.default.createElement('style', { dangerouslySetInnerHTML: { __html: resetStyles }, __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }), styleElements), _react2.default.createElement('body', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement('noscript', { id: 'deferred-styles', dangerouslySetInnerHTML: { __html: '<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WDWNSLK" height="0" width="0" style="display:none;visibility:hidden"></iframe>' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }), _react2.default.createElement(_document.Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }), _react2.default.createElement(_document.NextScript, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }), _react2.default.createElement('script', { src: '../static/loadCss.js', __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      })));
    }
  }], [{
    key: 'getInitialProps',
    value: function getInitialProps(_ref) {
      var renderPage = _ref.renderPage;

      var sheet = new _styledComponents.ServerStyleSheet();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(_react2.default.createElement(App, (0, _extends3.default)({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          })));
        };
      });
      var styleElements = sheet.getStyleElement();
      return (0, _extends3.default)({}, page, { styleElements: styleElements });
    }
  }]);

  return MyDocument;
}(_document2.default);

exports.default = MyDocument;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxfZG9jdW1lbnQuanMiXSwibmFtZXMiOlsiRG9jdW1lbnQiLCJIZWFkIiwiTWFpbiIsIk5leHRTY3JpcHQiLCJTZXJ2ZXJTdHlsZVNoZWV0IiwicmVzZXRTdHlsZXMiLCJNeURvY3VtZW50Iiwic3R5bGVFbGVtZW50cyIsInByb3BzIiwiX19odG1sIiwicmVuZGVyUGFnZSIsInNoZWV0IiwicGFnZSIsImNvbGxlY3RTdHlsZXMiLCJnZXRTdHlsZUVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVksQUFBTSxBQUFNOzs7O0FBQy9CLEFBQVM7Ozs7OztBQUNULElBQU0sY0FBTjs7SSxBQXNCcUI7Ozs7Ozs7Ozs7OzZCQVFUO1VBQUEsQUFDQSxnQkFBa0IsS0FEbEIsQUFDdUIsTUFEdkIsQUFDQSxBQUNSOzs2QkFDRSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGlEQUNRLE1BQU4sQUFBVyxZQUFXLFNBQXRCLEFBQThCO29CQUE5QjtzQkFERixBQUNFLEFBQ0E7QUFEQTtrREFDTSxVQUFOLEFBQWUsVUFBd0IsU0FBdkMsQUFBK0M7b0JBQS9DO3NCQUZGLEFBRUUsQUFDQTtBQURBO2tEQUNNLFVBQU4sQUFBZSxXQUF3QixTQUF2QyxBQUErQztvQkFBL0M7c0JBSEYsQUFHRSxBQUNBO0FBREE7a0RBQ00sVUFBTixBQUFlLFlBQXdCLFNBQXZDLEFBQStDO29CQUEvQztzQkFKRixBQUlFLEFBQ0E7QUFEQTtrREFDTSxVQUFOLEFBQWUsa0JBQXdCLFNBQXZDLEFBQStDO29CQUEvQztzQkFMRixBQUtFLEFBQ0E7QUFEQTtrREFDTSxVQUFOLEFBQWUsWUFBd0IsU0FBdkMsQUFBK0M7b0JBQS9DO3NCQU5GLEFBTUUsQUFDQTtBQURBO2tEQUNNLFVBQU4sQUFBZSxnQkFBd0IsU0FBdkMsQUFBK0M7b0JBQS9DO3NCQVBGLEFBT0UsQUFDQTtBQURBO2tEQUNNLFVBQU4sQUFBZSxhQUF3QixTQUF2QyxBQUErQztvQkFBL0M7c0JBUkYsQUFRRSxBQUNBO0FBREE7a0RBQ00sTUFBTixBQUFXLGdCQUFlLFNBQTFCLEFBQWtDO29CQUFsQztzQkFURixBQVNFLEFBQ0E7QUFEQTtrREFDTSxNQUFOLEFBQVcsZ0JBQWUsU0FBMUIsQUFBa0M7b0JBQWxDO3NCQVZGLEFBVUUsQUFDQTtBQURBO2tEQUNNLE1BQU4sQUFBVyxtQkFBa0IsU0FBN0IsQUFBcUM7b0JBQXJDO3NCQVhGLEFBV0UsQUFDQTtBQURBO2tEQUNNLGNBQU4sQUFBaUIsaUJBQWdCLFNBQWpDLEFBQXlDO29CQUF6QztzQkFaRixBQVlFLEFBQ0E7QUFEQTtrREFDTSxjQUFOLEFBQWlCLFdBQVUsU0FBM0IsQUFBbUM7b0JBQW5DO3NCQWJGLEFBYUUsQUFDQTtBQURBO2tEQUNNLGNBQU4sQUFBaUIsVUFBUyxTQUExQixBQUFrQztvQkFBbEM7c0JBZEYsQUFjRSxBQUNBO0FBREE7MEJBQ0EsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBZkYsQUFlRSxBQUNBLHNGQUFPLHlCQUF5QixFQUFFLFFBQWxDLEFBQWdDLEFBQVU7b0JBQTFDO3NCQWhCRixBQWdCRSxBQUNHO0FBREg7VUFqQkosQUFDRSxBQW1CQSxnQ0FBQSxjQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxxREFDWSxJQUFWLEFBQWEsbUJBQWtCLHlCQUF5QixFQUFFLFFBQTFELEFBQXdEO29CQUF4RDtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDOztvQkFBRDtzQkFGRixBQUVFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUM7O29CQUFEO3NCQUhGLEFBR0UsQUFDQTtBQURBO0FBQUEsb0RBQ1EsS0FBUixBQUFZO29CQUFaO3NCQXpCTixBQUNFLEFBb0JFLEFBSUUsQUFJUDtBQUpPOzs7OzswQ0FsQ2dDO1VBQWQsQUFBYyxrQkFBZCxBQUFjLEFBQ3RDOztVQUFNLFFBQU4sQUFBYyxBQUFJLEFBQ2xCO1VBQU0sa0JBQWtCLGVBQUE7ZUFBTyxpQkFBQTt1QkFBUyxBQUFNLDRDQUFjLEFBQUMsZ0NBQUQsQUFBUzs7d0JBQVQ7MEJBQTdCLEFBQVMsQUFBb0I7QUFBQTtBQUFBLFlBQUEsQ0FBcEI7QUFBaEI7QUFBeEIsQUFBYSxBQUNiLE9BRGE7VUFDUCxnQkFBaUIsTUFBdkIsQUFBdUIsQUFBTSxBQUM3Qjt3Q0FBQSxBQUFZLFFBQU0sZUFBbEIsQUFDRDs7Ozs7QUFOcUMsQTs7a0JBQW5CLEEiLCJmaWxlIjoiX2RvY3VtZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2dpdGh1Yi9kZXYtc29uZ2tyYW4uZ2l0aHViLmlvL3NvdXJjZSJ9