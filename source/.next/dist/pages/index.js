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
    componentId: "s1blqoby-0"
})(["max-width:1200px;width:1200px;margin:0 auto;padding:40px;min-height:500px;background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,0.1);position:relative;"]);
var Img = _styledComponents2.default.img.withConfig({
    componentId: "s1blqoby-1"
})(["display:block;margin:0 auto;border-radius:100%;"]);
var Myname = _styledComponents2.default.h3.withConfig({
    componentId: "s1blqoby-2"
})(["margin:10px auto;display:table;font-size:25px;font-weight:400;color:#333;"]);
var Detail = _styledComponents2.default.p.withConfig({
    componentId: "s1blqoby-3"
})(["font-size:14px;color:#111;display:table;margin:0 auto;font-weight:400;margin-bottom:", "px;margin-top:", "px;a{color:#446594;font-weight:600;}"], function (props) {
    return props.mb ? props.mb : '5';
}, function (props) {
    return props.mt ? props.mt : '0';
});
var Icon = _styledComponents2.default.i.withConfig({
    componentId: "s1blqoby-4"
})(["padding:10px;width:35px;height:35px;display:inline-block;text-align:center;border-radius:100%;border:1px solid ", ";color:", ";transition:all 0.2s;margin:0 5px;&:hover{background:", ";color:#fff;}"], function (props) {
    return props.color ? props.color : '#fff';
}, function (props) {
    return props.color ? props.color : '#fff';
}, function (props) {
    return props.color ? props.color : '#fff';
});
var Box = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-5"
})(["margin-top:30px;margin-bottom:30px;border-top:1px solid #f197a3;>h3{text-align:center;font-weight:500;}"]);
var Timeline = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-6"
})(["display:flex;position:relative;margin-bottom:15px;&:after,&:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;margin:auto;}&:after{width:30px;height:30px;display:flex;border-radius:100%;border:2px solid #f197a3;padding:10px;background:#fff;background-image:", ";background-repeat:no-repeat;background-position:center;}&:before{width:2px;background:#f197a3;bottom:auto;height:120%;}"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Text = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-7"
})(["width:50%;display:flex;margin-left:", ";margin-right:", ";h3{margin:0;font-weight:400;color:#333;width:100%;}", "{color:#f197a3;margin:0;width:100%;}"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
}, Detail);

