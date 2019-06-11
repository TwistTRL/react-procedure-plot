"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _plotUtils = require("plot-utils");

var _ProcedureObject = _interopRequireWildcard(require("./ProcedureObject"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProcedurePlotClickSelector =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(ProcedurePlotClickSelector, _PureComponent);

  function ProcedurePlotClickSelector(props) {
    var _this;

    _classCallCheck(this, ProcedurePlotClickSelector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProcedurePlotClickSelector).call(this, props));
    _this.lastEvent = null;
    _this.pickingCanvas = document.createElement("canvas");
    _this.pickingCanvas.width = 1;
    _this.pickingCanvas.height = 1;
    return _this;
  }

  _createClass(ProcedurePlotClickSelector, [{
    key: "render",
    value: function render() {
      return null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.select();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.select();
    }
  }, {
    key: "select",
    value: function select() {
      var _this$props = this.props,
          data = _this$props.data,
          selection = _this$props.selection,
          minX = _this$props.minX,
          maxX = _this$props.maxX,
          width = _this$props.width,
          height = _this$props.height,
          clickPosition = _this$props.clickPosition,
          selectHandler = _this$props.selectHandler;

      if (clickPosition === this.lastEvent) {
        return;
      }

      this.lastEvent = clickPosition;

      if (!clickPosition) {
        selectHandler(null);
        return;
      }

      this.select_memo = this.select_memo || {};
      var memo = this.select_memo;

      if (memo.data !== data) {
        memo.data = data;
        memo.ProcedureObjectCollection = data.map(function (obj) {
          return new _ProcedureObject.default(obj);
        }).sort(_ProcedureObject.compareProcedureObjects);
      } // Clear plots


      var pickingCanvas = this.pickingCanvas;
      var ctx = pickingCanvas.getContext("2d");
      ctx.clearRect(0, 0, 1, 1);
      ctx.translate(-clickPosition.domX, -clickPosition.domY); // Draw and pick

      var curSelection;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = memo.ProcedureObjectCollection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var obj = _step.value;

          if (obj.start > maxX || obj.end < minX) {
            continue;
          } // Draw


          var startDomX = (0, _plotUtils.toDomXCoord_Linear)(width, minX, maxX, obj.start);
          var endDomX = (0, _plotUtils.toDomXCoord_Linear)(width, minX, maxX, obj.end);

          if (obj.id === selection) {
            obj.drawSelectedHitbox(ctx, width, height, startDomX, endDomX);
          } else {
            obj.drawHitbox(ctx, width, height, startDomX, endDomX);
          } // Pick


          var imgData = ctx.getImageData(0, 0, 1, 1);

          if (imgData.data[3] !== 0) {
            curSelection = obj.id;

            if (curSelection === selection) {
              curSelection = null;
            }

            break;
          }
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

      selectHandler(curSelection);
      ctx.translate(clickPosition.domX, clickPosition.domY);
    }
  }]);

  return ProcedurePlotClickSelector;
}(_react.PureComponent);

ProcedurePlotClickSelector.propTypes = {
  width: _propTypes.default.number.isRequired,
  height: _propTypes.default.number.isRequired,
  minX: _propTypes.default.number.isRequired,
  maxX: _propTypes.default.number.isRequired,
  data: _propTypes.default.array.isRequired,
  selection: _propTypes.default.number,
  selectHandler: _propTypes.default.func.isRequired
};
var _default = ProcedurePlotClickSelector;
exports.default = _default;