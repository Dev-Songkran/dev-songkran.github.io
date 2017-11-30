'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChartCircle = _styledComponents2.default.div.withConfig({
    componentId: 's1yjoa9s-0'
})(['justify-content:space-around;width:230px;margin:auto;.circular-chart{display:block;margin:10px auto;.circle-bg{fill:none;stroke:#eee;stroke-width:2;}.circle{fill:none;stroke-width:2;stroke-linecap:round;animation:progress 1s ease-out backwards;}.percentage{fill:#785892;font-family:sans-serif;font-size:0.4em;text-anchor:middle;}}.circular-chart.color .circle{stroke:#f197a3;}.skill{text-align:center;font-size:20px;font-weight:600;color:#d8838e;}@keyframes progress{0%{stroke-dasharray:0 100;}}']);

var Chart = function (_Component) {
    (0, _inherits3.default)(Chart, _Component);

    function Chart() {
        (0, _classCallCheck3.default)(this, Chart);

        return (0, _possibleConstructorReturn3.default)(this, (Chart.__proto__ || (0, _getPrototypeOf2.default)(Chart)).apply(this, arguments));
    }

    (0, _createClass3.default)(Chart, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                percent = _props.percent,
                skillName = _props.skillName;

            return _react2.default.createElement(ChartCircle, null, _react2.default.createElement('svg', { viewBox: '0 0 36 36', className: 'circular-chart color' }, _react2.default.createElement('path', { className: 'circle-bg',
                d: 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' }), _react2.default.createElement('path', { className: 'circle',
                strokeDasharray: percent + ',100',
                d: 'M18 2.0845 a -15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' }), _react2.default.createElement('text', { x: '18', y: '20.35', className: 'percentage' }, percent, '%')), _react2.default.createElement('div', { className: 'skill' }, skillName));
        }
    }]);

    return Chart;
}(_react.Component);

exports.default = Chart;