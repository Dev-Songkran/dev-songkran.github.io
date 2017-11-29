"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _link = require("next\\dist\\lib\\link.js");

var _link2 = _interopRequireDefault(_link);

var _Chart = require("../components/Chart");

var _Chart2 = _interopRequireDefault(_Chart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\github\\dev-songkran.github.io\\source\\pages\\index.js?entry";

var Container = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-0"
})(["max-width:1200px;width:1200px;margin:0 auto;padding:40px;min-height:500px;background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,0.1);position:relative;"]);
var Img = _styledComponents2.default.img.withConfig({
    componentId: "tqdna-1"
})(["display:block;margin:0 auto;border-radius:100%;"]);
var Myname = _styledComponents2.default.h3.withConfig({
    componentId: "tqdna-2"
})(["margin:10px auto;display:table;font-size:25px;font-weight:400;color:#333;"]);
var Detail = _styledComponents2.default.p.withConfig({
    componentId: "tqdna-3"
})(["font-size:14px;color:#111;display:table;margin:0 auto;font-weight:400;margin-bottom:", "px;margin-top:", "px;a{color:#446594;font-weight:600;}"], function (props) {
    return props.mb ? props.mb : '5';
}, function (props) {
    return props.mt ? props.mt : '0';
});
var Icon = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-4"
})(["background-image:", ";background-size:100%;height:30px;width:30px;margin:0 auto;display:inline-block;"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Box = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-5"
})(["margin-top:30px;margin-bottom:30px;border-top:1px solid #f197a3;>h3{text-align:center;font-weight:500;}"]);
var Timeline = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-6"
})(["display:flex;position:relative;margin-bottom:15px;&:after,&:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;margin:auto;}&:after{width:30px;height:30px;display:flex;border-radius:100%;border:2px solid #f197a3;padding:10px;background:#fff;background-image:", ";background-repeat:no-repeat;background-position:center;}&:before{width:2px;background:#f197a3;bottom:auto;height:120%;}"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Text = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-7"
})(["width:50%;display:flex;margin-left:", ";margin-right:", ";h3{margin:0;font-weight:400;color:#333;width:100%;}", "{color:#f197a3;margin:0;width:100%;}"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
}, Detail);