var Year = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-8"
})(["width:50%;margin-left:", ";margin-right:", ";display:flex;padding:0 15px;"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
});
var Card = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-9"
})(["padding:15px;", ";", ";&.custom{padding:5px 15px;height:40px;border:2px solid #785892;border-radius:50px;position:relative;margin-top:auto;margin-bottom:auto;color:#785892;}@media (max-width:670px){h3{font-size:14px;}p{font-size:10px;}&.custom{font-size:13px;padding:5px 10px;height:35px;font-weight:400;}}"], function (props) {
    return props.left ? "margin-left: auto; margin-right:0;text-align:right;" : "";
}, function (props) {
    return props.right ? "margin-right: auto; margin-left:0;text-align:left;" : "";
});
var Skill = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-10"
})(["margin:15px;"]);
var Flex = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-11"
})(["display:flex;align-items:center;justify-content:center"]);
var Language = _styledComponents2.default.div.withConfig({
    componentId: "s1blqoby-12"
})([""]);

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = { isToggleOn: true };
        _this.state = { TH: {
                name: 'สงกรานต์ วิชิตพงษ์',
                introduce: 'เป็น Front-end และ Back-end Developer จากประเทศไทย',
                address: { a: 'ที่อยู่', b: '263 ซ. 14 รัตนอุทิศ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110 ประเทศไทย' },
                email: 'อีเมล',
                tel: 'เบอร์โทรฯ',
                website: 'เว็บไซต์',
                ene: {
                    topic: 'การศึกษาและประสบการณ์',
                    edu: { bac: 'ปริญญาตรีสาขาวิชาวิทยาศาสตร์และเทคโนโลยี', university: 'มหาวิทยาลัยหาดใหญ่', province: 'สงขลา', year: '2554 - 2558' },
                    work: {
                        one: { at: 'รับจ้างอิสระ', position: 'รับทำเว็บไซต์, ออกแบบกราฟฟิก', year: 'กค. 2558 - พย. 2558' },
                        two: { at: 'เชียงรายโฟกัส', position: 'Front-End & Back-End Developer.', year: 'May 2016 - IN PROGRESS' }
                    }
                }
            },
            EN: {
                name: 'Songkran Wichitpong',
                introduce: "I'm a front-end and back-end developer from Thailand",
                address: { a: 'address', b: ' 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand.' },
                email: 'Email',
                tel: 'Tel',
                website: 'Website',
                ene: {
                    topic: 'EDUCATION AND EXPERIENCE',
                    edu: { bac: 'Bachelor of Science & Technology.', university: 'Hatyai University', province: 'Songkhla', year: '2011 - 2015' },
                    work: {
                        one: { at: 'Freelance', position: 'Front-End Developer, Graphic Designer', year: 'Jul 2015 - Nov 2015' },
                        two: { at: 'Chiangraifocus', position: 'Front-End & Back-End Developer.', year: 'May 2016 - IN PROGRESS' }
                    }
                }
            }
        };
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
            var _state = this.state,
                isToggleOn = _state.isToggleOn,
                TH = _state.TH,
                EN = _state.EN;

            return _react2.default.createElement(Container, null, _react2.default.createElement(Language, { onClick: this.handleClick }, isToggleOn ? 'TH' : 'EN'), _react2.default.createElement(Img, { width: "200", height: "200", src: "../static/media/my.1bda1d7a.jpg" }), _react2.default.createElement(Myname, null, isToggleOn ? TH.name : EN.name), _react2.default.createElement(Detail, null, isToggleOn ? TH.introduce : EN.introduce), _react2.default.createElement(Detail, null, _react2.default.createElement("b", null, isToggleOn ? TH.address.a : EN.address.a, " : "), isToggleOn ? TH.address.b : EN.address.b), _react2.default.createElement(Detail, { mt: "20", mb: "10" }, _react2.default.createElement("b", null, isToggleOn ? TH.email : EN.email, " : "), " s.wichitpong@gmail.com, ", _react2.default.createElement("b", null, isToggleOn ? TH.tel : EN.tel, " : "), "064-6099309"), _react2.default.createElement(Detail, { mb: "10" }, _react2.default.createElement("b", null, isToggleOn ? TH.website : EN.website, " : "), _react2.default.createElement(_link2.default, { href: "https://dev-songkran.github.io" }, _react2.default.createElement("a", null, "https://dev-songkran.github.io"))), _react2.default.createElement(Detail, null, _react2.default.createElement(_link2.default, { href: "https://facebook.com/k.crono" }, _react2.default.createElement("a", { target: "_blank" }, _react2.default.createElement(Icon, { color: "#3b5998", className: "fa fa-facebook" }))), _react2.default.createElement(_link2.default, { href: "https://twitter.com/@dev_Songkran" }, _react2.default.createElement("a", { target: "_blank" }, _react2.default.createElement(Icon, { color: "#00b2ff", className: "fa fa-twitter" }))), _react2.default.createElement(_link2.default, { href: "https://github.com/dev-songkran" }, _react2.default.createElement("a", { target: "_blank" }, _react2.default.createElement(Icon, { color: "#333333", className: "fa fa-github-alt" })))), _react2.default.createElement(Box, null, _react2.default.createElement("h3", null, isToggleOn ? TH.ene.topic : EN.ene.topic), _react2.default.createElement(Timeline, { svg: "../static/svg/book.svg" }, _react2.default.createElement(Text, { left: true }, _react2.default.createElement(Card, { left: true }, _react2.default.createElement("h3", null, isToggleOn ? TH.ene.edu.bac : EN.ene.edu.bac), _react2.default.createElement(Detail, null, isToggleOn ? TH.ene.edu.university : EN.ene.edu.university), _react2.default.createElement(Detail, null, isToggleOn ? TH.ene.edu.province : EN.ene.edu.province))), _react2.default.createElement(Year, { right: true }, _react2.default.createElement(Card, { right: true, className: "custom" }, " ", isToggleOn ? TH.ene.edu.year : EN.ene.edu.year, " "))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg" }, _react2.default.createElement(Year, { left: true }, _react2.default.createElement(Card, { left: true, className: "custom" }, " Jul 2015 - Nov 2015")), _react2.default.createElement(Text, { right: true }, _react2.default.createElement(Card, { right: true }, _react2.default.createElement("h3", null, "Freelance"), _react2.default.createElement(Detail, null, "Front-End Developer, Graphic Designer"), _react2.default.createElement(Detail, null, "Hatyai")))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg" }, _react2.default.createElement(Text, { left: true }, _react2.default.createElement(Card, { left: true }, _react2.default.createElement("h3", null, "Chiangrai Focus"), _react2.default.createElement(Detail, null, "Front-End & Back-End Developer."), _react2.default.createElement(Detail, null, "Chiangrai"))), _react2.default.createElement(Year, { right: true }, _react2.default.createElement(Card, { right: true, className: "custom" }, " MAY 2016 - IN PROGRESS")))), _react2.default.createElement(Box, { style: { marginTop: '50px' } }, _react2.default.createElement("h3", null, "SKILLS"), _react2.default.createElement(Flex, { style: { marginBottom: '30px' } }, _react2.default.createElement(_Chart2.default, { percent: "96", skillName: "HTML5 / CSS3" }), _react2.default.createElement(_Chart2.default, { percent: "89", skillName: "PHP" }), _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "mySQL" })), _react2.default.createElement(Flex, null, _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "javascript / jQuery" }), _react2.default.createElement(_Chart2.default, { percent: "40", skillName: "React.js / Next.js" }))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;