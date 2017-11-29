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
    componentId: "pyqxjy-0"
})(["max-width:1200px;width:1200px;margin:0 auto;padding:40px;min-height:500px;background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,0.1);position:relative;"]);
var Img = _styledComponents2.default.img.withConfig({
    componentId: "pyqxjy-1"
})(["display:block;margin:0 auto;border-radius:100%;"]);
var Myname = _styledComponents2.default.h3.withConfig({
    componentId: "pyqxjy-2"
})(["margin:10px auto;display:table;font-size:25px;font-weight:400;color:#333;"]);
var Detail = _styledComponents2.default.p.withConfig({
    componentId: "pyqxjy-3"
})(["font-size:14px;color:#111;display:table;margin:0 auto;font-weight:400;margin-bottom:", "px;margin-top:", "px;a{color:#446594;font-weight:600;}"], function (props) {
    return props.mb ? props.mb : '5';
}, function (props) {
    return props.mt ? props.mt : '0';
});
var Icon = _styledComponents2.default.i.withConfig({
    componentId: "pyqxjy-4"
})(["padding:10px;width:35px;height:35px;text-align:center;border-radius:100%;border:1px solid ", ";color:", ";transition:all 0.2s;margin:0 5px;&:hover{background:", ";color:#fff;}"], function (props) {
    return props.color ? props.color : '#fff';
}, function (props) {
    return props.color ? props.color : '#fff';
}, function (props) {
    return props.color ? props.color : '#fff';
});
var Box = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-5"
})(["margin-top:30px;margin-bottom:30px;border-top:1px solid #f197a3;>h3{text-align:center;font-weight:500;}"]);
var Timeline = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-6"
})(["display:flex;position:relative;margin-bottom:15px;&:after,&:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;margin:auto;}&:after{width:30px;height:30px;display:flex;border-radius:100%;border:2px solid #f197a3;padding:10px;background:#fff;background-image:", ";background-repeat:no-repeat;background-position:center;}&:before{width:2px;background:#f197a3;bottom:auto;height:120%;}"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Text = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-7"
})(["width:50%;display:flex;margin-left:", ";margin-right:", ";h3{margin:0;font-weight:400;color:#333;width:100%;}", "{color:#f197a3;margin:0;width:100%;}"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
}, Detail);

