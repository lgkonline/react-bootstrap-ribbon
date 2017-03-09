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

// import "./react-bootstrap-ribbon.css";

var ReactBootstrapRibbon = function (_React$Component) {
    _inherits(ReactBootstrapRibbon, _React$Component);

    function ReactBootstrapRibbon() {
        _classCallCheck(this, ReactBootstrapRibbon);

        var _this = _possibleConstructorReturn(this, (ReactBootstrapRibbon.__proto__ || Object.getPrototypeOf(ReactBootstrapRibbon)).call(this));

        _this.state = {
            mobileCurrentGroup: 0
        };
        return _this;
    }

    _createClass(ReactBootstrapRibbon, [{
        key: "handleChange",
        value: function handleChange(event) {
            this.setState({ mobileCurrentGroup: event.target.value * 1 });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "visible-xs" },
                    _react2.default.createElement(
                        "div",
                        { className: "mobile-ribbon ribbon" },
                        _react2.default.createElement(
                            "div",
                            { className: "ribbon-group-content" },
                            _react2.default.createElement(
                                "select",
                                { className: "mobile-ribbon-select form-control", onChange: function onChange(event) {
                                        return _this2.handleChange(event);
                                    } },
                                children.map(function (item, index) {
                                    return _react2.default.createElement(
                                        "option",
                                        { key: index, value: index },
                                        item.props.title
                                    );
                                })
                            )
                        ),
                        children.map(function (item, index) {
                            return _react2.default.createElement(
                                "div",
                                { key: index, className: "mobile-ribbon-item ribbon-group-content " + (index === _this2.state.mobileCurrentGroup ? "active" : "") },
                                _react2.default.createElement(
                                    "div",
                                    { className: "row row-2px" },
                                    item.props.children
                                )
                            );
                        })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "hidden-xs" },
                    _react2.default.createElement(
                        "div",
                        { className: "ribbon" },
                        _react2.default.createElement(
                            "div",
                            { className: "row row-eq-height row-2px" },
                            this.props.children
                        )
                    )
                )
            );
        }
    }]);

    return ReactBootstrapRibbon;
}(_react2.default.Component);

exports.default = ReactBootstrapRibbon;