var Year = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-8"
})(["width:50%;margin-left:", ";margin-right:", ";display:flex;padding:0 15px;"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
});
var Card = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-9"
})(["padding:15px;", ";", ";&.custom{padding:5px 15px;height:40px;border:2px solid #785892;border-radius:50px;position:relative;margin-top:auto;margin-bottom:auto;color:#785892;}@media (max-width:670px){h3{font-size:14px;}p{font-size:10px;}&.custom{font-size:13px;padding:5px 10px;height:35px;font-weight:400;}}"], function (props) {
    return props.left ? "margin-left: auto; margin-right:0;text-align:right;" : "";
}, function (props) {
    return props.right ? "margin-right: auto; margin-left:0;text-align:left;" : "";
});
var Skill = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-10"
})(["margin:15px;"]);
var Flex = _styledComponents2.default.div.withConfig({
    componentId: "tqdna-11"
})(["display:flex;align-items:center;justify-content:center"]);

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App() {
        (0, _classCallCheck3.default)(this, App);

        return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 160
                }
            }, _react2.default.createElement(Img, { width: "200", height: "200", src: "../static/media/my.1bda1d7a.jpg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 161
                }
            }), _react2.default.createElement(Myname, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 162
                }
            }, "Songkran Wichitpong"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 163
                }
            }, "I'm a front-end and back-end developer from Thailand"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 164
                }
            }, "address"), " 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand."), _react2.default.createElement(Detail, { mt: "20", mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, "Email : "), "s.Wichitpong@gmail.com , ", _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            }, "Tel : "), "064-6099309"), _react2.default.createElement(Detail, { mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, "Github"), " : ", _react2.default.createElement(_link2.default, { href: "https://github.com/Dev-Songkran", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 166
                }
            }, "https://github.com/dev-songkran"))), _react2.default.createElement(Detail, { mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, "Website"), " : ", _react2.default.createElement(_link2.default, { href: "https://dev-songkran.github.io", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 167
                }
            }, "https://dev-songkran.github.io"))), _react2.default.createElement(Box, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 168
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 169
                }
            }, "EDUCATION AND EXPERIENCE"), _react2.default.createElement(Timeline, { svg: "../static/svg/book.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 170
                }
            }, _react2.default.createElement(Text, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 171
                }
            }, _react2.default.createElement(Card, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 172
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 173
                }
            }, "Bachelor of Science"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 174
                }
            }, "University of Hatyai"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 175
                }
            }, "Songkhla"))), _react2.default.createElement(Year, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 178
                }
            }, _react2.default.createElement(Card, { right: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 179
                }
            }, " 2011 - 2015 "))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }, _react2.default.createElement(Year, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, _react2.default.createElement(Card, { left: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, " Jul 2015 - Nov 2015")), _react2.default.createElement(Text, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement(Card, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, "Freelance"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, "Front-End Developer, Graphic Designer"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, "Hatyai")))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 194
                }
            }, _react2.default.createElement(Text, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement(Card, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 197
                }
            }, "Chiangrai Focus"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                }
            }, "Front-End & Back-End Developer."), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, "Chiangrai"))), _react2.default.createElement(Year, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement(Card, { right: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, " MAY 2016 - IN PROGRESS")))), _react2.default.createElement(Box, { style: { marginTop: '50px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 207
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 208
                }
            }, "SKILLS"), _react2.default.createElement(Flex, { style: { marginBottom: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            }, _react2.default.createElement(_Chart2.default, { percent: "96", skillName: "HTML5 / CSS3", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "javascript / jQuery", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "89", skillName: "PHP", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 212
                }
            })), _react2.default.createElement(Flex, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            }, _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "mySQL", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "40", skillName: "React.js / Next.js", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                }
            }))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsIkxpbmsiLCJDaGFydCIsIkNvbnRhaW5lciIsImRpdiIsIkltZyIsImltZyIsIk15bmFtZSIsImgzIiwiRGV0YWlsIiwicCIsInByb3BzIiwibWIiLCJtdCIsIkljb24iLCJzdmciLCJCb3giLCJUaW1lbGluZSIsIlRleHQiLCJsZWZ0IiwicmlnaHQiLCJZZWFyIiwiQ2FyZCIsIlNraWxsIiwiRmxleCIsIkFwcCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVc7Ozs7Ozs7O0FBQ2xCLElBQU0sdUNBQUEsQUFBbUI7aUJBQW5CO0FBQUEsQ0FBWSxHQUFsQjtBQVdBLElBQU0saUNBQUEsQUFBYTtpQkFBYjtBQUFBLENBQU0sR0FBWjtBQUtBLElBQU0sb0NBQUEsQUFBZ0I7aUJBQWhCO0FBQUEsQ0FBUyxHQUFmO0FBT0EsSUFBTSxvQ0FBQSxBQUFnQjtpQkFBaEI7QUFBQSxDQUFTLHNKQU1NLGlCQUFBO1dBQVMsTUFBQSxBQUFNLEtBQUssTUFBWCxBQUFpQixLQUExQixBQUErQjtBQU45QyxHQU9hLGlCQUFBO1dBQVMsTUFBQSxBQUFNLEtBQUssTUFBWCxBQUFpQixLQUExQixBQUErQjtBQVBsRCxBQUFNO0FBYU4sSUFBTSxrQ0FBQSxBQUFjO2lCQUFkO0FBQUEsQ0FBTyw2R0FDVyxpQkFBQTtXQUFTLE1BQUEsQUFBTSxlQUFhLE1BQW5CLEFBQXlCLFlBQWxDO0FBRHhCLEFBQU07QUFRTixJQUFNLGlDQUFBLEFBQWE7aUJBQWI7QUFBQSxDQUFNLEdBQVo7QUFTQSxJQUFNLHNDQUFBLEFBQWtCO2lCQUFsQjtBQUFBLENBQVcscVpBcUJXLGlCQUFBO1dBQVMsTUFBQSxBQUFNLGVBQWEs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O0FBQUEsZUFMWixBQUNJLEFBQ0ksQUFHSSxBQUdSLGdDQUFDLGNBQUQsUUFBTSxPQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELFFBQU0sT0FBTixNQUFZLFdBQVosQUFBc0I7OEJBQXRCO2dDQUFBO0FBQUE7ZUEzQ2hCLEFBUUksQUEwQkksQUFRSSxBQUNJLEFBSVosK0NBQUMsY0FBRCxPQUFLLE9BQU8sRUFBQyxXQUFiLEFBQVksQUFBWTs4QkFBeEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSwyQkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGNBQWQsQUFBYSxBQUFjOzhCQUEzQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyxpQ0FBTSxTQUFQLEFBQWUsTUFBSyxXQUFwQixBQUE4Qjs4QkFBOUI7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxpQ0FBTSxTQUFQLEFBQWUsTUFBSyxXQUFwQixBQUE4Qjs4QkFBOUI7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxpQ0FBTSxTQUFQLEFBQWUsTUFBSyxXQUFwQixBQUE4Qjs4QkFBOUI7Z0NBTFIsQUFFSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSCxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGlDQUFNLFNBQVAsQUFBZSxNQUFLLFdBQXBCLEFBQThCOzhCQUE5QjtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLGlDQUFNLFNBQVAsQUFBZSxNQUFLLFdBQXBCLEFBQThCOzhCQUE5QjtnQ0F6RGhCLEFBQ0ksQUErQ0ksQUFPSSxBQUVJLEFBS25CO0FBTG1COzs7Ozs7QUEzRE4sQSxBQW1FbEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovZ2l0aHViL2Rldi1zb25na3Jhbi5naXRodWIuaW8vc291cmNlIn0=