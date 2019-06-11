"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TimeDiff", {
  enumerable: true,
  get: function get() {
    return _reactTimediff.default;
  }
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTimediff = _interopRequireDefault(require("react-timediff"));

var _plotUtils = require("plot-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProcedurePlotTimeDiff =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProcedurePlotTimeDiff, _PureComponent);

  function ProcedurePlotTimeDiff() {
    _classCallCheck(this, ProcedurePlotTimeDiff);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProcedurePlotTimeDiff).apply(this, arguments));
  }

  _createClass(ProcedurePlotTimeDiff, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          width = _this$props.width,
          height = _this$props.height,
          data = _this$props.data,
          selection = _this$props.selection,
          hoveringPosition = _this$props.hoveringPosition,
          minX = _this$props.minX,
          maxX = _this$props.maxX;

      if (hoveringPosition === null || selection === null || data.length === 0) {
        return null;
      }

      this.render_memo = this.render_memo || {};
      var memo = this.render_memo;

      if (memo.data !== data) {
        memo.data = data;
        memo.normalizedData = {};
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var d = _step.value;
            memo.normalizedData[d.id] = d;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var selectedObj = memo.normalizedData[selection];
      var selectionEndDomX = selectedObj.end;
      var hoverX = (0, _plotUtils.fromDomXCoord_Linear)(width, minX, maxX, hoveringPosition.domX);
      return _react.default.createElement("div", {
        style: {
          width: width,
          height: height
        }
      }, _react.default.createElement(_reactTimediff.default, {
        width: width,
        height: 20,
        minX: minX,
        maxX: maxX,
        startX: selectionEndDomX,
        endX: hoverX
      }));
    }
  }]);

  return ProcedurePlotTimeDiff;
}(_react.PureComponent);

ProcedurePlotTimeDiff.propTypes = {
  data: _propTypes.default.array.isRequired,
  selection: _propTypes.default.number,
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  minX: _propTypes.default.number.isRequired,
  maxX: _propTypes.default.number.isRequired,
  hoveringPosition: _propTypes.default.object
};
var _default = ProcedurePlotTimeDiff;
exports.default = _default;