function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React from "react";
import PropTypes from "prop-types";

var ReactBootstrapRibbon = /*#__PURE__*/function (_React$Component) {
  _inherits(ReactBootstrapRibbon, _React$Component);

  var _super = _createSuper(ReactBootstrapRibbon);

  function ReactBootstrapRibbon() {
    var _this;

    _classCallCheck(this, ReactBootstrapRibbon);

    _this = _super.call(this);
    _this.state = {
      mobileCurrentGroup: 0
    };
    return _this;
  }

  _createClass(ReactBootstrapRibbon, [{
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        mobileCurrentGroup: event.target.value * 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
      return /*#__PURE__*/React.createElement("div", {
        className: "bg-light"
      }, /*#__PURE__*/React.createElement("div", {
        className: "d-".concat(this.props.breakpoint, "-none")
      }, /*#__PURE__*/React.createElement("div", {
        className: "mobile-ribbon ribbon"
      }, /*#__PURE__*/React.createElement("div", {
        className: "ribbon-group-content"
      }, /*#__PURE__*/React.createElement("select", {
        className: "mobile-ribbon-select form-control",
        onChange: function onChange(event) {
          return _this2.handleChange(event);
        }
      }, children.map(function (item, index) {
        return /*#__PURE__*/React.createElement("option", {
          key: index,
          value: index
        }, item.props.title);
      }))), children.map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          className: "ribbon-group-content " + (index === _this2.state.mobileCurrentGroup ? "d-block" : "d-none")
        }, /*#__PURE__*/React.createElement("div", {
          className: "row no-gutters"
        }, item.props.children));
      }))), /*#__PURE__*/React.createElement("div", {
        className: "d-none d-".concat(this.props.breakpoint, "-block")
      }, /*#__PURE__*/React.createElement("div", {
        className: "ribbon d-flex",
        style: {
          height: this.props.height
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "row no-gutters w-100"
      }, this.props.children))));
    }
  }], [{
    key: "defaultProps",
    get: function get() {
      return {
        height: "8rem",
        breakpoint: "md"
      };
    }
  }]);

  return ReactBootstrapRibbon;
}(React.Component);

ReactBootstrapRibbon.propTypes = {
  height: PropTypes.string,
  breakpoint: PropTypes.oneOf(["sm", "md", "lg", "xl"])
};
export default ReactBootstrapRibbon;
