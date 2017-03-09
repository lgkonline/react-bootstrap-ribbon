"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactBootstrapRibbonGroup = function (_React$Component) {
    _inherits(ReactBootstrapRibbonGroup, _React$Component);

    function ReactBootstrapRibbonGroup() {
        _classCallCheck(this, ReactBootstrapRibbonGroup);

        return _possibleConstructorReturn(this, (ReactBootstrapRibbonGroup.__proto__ || Object.getPrototypeOf(ReactBootstrapRibbonGroup)).apply(this, arguments));
    }

    _createClass(ReactBootstrapRibbonGroup, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { className: "ribbon-col row-2px-col " + (this.props.colClass ? this.props.colClass : "col-sm-6") },
                _react2.default.createElement(
                    "div",
                    { className: "ribbon-group" },
                    _react2.default.createElement(
                        "div",
                        { className: "ribbon-group-content" },
                        _react2.default.createElement(
                            "div",
                            { className: "row row-2px" },
                            this.props.children
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "ribbon-group-title" },
                        this.props.title
                    )
                )
            );
        }
    }]);

    return ReactBootstrapRibbonGroup;
}(_react2.default.Component);

exports.default = ReactBootstrapRibbonGroup;