var Year = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-8"
})(["width:50%;margin-left:", ";margin-right:", ";display:flex;padding:0 15px;"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
});
var Card = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-9"
})(["padding:15px;", ";", ";&.custom{padding:5px 15px;height:40px;border:2px solid #785892;border-radius:50px;position:relative;margin-top:auto;margin-bottom:auto;color:#785892;}@media (max-width:670px){h3{font-size:14px;}p{font-size:10px;}&.custom{font-size:13px;padding:5px 10px;height:35px;font-weight:400;}}"], function (props) {
    return props.left ? "margin-left: auto; margin-right:0;text-align:right;" : "";
}, function (props) {
    return props.right ? "margin-right: auto; margin-left:0;text-align:left;" : "";
});
var Skill = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-10"
})(["margin:15px;"]);
var Flex = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-11"
})(["display:flex;align-items:center;justify-content:center"]);
var Language = _styledComponents2.default.div.withConfig({
    componentId: "pyqxjy-12"
})([""]);

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = { isToggleOn: true };
        _this.handleClick = _this.handleClick.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(App, [{
        key: "handleClick",
        value: function handleClick() {
            this.setState(function (prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                };
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 180
                }
            }, _react2.default.createElement(Language, { onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                }
            }, this.state.isToggleOn ? 'EN' : 'TH'), _react2.default.createElement(Img, { width: "200", height: "200", src: "../static/media/my.1bda1d7a.jpg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                }
            }), _react2.default.createElement(Myname, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 183
                }
            }, "Songkran Wichitpong"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 184
                }
            }, "I'm a front-end and back-end developer from Thailand"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 185
                }
            }, "address"), " 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand."), _react2.default.createElement(Detail, { mt: "20", mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, "Email : "), "s.Wichitpong@gmail.com , ", _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 186
                }
            }, "Tel : "), "064-6099309"), _react2.default.createElement(Detail, { mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, "Website"), " : ", _react2.default.createElement(_link2.default, { href: "https://dev-songkran.github.io", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                }
            }, "https://dev-songkran.github.io"))), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 188
                }
            }, _react2.default.createElement(_link2.default, { href: "https://facebook.com/k.crono", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                }
            }, _react2.default.createElement("a", { target: "_blank", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }, _react2.default.createElement(Icon, { color: "#3b5998", className: "fa fa-facebook", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 190
                }
            }))), _react2.default.createElement(_link2.default, { href: "https://twitter.com/@dev_Songkran", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 192
                }
            }, _react2.default.createElement("a", { target: "_blank", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }, _react2.default.createElement(Icon, { color: "#00b2ff", className: "fa fa-twitter", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 193
                }
            }))), _react2.default.createElement(_link2.default, { href: "https://github.com/dev-songkran", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 195
                }
            }, _react2.default.createElement("a", { target: "_blank", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            }, _react2.default.createElement(Icon, { color: "#333333", className: "fa fa-github-alt", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                }
            })))), _react2.default.createElement(Box, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 199
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 200
                }
            }, "EDUCATION AND EXPERIENCE"), _react2.default.createElement(Timeline, { svg: "../static/svg/book.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 201
                }
            }, _react2.default.createElement(Text, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                }
            }, _react2.default.createElement(Card, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 203
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                }
            }, "Bachelor of Science"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 205
                }
            }, "University of Hatyai"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 206
                }
            }, "Songkhla"))), _react2.default.createElement(Year, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                }
            }, _react2.default.createElement(Card, { right: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 210
                }
            }, " 2011 - 2015 "))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 213
                }
            }, _react2.default.createElement(Year, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 214
                }
            }, _react2.default.createElement(Card, { left: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 215
                }
            }, " Jul 2015 - Nov 2015")), _react2.default.createElement(Text, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 217
                }
            }, _react2.default.createElement(Card, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 219
                }
            }, "Freelance"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 220
                }
            }, "Front-End Developer, Graphic Designer"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 221
                }
            }, "Hatyai")))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 225
                }
            }, _react2.default.createElement(Text, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 226
                }
            }, _react2.default.createElement(Card, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 227
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 228
                }
            }, "Chiangrai Focus"), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 229
                }
            }, "Front-End & Back-End Developer."), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 230
                }
            }, "Chiangrai"))), _react2.default.createElement(Year, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 233
                }
            }, _react2.default.createElement(Card, { right: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 234
                }
            }, " MAY 2016 - IN PROGRESS")))), _react2.default.createElement(Box, { style: { marginTop: '50px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                }
            }, "SKILLS"), _react2.default.createElement(Flex, { style: { marginBottom: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                }
            }, _react2.default.createElement(_Chart2.default, { percent: "96", skillName: "HTML5 / CSS3", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "89", skillName: "PHP", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 242
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "mySQL", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 243
                }
            })), _react2.default.createElement(Flex, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 245
                }
            }, _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "javascript / jQuery", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 246
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "40", skillName: "React.js / Next.js", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            }))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsIkxpbmsiLCJDaGFydCIsIkNvbnRhaW5lciIsImRpdiIsIkltZyIsImltZyIsIk15bmFtZSIsImgzIiwiRGV0YWlsIiwicCIsInByb3BzIiwibWIiLCJtdCIsIkljb24iLCJpIiwiY29sb3IiLCJCb3giLCJUaW1lbGluZSIsInN2ZyIsIlRleHQiLCJsZWZ0IiwicmlnaHQiLCJZZWFyIiwiQ2FyZCIsIlNraWxsIiwiRmxleCIsIkxhbmd1YWdlIiwiQXBwIiwic3RhdGUiLCJpc1RvZ2dsZU9uIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7Ozs7OztBQUNsQixJQUFNLHVDQUFBLEFBQW1CO2lCQUFuQjtBQUFBLENBQVksR0FBbEI7QUFXQSxJQUFNLGlDQUFBLEFBQWE7aUJBQWI7QUFBQSxDQUFNLEdBQVo7QUFLQSxJQUFNLG9DQUFBLEFBQWdCO2lCQUFoQjtBQUFBLENBQVMsR0FBZjtBQU9BLElBQU0sb0NBQUEsQUFBZ0I7aUJBQWhCO0FBQUEsQ0FBUyxzSkFNTSxpQkFBQTtXQUFTLE1BQUEsQUFBTSxLQUFLLE1BQVgsQUFBaUIsS0FBMUIsQUFBK0I7QUFOOUMsR0FPYSxpQkFBQTtXQUFTLE1BQUEsQUFBTSxLQUFLLE1BQVgsQUFBaUIsS0FBMUIsQUFBK0I7QUFQbEQsQUFBTTtBQWFOLElBQU0sa0NBQUEsQUFBYztpQkFBZDtBQUFBLENBQU8sdUxBTVcsaUJBQUE7V0FBUyxNQUFBLEFBQU0sUUFBUSxNQUFkLEFBQW9CLFFBQTdCLEFBQXFDO0FBTnZELEdBT08saUJBQUE7V0FBUyxNQUFBLEFBQU0s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