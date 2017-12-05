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

var _portfolio = require("../components/portfolio");

var _portfolio2 = _interopRequireDefault(_portfolio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "D:\\github\\dev-songkran.github.io\\source\\pages\\index.js?entry";

var Container = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-0"
})(["max-width:1200px;width:1200px;margin:0 auto;padding:40px;min-height:500px;background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,0.1);position:relative;"]);
var Img = _styledComponents2.default.img.withConfig({
    componentId: "jd26px-1"
})(["display:block;margin:0 auto;border-radius:100%;"]);
var Myname = _styledComponents2.default.h3.withConfig({
    componentId: "jd26px-2"
})(["margin:10px auto;display:table;font-size:25px;font-weight:400;color:#333;"]);
var Detail = _styledComponents2.default.p.withConfig({
    componentId: "jd26px-3"
})(["font-size:14px;color:#111;display:table;margin:0 auto;font-weight:400;margin-bottom:", "px;margin-top:", "px;a{color:#446594;font-weight:600;}"], function (props) {
    return props.mb ? props.mb : '5';
}, function (props) {
    return props.mt ? props.mt : '0';
});
var Icon = _styledComponents2.default.i.withConfig({
    componentId: "jd26px-4"
})(["padding:10px;width:35px;height:35px;display:inline-block;text-align:center;border-radius:100%;border:1px solid ", ";color:", ";transition:all 0.2s;margin:0 5px;&:hover{background:", ";color:#fff;}"], function (props) {
    return props.color ? props.color : '#fff';
}, function (props) {
    return props.color ? props.color : '#fff';
}, function (props) {
    return props.color ? props.color : '#fff';
});
var Box = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-5"
})(["margin-top:30px;margin-bottom:30px;border-top:1px solid #f197a3;>h3{text-align:center;font-weight:500;}"]);
var Timeline = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-6"
})(["display:flex;position:relative;margin-bottom:15px;&:after,&:before{content:'';position:absolute;left:0;right:0;bottom:0;top:0;margin:auto;}&:after{width:30px;height:30px;display:flex;border-radius:100%;border:2px solid #f197a3;padding:10px;background:#fff;background-image:", ";background-repeat:no-repeat;background-position:center;}&:before{width:2px;background:#f197a3;bottom:auto;height:120%;}"], function (props) {
    return props.svg ? "url(" + props.svg + ")" : "url('')";
});
var Text = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-7"
})(["width:50%;display:flex;margin-left:", ";margin-right:", ";h3{margin:0;font-weight:400;color:#333;width:100%;}", "{color:#f197a3;margin:0;width:100%;}"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
}, Detail);

var Year = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-8"
})(["width:50%;margin-left:", ";margin-right:", ";display:flex;padding:0 15px;"], function (props) {
    return props.left ? 'auto' : '30px';
}, function (props) {
    return props.right ? 'auto' : '30px';
});
var Card = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-9"
})(["padding:15px;", ";", ";&.custom{padding:5px 15px;height:40px;border:2px solid #785892;border-radius:50px;position:relative;margin-top:auto;margin-bottom:auto;color:#785892;}@media (max-width:670px){h3{font-size:14px;}p{font-size:10px;}&.custom{font-size:13px;padding:5px 10px;height:35px;font-weight:400;}}"], function (props) {
    return props.left ? "margin-left: auto; margin-right:0;text-align:right;" : "";
}, function (props) {
    return props.right ? "margin-right: auto; margin-left:0;text-align:left;" : "";
});
var Skill = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-10"
})(["margin:15px;"]);
var Flex = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-11"
})(["display:flex;align-items:center;justify-content:center"]);
var Language = _styledComponents2.default.div.withConfig({
    componentId: "jd26px-12"
})(["position:fixed;right:20px;padding:10px;border:1px solid #f197a3;border-radius:100%;background:#fff;height:40px;width:40px;line-height:18px;transition:all 0.2s;cursor:pointer;box-shadow:1px 1px 2px rgba(0,0,0,0.2);z-index:999999999;&:hover{background:#f197a3;color:#fff;}"]);

