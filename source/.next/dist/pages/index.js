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

var Container = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-0"
})(["max-width:1200px;width:1200px;margin:0 auto;padding:40px;min-height:500px;background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,0.1);position:relative;"]);
var Img = _styledComponents2.default.img.withConfig({
    componentId: "s1agfuu7-1"
})(["display:block;margin:0 auto;border-radius:100%;"]);
var Myname = _styledComponents2.default.h3.withConfig({
    componentId: "s1agfuu7-2"
})(["margin:10px auto;display:table;font-size:25px;font-weight:400;color:#333;"]);
var Detail = _styledComponents2.default.p.withConfig({
    componentId: "s1agfuu7-3"
})(["font-size:14px;color:#111;display:table;margin:0 auto;font-weight:400;margin-bottom:", "px;margin-top:", "px;a{color:#446594;font-weight:600;}"], function (props) {
    return props.mb ? props.mb : '5';
}, function (props) {
    return props.mt ? props.mt : '0';
});
var Icon = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-4"
})(["background-image:", ";background-size:100%;height:30px;width:30px;margin:0 auto;display:inline-block;"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Box = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-5"
})(["margin-top:30px;margin-bottom:30px;border-top:1px solid #f197a3;>h3{text-align:center;font-weight:500;}"]);
var Timeline = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-6"
})(["display:flex;position:relative;margin-bottom:15px;&:after,&:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;margin:auto;}&:after{width:30px;height:30px;display:flex;border-radius:100%;border:2px solid #f197a3;padding:10px;background:#fff;background-image:", ";background-repeat:no-repeat;background-position:center;}&:before{width:2px;background:#f197a3;bottom:auto;height:120%;}"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Text = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-7"
})(["width:50%;display:flex;margin-left:", ";margin-right:", ";h3{margin:0;font-weight:400;color:#333;width:100%;}", "{color:#f197a3;margin:0;width:100%;}"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
}, Detail);

var Year = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-8"
})(["width:50%;margin-left:", ";margin-right:", ";display:flex;padding:0 15px;"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
});
var Card = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-9"
})(["padding:15px;", ";", ";&.custom{padding:5px 15px;height:40px;border:2px solid #785892;border-radius:50px;position:relative;margin-top:auto;margin-bottom:auto;color:#785892;}@media (max-width:670px){h3{font-size:14px;}p{font-size:10px;}&.custom{font-size:13px;padding:5px 10px;height:35px;font-weight:400;}}"], function (props) {
    return props.left ? "margin-left: auto; margin-right:0;text-align:right;" : "";
}, function (props) {
    return props.right ? "margin-right: auto; margin-left:0;text-align:left;" : "";
});
var Skill = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-10"
})(["margin:15px;"]);
var Flex = _styledComponents2.default.div.withConfig({
    componentId: "s1agfuu7-11"
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
            return _react2.default.createElement(Container, null, _react2.default.createElement(Img, { width: "200", height: "200", src: "../static/media/my.1bda1d7a.jpg" }), _react2.default.createElement(Myname, null, "Songkran Wichitpong"), _react2.default.createElement(Detail, null, "I'm a front-end and back-end developer from Thailand"), _react2.default.createElement(Detail, null, _react2.default.createElement("b", null, "address"), " 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand."), _react2.default.createElement(Detail, { mt: "20", mb: "10" }, _react2.default.createElement("b", null, "Email : "), "s.Wichitpong@gmail.com , ", _react2.default.createElement("b", null, "Tel : "), "064-6099309"), _react2.default.createElement(Detail, { mb: "10" }, _react2.default.createElement("b", null, "Github"), " : ", _react2.default.createElement(_link2.default, { href: "https://github.com/Dev-Songkran" }, _react2.default.createElement("a", null, "https://github.com/dev-songkran"))), _react2.default.createElement(Detail, { mb: "10" }, _react2.default.createElement("b", null, "Website"), " : ", _react2.default.createElement(_link2.default, { href: "https://dev-songkran.github.io" }, _react2.default.createElement("a", null, "https://dev-songkran.github.io"))), _react2.default.createElement(Box, null, _react2.default.createElement("h3", null, "EDUCATION AND EXPERIENCE"), _react2.default.createElement(Timeline, { svg: "../static/svg/book.svg" }, _react2.default.createElement(Text, { left: true }, _react2.default.createElement(Card, { left: true }, _react2.default.createElement("h3", null, "Bachelor of Science"), _react2.default.createElement(Detail, null, "University of Hatyai"), _react2.default.createElement(Detail, null, "Songkhla"))), _react2.default.createElement(Year, { right: true }, _react2.default.createElement(Card, { right: true, className: "custom" }, " 2011 - 2015 "))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg" }, _react2.default.createElement(Year, { left: true }, _react2.default.createElement(Card, { left: true, className: "custom" }, " Jul 2015 - Nov 2015")), _react2.default.createElement(Text, { right: true }, _react2.default.createElement(Card, { right: true }, _react2.default.createElement("h3", null, "Freelance"), _react2.default.createElement(Detail, null, "Front-End Developer, Graphic Designer"), _react2.default.createElement(Detail, null, "Hatyai")))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg" }, _react2.default.createElement(Text, { left: true }, _react2.default.createElement(Card, { left: true }, _react2.default.createElement("h3", null, "Chiangrai Focus"), _react2.default.createElement(Detail, null, "Front-End & Back-End Developer."), _react2.default.createElement(Detail, null, "Chiangrai"))), _react2.default.createElement(Year, { right: true }, _react2.default.createElement(Card, { right: true, className: "custom" }, " MAY 2016 - IN PROGRESS")))), _react2.default.createElement(Box, { style: { marginTop: '50px' } }, _react2.default.createElement("h3", null, "SKILLS"), _react2.default.createElement(Flex, null, _react2.default.createElement(_Chart2.default, { percent: "96", skillName: "HTML5 / CSS3" }), _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "Javascript" }), _react2.default.createElement(_Chart2.default, { percent: "89", skillName: "PHP" }))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;