"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareProcedureObjects = compareProcedureObjects;
exports.default = void 0;

var _memoize = require("memoize");

var _plotUtils = require("plot-utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PROCEDURE_DISPLAY = {
  "HLHS STAGE I, CARDIAC": "S1P",
  "CHEST CLOSURE, CARDIAC OFF UNIT": "VAC ∆",
  "GASTROSTOMY, LAPAROSCOPIC, GENSURG": "Hip osteoplasty",
  "VESICOSTOMY CREATION/CLOSURE, GU": "GI",
  "BIDIRECTIONAL GLEN SHUNT, CARDIAC": "GI"
};
var PROCEDURE_TYPE = {
  "HLHS STAGE I, CARDIAC": 0,
  "CHEST CLOSURE, CARDIAC OFF UNIT": 2,
  "GASTROSTOMY, LAPAROSCOPIC, GENSURG": 0,
  "VESICOSTOMY CREATION/CLOSURE, GU": 2,
  "BIDIRECTIONAL GLEN SHUNT, CARDIAC": 1
};

var ProcedureObject =
/*#__PURE__*/
function () {
  function ProcedureObject(_ref) {
    var _this = this;

    var id = _ref.id,
        name = _ref.name,
        start = _ref.start,
        end = _ref.end;

    _classCallCheck(this, ProcedureObject);

    _defineProperty(this, "getType", (0, _memoize.memoize_one)(function () {
      return PROCEDURE_TYPE[_this.name];
    }));

    _defineProperty(this, "getDisplay", (0, _memoize.memoize_one)(function () {
      return PROCEDURE_DISPLAY[_this.name] || _this.name;
    }));

    _defineProperty(this, "getDisplayBitmap", (0, _memoize.memoize_one)(function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      var display = _this.getDisplay();

      var font;
      var width;
      var height;
      var rotatedPos;

      switch (_this.getType()) {
        case 0:
          font = "10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          canvas.width = width;
          canvas.height = height;
          ctx.font = font;
          ctx.fillStyle = "red";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.rotate(-Math.PI / 2);
          rotatedPos = (0, _plotUtils.getRotatedAxisCoordinate)(width / 2, height / 2, -Math.PI / 2);
          ctx.fillText(display, rotatedPos.x, rotatedPos.y);
          break;

        case 1:
          font = "10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          canvas.width = width;
          canvas.height = height;
          ctx.font = font;
          ctx.fillStyle = "orange";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.rotate(-Math.PI / 2);
          rotatedPos = (0, _plotUtils.getRotatedAxisCoordinate)(width / 2, height / 2, -Math.PI / 2);
          ctx.fillText(display, rotatedPos.x, rotatedPos.y);
          break;

        case 2:
        default:
          font = "10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          canvas.width = width;
          canvas.height = height;
          ctx.font = font;
          ctx.fillStyle = "green";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.rotate(-Math.PI / 2);
          rotatedPos = (0, _plotUtils.getRotatedAxisCoordinate)(width / 2, height / 2, -Math.PI / 2);
          ctx.fillText(display, rotatedPos.x, rotatedPos.y);
          break;
      }

      return canvas;
    }));

    _defineProperty(this, "getDisplayHitbox", (0, _memoize.memoize_one)(function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      var display = _this.getDisplay();

      var font;
      var width;
      var height;

      switch (_this.getType()) {
        case 0:
          font = "10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          break;

        case 1:
          font = "10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          break;

        case 2:
        default:
          font = "10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          break;
      }

      return {
        width: width,
        height: height
      };
    }));

    _defineProperty(this, "getDisplaySelectedBitmap", (0, _memoize.memoize_one)(function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      var display = _this.getDisplay();

      var font;
      var width;
      var height;

      switch (_this.getType()) {
        case 0:
          font = "bold 10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          canvas.width = width;
          canvas.height = height;
          ctx.font = font;
          ctx.fillStyle = "red";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.rotate(-Math.PI / 2);
          ctx.fillText(display, -height / 2, width / 2);
          break;

        case 1:
          font = "bold 10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          canvas.width = width;
          canvas.height = height;
          ctx.font = font;
          ctx.fillStyle = "orange";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.rotate(-Math.PI / 2);
          ctx.fillText(display, -height / 2, width / 2);
          break;

        case 2:
        default:
          font = "bold 10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          canvas.width = width;
          canvas.height = height;
          ctx.font = font;
          ctx.fillStyle = "green";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.rotate(-Math.PI / 2);
          ctx.fillText(display, -height / 2, width / 2);
          break;
      }

      return canvas;
    }));

    _defineProperty(this, "getDisplaySelectedHitbox", (0, _memoize.memoize_one)(function () {
      var canvas = document.createElement("canvas");
      var ctx = canvas.getContext("2d");

      var display = _this.getDisplay();

      var font;
      var width;
      var height;

      switch (_this.getType()) {
        case 0:
          font = "bold 10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          break;

        case 1:
          font = "bold 10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          break;

        case 2:
        default:
          font = "bold 10px Sans";
          ctx.font = font;
          height = ctx.measureText(display).width;
          width = 12;
          break;
      }

      return {
        width: width,
        height: height
      };
    }));

    this.id = id;
    this.name = name;
    this.start = start;
    this.end = end;
  }

  _createClass(ProcedureObject, [{
    key: "draw",
    value: function draw(ctx, width, height, startDomX, endDomX) {
      startDomX = Math.round(startDomX);
      endDomX = Math.round(endDomX);
      var lineWidth = endDomX + 1 - startDomX;
      var lineCenter = (startDomX + endDomX + 1) / 2; // Line

      switch (this.getType()) {
        case 0:
          ctx.strokeStyle = "red";
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(lineCenter, 0);
          ctx.lineTo(lineCenter, height);
          ctx.stroke();
          break;

        case 1:
          ctx.strokeStyle = "orange";
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(lineCenter, 0);
          ctx.lineTo(lineCenter, height);
          ctx.stroke();
          break;

        case 2:
        default:
          ctx.strokeStyle = "green";
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(lineCenter, 0);
          ctx.lineTo(lineCenter, height);
          ctx.stroke();
          break;
      } // Label Bitmap


      var bitmap = this.getDisplayBitmap();
      ctx.drawImage(bitmap, startDomX - 5 - bitmap.width, 5);
    }
  }, {
    key: "drawHitbox",
    value: function drawHitbox(ctx, width, height, startDomX, endDomX) {
      startDomX = Math.round(startDomX);
      endDomX = Math.round(endDomX);
      var lineWidth = endDomX - startDomX + 1;
      var lineCenter = (startDomX + endDomX + 1) / 2; // Line

      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.moveTo(lineCenter, 0);
      ctx.lineTo(lineCenter, height);
      ctx.stroke(); // Hitbox

      var hitbox = this.getDisplayHitbox();
      ctx.fillRect(startDomX - 5 - hitbox.width, 5, hitbox.width, hitbox.height);
    }
  }, {
    key: "drawSelected",
    value: function drawSelected(ctx, width, height, startDomX, endDomX) {
      startDomX = Math.round(startDomX);
      endDomX = Math.round(endDomX);
      var lineWidth = endDomX - startDomX + 1;
      var lineCenter = (startDomX + endDomX + 1) / 2; // Line

      switch (this.getType()) {
        case 0:
          ctx.strokeStyle = "red";
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(lineCenter, 0);
          ctx.lineTo(lineCenter, height);
          ctx.stroke();
          break;

        case 1:
          ctx.strokeStyle = "orange";
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(lineCenter, 0);
          ctx.lineTo(lineCenter, height);
          ctx.stroke();
          break;

        case 2:
        default:
          ctx.strokeStyle = "green";
          ctx.lineWidth = lineWidth;
          ctx.beginPath();
          ctx.moveTo(lineCenter, 0);
          ctx.lineTo(lineCenter, height);
          ctx.stroke();
          break;
      } // Label Bitmap


      var bitmap = this.getDisplaySelectedBitmap();
      ctx.drawImage(bitmap, startDomX - 5 - bitmap.width, 5);
    }
  }, {
    key: "drawSelectedHitbox",
    value: function drawSelectedHitbox(ctx, width, height, startDomX, endDomX) {
      startDomX = Math.round(startDomX);
      endDomX = Math.round(endDomX);
      var lineWidth = endDomX - startDomX + 1;
      var lineCenter = (startDomX + endDomX + 1) / 2; // Line

      ctx.beginPath();
      ctx.lineWidth = lineWidth;
      ctx.moveTo(lineCenter, 0);
      ctx.lineTo(lineCenter, height);
      ctx.stroke(); // Label Bitmap

      var hitbox = this.getDisplaySelectedHitbox();
      ctx.fillRect(startDomX - 5 - hitbox.width, 5, hitbox.width, hitbox.height);
    }
  }]);

  return ProcedureObject;
}();

var _default = ProcedureObject;
exports.default = _default;

function compareProcedureObjects(obj1, obj2) {
  if (obj1.start !== obj2.start) {
    return obj1.start - obj2.start;
  } else {
    return obj1.end - obj2.end;
  }
}