var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);

    function App(props) {
        (0, _classCallCheck3.default)(this, App);

        var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

        _this.state = { isToggleOn: true };
        _this.state = { TH: {
                name: 'สงกรานต์ วิชิตพงษ์',
                date_of_birth: { topic: 'วันเกิด : ', date: '13 เมษายน 2534' },
                age: { topic: 'อายุ : ', year: 'ปี' },
                personality: { topic: 'บุคลิกภาพ : ', detail: 'ชอบเรียนรู้สิ่งใหม่ ๆ , มีความรับผิดชอบ , เป็นกันเอง' },
                hw: '176 ซม. / 75 กิโลกรัม',
                introduce: 'เป็น Front-end และ Back-end Developer จากประเทศไทย',
                address: { a: 'ที่อยู่', b: '263 ซ. 14 รัตนอุทิศ ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา 90110 ประเทศไทย' },
                email: 'อีเมล',
                tel: 'เบอร์โทรฯ',
                website: 'เว็บไซต์',
                ene: {
                    topic: 'การศึกษาและประสบการณ์',
                    edu: { bac: 'ปริญญาตรีสาขาวิชาวิทยาศาสตร์และเทคโนโลยี', university: 'มหาวิทยาลัยหาดใหญ่', province: 'สงขลา', year: '2554 - 2558' },
                    work: {
                        1: { job: 'รับจ้างอิสระ', position: 'รับทำเว็บไซต์, ออกแบบกราฟฟิก', year: 'กค. 2558 - พย. 2558', at: 'สงขลา' },
                        2: { job: 'เชียงรายโฟกัส', position: 'Front-End & Back-End Developer.', year: 'พค. 2559 - ปัจจุบัน', at: 'เชียงราย' }
                    }
                },
                skill: 'ความสามารถ'
            },
            EN: {
                name: 'Songkran Wichitpong',
                date_of_birth: { topic: 'Date of Birth : ', date: '13 April 1991' },
                age: { topic: 'Age : ', year: 'years old' },
                personality: { topic: 'Personality : ', detail: 'like to learn new things, Responsible , Friendly' },
                hw: '176cm / 75kgs.',
                introduce: "I'm a front-end and back-end developer from Thailand",
                address: { a: 'Address', b: ' 263 , 14 Lane , Rattana Uthit Rd., Hatyai Sub-district, Hatyai District, Songkhla, 90110 ,Thailand.' },
                email: 'Email',
                tel: 'Tel',
                website: 'Website',
                ene: {
                    topic: 'EDUCATION AND EXPERIENCE',
                    edu: { bac: 'Bachelor of Science & Technology.', university: 'Hatyai University', province: 'Songkhla', year: '2011 - 2015' },
                    work: {
                        1: { job: 'Freelance', position: 'Front-End Developer, Graphic Designer', year: 'Jul 2015 - Nov 2015', at: 'Songkhla' },
                        2: { job: 'Chiangraifocus', position: 'Front-End & Back-End Developer.', year: 'May 2016 - IN PROGRESS', at: 'Chiangrai' }
                    }
                },
                skill: 'SKILLS'
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

            var date = new Date();
            var year = date.getFullYear();
            return _react2.default.createElement(Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 247
                }
            }, _react2.default.createElement(Language, { onClick: this.handleClick, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 248
                }
            }, isToggleOn ? 'TH' : 'EN'), _react2.default.createElement(Img, { width: "200", height: "200", src: "../static/media/my.1bda1d7a.jpg?310000", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 249
                }
            }), _react2.default.createElement(Myname, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 250
                }
            }, isToggleOn ? TH.name : EN.name), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 251
                }
            }, isToggleOn ? TH.introduce : EN.introduce), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, isToggleOn ? TH.date_of_birth.topic : EN.date_of_birth.topic), " ", isToggleOn ? TH.date_of_birth.date : EN.date_of_birth.date, " , ", _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 252
                }
            }, isToggleOn ? TH.age.topic : EN.age.topic), " ", year - 1991 + " " + (isToggleOn ? TH.age.year : EN.age.year), " "), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 253
                }
            }, isToggleOn ? TH.personality.topic : EN.personality.topic), " ", isToggleOn ? TH.personality.detail : EN.personality.detail), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 254
                }
            }, isToggleOn ? TH.address.a : EN.address.a, " : "), isToggleOn ? TH.address.b : EN.address.b), _react2.default.createElement(Detail, { mt: "20", mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }, isToggleOn ? TH.email : EN.email, " : "), " s.wichitpong@gmail.com, ", _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                }
            }, isToggleOn ? TH.tel : EN.tel, " : "), "064-6099309"), _react2.default.createElement(Detail, { mb: "10", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, _react2.default.createElement("b", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, isToggleOn ? TH.website : EN.website, " : "), _react2.default.createElement(_link2.default, { href: "https://dev-songkran.github.io", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 256
                }
            }, "https://dev-songkran.github.io"))), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 257
                }
            }, _react2.default.createElement(_link2.default, { href: "https://facebook.com/k.crono", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 258
                }
            }, _react2.default.createElement("a", { target: "_blank", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                }
            }, _react2.default.createElement(Icon, { color: "#3b5998", className: "fa fa-facebook", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 259
                }
            }))), _react2.default.createElement(_link2.default, { href: "https://twitter.com/@dev_Songkran", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 261
                }
            }, _react2.default.createElement("a", { target: "_blank", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                }
            }, _react2.default.createElement(Icon, { color: "#00b2ff", className: "fa fa-twitter", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 262
                }
            }))), _react2.default.createElement(_link2.default, { href: "https://github.com/dev-songkran", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 264
                }
            }, _react2.default.createElement("a", { target: "_blank", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 265
                }
            }, _react2.default.createElement(Icon, { color: "#333333", className: "fa fa-github-alt", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 265
                }
            })))), _react2.default.createElement(Box, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 268
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 269
                }
            }, isToggleOn ? TH.ene.topic : EN.ene.topic), _react2.default.createElement(Timeline, { svg: "../static/svg/book.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 270
                }
            }, _react2.default.createElement(Text, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 271
                }
            }, _react2.default.createElement(Card, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 272
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 273
                }
            }, isToggleOn ? TH.ene.edu.bac : EN.ene.edu.bac), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 274
                }
            }, isToggleOn ? TH.ene.edu.university : EN.ene.edu.university), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 275
                }
            }, isToggleOn ? TH.ene.edu.province : EN.ene.edu.province))), _react2.default.createElement(Year, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 278
                }
            }, _react2.default.createElement(Card, { right: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 279
                }
            }, " ", isToggleOn ? TH.ene.edu.year : EN.ene.edu.year, " "))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 282
                }
            }, _react2.default.createElement(Year, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 283
                }
            }, _react2.default.createElement(Card, { left: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 284
                }
            }, " ", isToggleOn ? TH.ene.work[1].year : EN.ene.work[1].year)), _react2.default.createElement(Text, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 286
                }
            }, _react2.default.createElement(Card, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 287
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 288
                }
            }, isToggleOn ? TH.ene.work[1].job : EN.ene.work[1].job), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 289
                }
            }, isToggleOn ? TH.ene.work[1].position : EN.ene.work[1].position), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 290
                }
            }, isToggleOn ? TH.ene.work[1].at : EN.ene.work[1].at)))), _react2.default.createElement(Timeline, { svg: "../static/svg/coffe.svg", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 294
                }
            }, _react2.default.createElement(Text, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 295
                }
            }, _react2.default.createElement(Card, { left: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 297
                }
            }, isToggleOn ? TH.ene.work[2].job : EN.ene.work[2].job), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 298
                }
            }, isToggleOn ? TH.ene.work[2].position : EN.ene.work[2].position), _react2.default.createElement(Detail, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 299
                }
            }, isToggleOn ? TH.ene.work[2].at : EN.ene.work[2].at))), _react2.default.createElement(Year, { right: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 302
                }
            }, _react2.default.createElement(Card, { right: true, className: "custom", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 303
                }
            }, " ", isToggleOn ? TH.ene.work[2].year : EN.ene.work[2].year)))), _react2.default.createElement(Box, { style: { marginTop: '50px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 307
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 308
                }
            }, isToggleOn ? TH.skill : EN.skill), _react2.default.createElement(Flex, { style: { marginBottom: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 309
                }
            }, _react2.default.createElement(_Chart2.default, { percent: "96", skillName: "HTML5 / CSS3", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 310
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "89", skillName: "PHP", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 311
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "mySQL", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 312
                }
            })), _react2.default.createElement(Flex, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 314
                }
            }, _react2.default.createElement(_Chart2.default, { percent: "85", skillName: "javascript / jQuery", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 315
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "60", skillName: "Google API", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 316
                }
            }), _react2.default.createElement(_Chart2.default, { percent: "40", skillName: "React.js / Next.js", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 317
                }
            }))));
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInN0eWxlZCIsIkxpbmsiLCJDaGFydCIsIlBvcnRmb2xpbyIsIkNvbnRhaW5lciIsImRpdiIsIkltZyIsImltZyIsIk15bmFtZSIsImgzIiwiRGV0YWlsIiwicCIsInByb3BzIiwibWIiLCJtdCIsIkljb24iLCJpIiwiY29sb3IiLCJCb3giLCJUaW1lbGluZSIsInN2ZyIsIlRleHQiLCJsZWZ0IiwicmlnaHQiLCJZZWFyIiwiQ2FyZCIsIlNraWxsIiwiRmxleCIsIkxhbmd1YWdlIiwiQXBwIiwic3RhdGUiLCJpc1RvZ2dsZU9uIiwiVEgiLCJuYW1lIiwiZGF0ZV9vZl9iaXJ0aCIsInRvcGljIiwiZGF0ZSIsImFnZSIsInllYXIiLCJwZXJzb25hbGl0eSIsImRldGFpbCIsImh3IiwiaW50cm9kdWNlIiwiYWRkcmVzcyIsImEiLCJiIiwiZW1haWwiLCJ0ZWwiLCJ3ZWJzaXRlIiwiZW5lIiwiZWR1IiwiYmFjIiwidW5pdmVyc2l0eSIsInByb3ZpbmNlIiwid29yayIsImpvYiIsInBvc2l0aW9uIiwiYXQiLCJza2lsbCIsIkVOIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBZTs7Ozs7Ozs7QUFDdEIsSUFBTSx1Q0FBQSxBQUFtQjtpQkFBbkI7QUFBQSxDQUFZLEdBQWxCO0FBV0EsSUFBTSxpQ0FBQSxBQUFhO2lCQUFiO0FBQUEsQ0FBTSxHQUFaO0FBS0EsSUFBTSxvQ0FBQSxBQUFnQjtpQkFBaEI7QUFBQSxDQUFTLEdBQWY7QUFPQSxJQUFNLG9DQUFBLEFBQWdCO2lCQUFoQjtBQUFBLENBQVMsc0pBTU0saUJBQUE7V0FBUyxNQUFBLEFBQU0sS0FBSyxNQUFYLEFBQWlCLEtBQTFCLEFBQStCO0FBTjlDLEdBT2EsaUJBQUE7V0FBUyxNQUFBLEFBQU0sS0FBSyxNQUFYLEFBQWlCLEtBQTFCLEFBQStCO0FBUGxELEFBQU07QUFhTixJQUFNLGtDQUFBLEFBQWM7aUJBQWQ7QUFBQSxDQUFPLDRNQU9XLGlCQUFBO1dBQVMsTUFBQSxBQUFNLFFBQVEsTUFBZCxBQUFvQixRQUE3QixBQUFxQztBQVB2RCxHQVFPLGlCQUFBO1dBQVMsTUFBQSxBQUFNLFFBQVEsTUFBZCxBQUFvQixRQUE3QixBQUFxQztBQVI1QyxHQWFnQixpQkFBQTtXQUFTLE1BQUEsQUFBTSxRQUFRLE1BQWQsQUFBb0IsUUFBN0IsQUFBcUM7QUFiM0QsQUFBTTtBQWlCTixJQUFNLGlDQUFBLEFBQWE7aUJBQWI7QUFBQSxDQUFNLEdBQVo7QUFTQSxJQUFNLHNDQUFBLEFBQWtCO2lCQUFsQjtBQUFBLENBQVcscVpBcUJXLGlCQUFBO1dBQVMsTUFBQSxBQUFNLGVBQWEsTUFBbkIsQUFBeUIsWUFBbEM7QUFyQjVCLEFBQU07QUFnQ04sSUFBTSxrQ0FBQSxBQUFjO2lCQUFkO0FBQUEsQ0FBTyw2SkFHTSxpQkFBQTtXQUFTLE1BQUEsQUFBTSxPQUFOLEFBQVksU0FBckIsQUFBOEI7QUFIM0MsR0FJYyxpQkFBQTtXQUFTLE1BQUEsQUFBTSxRQUFOLEFBQWEsU0FBdEIsQUFBK0I7QUFKN0MsR0FBTixBQUFNLEFBWUE7O0FBUU4sSUFBTSxrQ0FBQSxBQUFjO2lCQUFkO0FBQUEsQ0FBTyxpRkFFTSxpQkFBQTtXQUFTLE1BQUEsQUFBTSxPQUFOLEFBQVksU0FBckIsQUFBOEI7QUFGM0MsR0FHYyxpQkFBQTtXQUFTLE1BQUEsQUFBTSxRQUFOLEFBQWEsU0FBdEIsQUFBK0I7QUFIbkQsQUFBTTtBQVFOLElBQU0sa0NBQUEsQUFBYztpQkFBZDtBQUFBLENBQU8sMFRBRVAsaUJBQUE7V0FBUyxNQUFBLEFBQU0sK0RBQWY7QUFGQSxHQUdBLGlCQUFBO1dBQVMsTUFBQSxBQUFNLCtEQUFmO0FBSE4sQUFBTTtBQThCTixJQUFNLG1DQUFBLEFBQWU7aUJBQWY7QUFBQSxDQUFRLEdBQWQ7QUFJQSxJQUFNLGtDQUFBLEFBQWM7aUJBQWQ7QUFBQSxDQUFPLEdBQWI7QUFLQSxJQUFNLHNDQUFBLEFBQWtCO2lCQUFsQjtBQUFBLENBQVcsR0FBakI7O0lBbUJNLEE7aUNBQ0Y7O2lCQUFBLEFBQVksT0FBTzs0Q0FBQTs7b0lBQUEsQUFDWCxBQUNOOztjQUFBLEFBQUssUUFBUSxFQUFDLFlBQWQsQUFBYSxBQUFhLEFBQzFCO2NBQUEsQUFBSyxVQUFTO3NCQUNJLEFBQ1UsQUFDTjsrQkFBZ0IsRUFBRSxPQUFGLEFBQVMsY0FBYyxNQUYzQyxBQUVvQixBQUE0QixBQUM1QztxQkFBTSxFQUFDLE9BQUQsQUFBTyxXQUFVLE1BSDNCLEFBR1UsQUFBdUIsQUFDN0I7NkJBQWMsRUFBQyxPQUFELEFBQU8sZ0JBQWUsUUFKeEMsQUFJa0IsQUFBNkIsQUFDM0M7b0JBTEosQUFLUyxBQUNMOzJCQU5KLEFBTWUsQUFDWDt5QkFBUyxFQUFFLEdBQUYsQUFBSyxXQUFXLEdBUDdCLEFBT2EsQUFBa0IsQUFDM0I7dUJBUkosQUFRVyxBQUNQO3FCQVRKLEFBU1MsQUFDTDt5QkFWSixBQVVjLEFBQ1Y7OzJCQUFNLEFBQ1UsQUFDUjt5QkFBTSxFQUFFLEtBQUYsQUFBTSw0Q0FBMkMsWUFBakQsQUFBNEQsc0JBQXFCLFVBQWpGLEFBQTBGLFNBQVEsTUFGMUcsQUFFUSxBQUF1RyxBQUM3Rzs7MkJBQ2dCLEVBQUMsS0FBRCxBQUFNLGdCQUFlLFVBQXJCLEFBQThCLGdDQUErQixNQUE3RCxBQUFvRSx1QkFBc0IsSUFEbkcsQUFDUyxBQUE2RixBQUNqRzsyQkFBSSxFQUFDLEtBQUQsQUFBSyxpQkFBZ0IsVUFBckIsQUFBOEIsbUNBQWtDLE1BQWhFLEFBQXVFLHVCQUFzQixJQWhCekgsQUFXVSxBQUdTLEFBRVMsQUFBZ0csQUFHeEg7QUFMZSxBQUNLO0FBSmQsQUFDRTt1QkFiakIsQUFDSyxBQW1CWSxBQUVoQjtBQXJCSSxBQUNJOztzQkFxQkosQUFDVyxBQUNQOytCQUFnQixFQUFFLE9BQUYsQUFBUyxvQkFBb0IsTUFGakQsQUFFb0IsQUFBa0MsQUFDbEQ7cUJBQU0sRUFBQyxPQUFELEFBQVEsVUFBUyxNQUgzQixBQUdVLEFBQXVCLEFBQzdCOzZCQUFhLEVBQUMsT0FBRCxBQUFRLGtCQUFtQixRQUo1QyxBQUlpQixBQUFrQyxBQUMvQztvQkFMSixBQUtTLEFBQ0w7MkJBTkosQUFNZSxBQUNYO3lCQUFVLEVBQUMsR0FBRCxBQUFHLFdBQVUsR0FQM0IsQUFPYyxBQUFlLEFBQ3pCO3VCQVJKLEFBUVcsQUFDUDtxQkFUSixBQVNTLEFBQ0w7eUJBVkosQUFVYyxBQUNWOzsyQkFBTSxBQUNVLEFBQ1I7eUJBQU0sRUFBRSxLQUFGLEFBQU0scUNBQW9DLFlBQTFDLEFBQXFELHFCQUFvQixVQUF6RSxBQUFrRixZQUFXLE1BRnJHLEFBRVEsQUFBa0csQUFDeEc7OzJCQUNnQixFQUFFLEtBQUYsQUFBTSxhQUFZLFVBQWxCLEFBQTJCLHlDQUF3QyxNQUFuRSxBQUEwRSx1QkFBc0IsSUFEekcsQUFDUyxBQUFtRyxBQUN2RzsyQkFBSSxFQUFFLEtBQUYsQUFBTSxrQkFBaUIsVUFBdkIsQUFBZ0MsbUNBQWtDLE1BQWxFLEFBQXlFLDBCQUF5QixJQWhCOUgsQUFXVSxBQUdTLEFBRVMsQUFBcUcsQUFHN0g7QUFMZSxBQUNLO0FBSmQsQUFDRTt1QkFuQzlCLEFBQWEsQUF1QkssQUFtQlksQUFHOUI7QUF0QmtCLEFBQ0k7QUF4QlQ7Y0E2Q2IsQUFBSyxjQUFjLE1BQUEsQUFBSyxZQUFMLEFBQWlCLEtBaERuQixBQWdEakI7ZUFDRDs7Ozs7c0NBQ2EsQUFDWjtpQkFBQSxBQUFLLFNBQVMscUJBQUE7O2dDQUNBLENBQUMsVUFERCxBQUFjLEFBQ0g7QUFERyxBQUMxQjtBQURGLEFBR0Q7Ozs7aUNBQ087eUJBQ3VCLEtBRHZCLEFBQzRCO2dCQUQ1QixBQUNHLG9CQURILEFBQ0c7Z0JBREgsQUFDYyxZQURkLEFBQ2M7Z0JBRGQsQUFDaUIsWUFEakIsQUFDaUIsQUFDckI7O2dCQUFNLE9BQU8sSUFBYixBQUFhLEFBQUksQUFDakI7Z0JBQU0sT0FBTyxLQUFiLEFBQWEsQUFBSyxBQUNsQjttQ0FDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNLLGNBQUQsWUFBVSxTQUFTLEtBQW5CLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUFzQztBQUF0Qzs0QkFBc0MsQUFBYSxPQUR2RCxBQUNJLEFBQTBELEFBQzFELHFDQUFBLEFBQUMsT0FBSSxPQUFMLEFBQVcsT0FBTSxRQUFqQixBQUF3QixPQUFNLEtBQTlCLEFBQWtDOzhCQUFsQztnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFTO0FBQVQ7QUFBQSw0QkFBc0IsR0FBYixBQUFnQixPQUFPLEdBSHBDLEFBR0ksQUFBbUMsQUFDbkMsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBUztBQUFUO0FBQUEsNEJBQXNCLEdBQWIsQUFBZ0IsWUFBWSxHQUp6QyxBQUlJLEFBQXdDLEFBQ3hDLDRCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQVE7QUFBUjtBQUFBLCtCQUFRLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLDRCQUFpQixHQUFBLEFBQUcsY0FBaEIsQUFBOEIsUUFBUSxHQUFBLEFBQUcsY0FBckQsQUFBUSxBQUEyRCxRQUFZLGtCQUFhLEdBQUEsQUFBRyxjQUFoQixBQUE4QixPQUFPLEdBQUEsQUFBRyxjQUF2SCxBQUFxSSxNQUFRLHVCQUFBLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUk7QUFBSjtBQUFBLDRCQUFpQixHQUFBLEFBQUcsSUFBaEIsQUFBb0IsUUFBUSxHQUFBLEFBQUcsSUFBaEwsQUFBNkksQUFBdUMsUUFBZSxZQUFuTSxBQUF3TSxjQUFRLGFBQWEsR0FBQSxBQUFHLElBQWhCLEFBQW9CLE9BQU8sR0FBQSxBQUFHLElBQTlPLEFBQWtQLE9BTHRQLEFBS0ksQUFDQSxzQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFRO0FBQVI7QUFBQSwrQkFBUSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSw0QkFBaUIsR0FBQSxBQUFHLFlBQWhCLEFBQTRCLFFBQVEsR0FBQSxBQUFHLFlBQW5ELEFBQVEsQUFBdUQsUUFBWSxrQkFBYSxHQUFBLEFBQUcsWUFBaEIsQUFBNEIsU0FBUyxHQUFBLEFBQUcsWUFOdkgsQUFNSSxBQUErSCxBQUMvSCx5QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFRO0FBQVI7QUFBQSwrQkFBUSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSw0QkFBaUIsR0FBQSxBQUFHLFFBQWhCLEFBQXdCLElBQUksR0FBQSxBQUFHLFFBQW5DLEFBQTJDLEdBQW5ELEFBQVEsQUFBcUQscUJBQWEsR0FBQSxBQUFHLFFBQWhCLEFBQXdCLElBQUksR0FBQSxBQUFHLFFBUGhHLEFBT0ksQUFBb0csQUFDcEcsb0JBQUMsY0FBRCxVQUFRLElBQVIsQUFBVyxNQUFLLElBQWhCLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUF3QjtBQUF4QjsrQkFBd0IsY0FBQTs7OEJBQUE7Z0NBQUEsQUFBSTtBQUFKO0FBQUEsNEJBQWlCLEdBQWIsQUFBZ0IsUUFBUSxHQUE1QixBQUErQixPQUF2RCxBQUF3QixRQUFxRSw2Q0FBQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSw0QkFBaUIsR0FBYixBQUFnQixNQUFNLEdBQTFCLEFBQTZCLEtBQTFILEFBQTZGLFFBUmpHLEFBUUksQUFDQSxnQ0FBQyxjQUFELFVBQVEsSUFBUixBQUFXOzhCQUFYO2dDQUFBLEFBQWdCO0FBQWhCOytCQUFnQixjQUFBOzs4QkFBQTtnQ0FBQSxBQUFJO0FBQUo7QUFBQSw0QkFBaUIsR0FBYixBQUFnQixVQUFVLEdBQTlCLEFBQWlDLFNBQWpELEFBQWdCLEFBQWdELHdCQUFBLEFBQUMsZ0NBQUssTUFBTixBQUFXOzhCQUFYO2dDQUFBLEFBQTRDO0FBQTVDOytCQUE0QyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFUaEgsQUFTSSxBQUFnRSxBQUE0QyxBQUM1RyxxREFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLFFBQUgsQUFBVTs4QkFBVjtnQ0FBQSxBQUFtQjtBQUFuQjs2Q0FBbUIsQUFBQyxRQUFLLE9BQU4sQUFBWSxXQUFVLFdBQXRCLEFBQWdDOzhCQUFoQztnQ0FGM0IsQUFDSSxBQUNJLEFBQW1CLEFBRXZCO0FBRnVCO2tDQUV2QixBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLFFBQUgsQUFBVTs4QkFBVjtnQ0FBQSxBQUFtQjtBQUFuQjs2Q0FBbUIsQUFBQyxRQUFLLE9BQU4sQUFBWSxXQUFVLFdBQXRCLEFBQWdDOzhCQUFoQztnQ0FMM0IsQUFJSSxBQUNJLEFBQW1CLEFBRXZCO0FBRnVCO2tDQUV2QixBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxPQUFHLFFBQUgsQUFBVTs4QkFBVjtnQ0FBQSxBQUFtQjtBQUFuQjs2Q0FBbUIsQUFBQyxRQUFLLE9BQU4sQUFBWSxXQUFVLFdBQXRCLEFBQWdDOzhCQUFoQztnQ0FsQi9CLEFBVUksQUFPSSxBQUNJLEFBQW1CLEFBRzNCO0FBSDJCO21DQUcxQixjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSw0QkFBa0IsR0FBQSxBQUFHLElBQWhCLEFBQW9CLFFBQVEsR0FBQSxBQUFHLElBRHhDLEFBQ0ksQUFBd0MsQUFDeEMsd0JBQUMsY0FBRCxZQUFVLEtBQVYsQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxRQUFNLE1BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsUUFBTSxNQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSw0QkFBa0IsR0FBQSxBQUFHLElBQUgsQUFBTyxJQUFwQixBQUF3QixNQUFNLEdBQUEsQUFBRyxJQUFILEFBQU8sSUFEOUMsQUFDSSxBQUE4QyxBQUM5QyxzQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFTO0FBQVQ7QUFBQSw0QkFBc0IsR0FBQSxBQUFHLElBQUgsQUFBTyxJQUFwQixBQUF3QixhQUFhLEdBQUEsQUFBRyxJQUFILEFBQU8sSUFGekQsQUFFSSxBQUF5RCxBQUN6RCw2QkFBQyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUFTO0FBQVQ7QUFBQSw0QkFBc0IsR0FBQSxBQUFHLElBQUgsQUFBTyxJQUFwQixBQUF3QixXQUFXLEdBQUEsQUFBRyxJQUFILEFBQU8sSUFML0QsQUFDSSxBQUNJLEFBR0ksQUFBdUQsQUFHL0QsNkJBQUMsY0FBRCxRQUFNLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsUUFBTSxPQUFOLE1BQVksV0FBWixBQUFzQjs4QkFBdEI7Z0NBQUE7QUFBQTtlQUFpQyxrQkFBYSxHQUFBLEFBQUcsSUFBSCxBQUFPLElBQXBCLEFBQXdCLE9BQU8sR0FBQSxBQUFHLElBQUgsQUFBTyxJQUF2RSxBQUEyRSxNQVh2RixBQUVJLEFBUUksQUFDSSxBQUdSLHdCQUFDLGNBQUQsWUFBVSxLQUFWLEFBQWM7OEJBQWQ7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsUUFBTSxNQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELFFBQU0sTUFBTixNQUFXLFdBQVgsQUFBcUI7OEJBQXJCO2dDQUFBO0FBQUE7ZUFBZ0Msa0JBQWEsR0FBQSxBQUFHLElBQUgsQUFBTyxLQUFQLEFBQVksR0FBekIsQUFBNEIsT0FBTyxHQUFBLEFBQUcsSUFBSCxBQUFPLEtBQVAsQUFBWSxHQUZ2RixBQUNJLEFBQ0ksQUFBa0YsQUFFdEYsd0JBQUMsY0FBRCxRQUFNLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsUUFBTSxPQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSw0QkFBa0IsR0FBQSxBQUFHLElBQUgsQUFBTyxLQUFQLEFBQVksR0FBekIsQUFBNEIsTUFBTSxHQUFBLEFBQUcsSUFBSCxBQUFPLEtBQVAsQUFBWSxHQUR2RCxBQUNJLEFBQXNELEFBQ3RELHNCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQVM7QUFBVDtBQUFBLDRCQUFzQixHQUFBLEFBQUcsSUFBSCxBQUFPLEtBQVAsQUFBWSxHQUF6QixBQUE0QixXQUFXLEdBQUEsQUFBRyxJQUFILEFBQU8sS0FBUCxBQUFZLEdBRmhFLEFBRUksQUFBK0QsQUFDL0QsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBUztBQUFUO0FBQUEsNEJBQXNCLEdBQUEsQUFBRyxJQUFILEFBQU8sS0FBUCxBQUFZLEdBQXpCLEFBQTRCLEtBQUssR0FBQSxBQUFHLElBQUgsQUFBTyxLQUFQLEFBQVksR0F0QnRFLEFBY0ksQUFJSSxBQUNJLEFBR0ksQUFBeUQsQUFJckUsd0JBQUMsY0FBRCxZQUFVLEtBQVYsQUFBYzs4QkFBZDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxRQUFNLE1BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsUUFBTSxNQUFOOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFLO0FBQUw7QUFBQSw0QkFBa0IsR0FBQSxBQUFHLElBQUgsQUFBTyxLQUFQLEFBQVksR0FBekIsQUFBNEIsTUFBTSxHQUFBLEFBQUcsSUFBSCxBQUFPLEtBQVAsQUFBWSxHQUR2RCxBQUNJLEFBQXNELEFBQ3RELHNCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQVM7QUFBVDtBQUFBLDRCQUFzQixHQUFBLEFBQUcsSUFBSCxBQUFPLEtBQVAsQUFBWSxHQUF6QixBQUE0QixXQUFXLEdBQUEsQUFBRyxJQUFILEFBQU8sS0FBUCxBQUFZLEdBRmhFLEFBRUksQUFBK0QsQUFDL0QsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFBUztBQUFUO0FBQUEsNEJBQXNCLEdBQUEsQUFBRyxJQUFILEFBQU8sS0FBUCxBQUFZLEdBQXpCLEFBQTRCLEtBQUssR0FBQSxBQUFHLElBQUgsQUFBTyxLQUFQLEFBQVksR0FMbEUsQUFDSSxBQUNJLEFBR0ksQUFBeUQsQUFHakUsdUJBQUMsY0FBRCxRQUFNLE9BQU47OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsUUFBTSxPQUFOLE1BQVksV0FBWixBQUFzQjs4QkFBdEI7Z0NBQUE7QUFBQTtlQUFpQyxrQkFBYSxHQUFBLEFBQUcsSUFBSCxBQUFPLEtBQVAsQUFBWSxHQUF6QixBQUE0QixPQUFPLEdBQUEsQUFBRyxJQUFILEFBQU8sS0FBUCxBQUFZLEdBeERoRyxBQXFCSSxBQTBCSSxBQVFJLEFBQ0ksQUFBbUYsQUFJL0YsMEJBQUMsY0FBRCxPQUFLLE9BQU8sRUFBQyxXQUFiLEFBQVksQUFBWTs4QkFBeEI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQUs7QUFBTDtBQUFBLDRCQUFrQixHQUFiLEFBQWdCLFFBQVEsR0FEakMsQUFDSSxBQUFnQyxBQUNoQyx3QkFBQyxjQUFELFFBQU0sT0FBTyxFQUFDLGNBQWQsQUFBYSxBQUFjOzhCQUEzQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyxpQ0FBTSxTQUFQLEFBQWUsTUFBSyxXQUFwQixBQUE4Qjs4QkFBOUI7Z0NBREosQUFDSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxpQ0FBTSxTQUFQLEFBQWUsTUFBSyxXQUFwQixBQUE4Qjs4QkFBOUI7Z0NBRkosQUFFSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyxpQ0FBTSxTQUFQLEFBQWUsTUFBSyxXQUFwQixBQUE4Qjs4QkFBOUI7Z0NBTFIsQUFFSSxBQUdJLEFBRUo7QUFGSTtpQ0FFSCxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGlDQUFNLFNBQVAsQUFBZSxNQUFLLFdBQXBCLEFBQThCOzhCQUE5QjtnQ0FESixBQUNJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLGlDQUFNLFNBQVAsQUFBZSxNQUFLLFdBQXBCLEFBQThCOzhCQUE5QjtnQ0FGSixBQUVJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLGlDQUFNLFNBQVAsQUFBZSxNQUFLLFdBQXBCLEFBQThCOzhCQUE5QjtnQ0F2RWhCLEFBQ0ksQUE0REksQUFPSSxBQUdJLEFBS25CO0FBTG1COzs7Ozs7QUFuSU4sQSxBQTJJbEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovZ2l0aHViL2Rldi1zb25na3Jhbi5naXRodWIuaW8vc291cmNlIn0=