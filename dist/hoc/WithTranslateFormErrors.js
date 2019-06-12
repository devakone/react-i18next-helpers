"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _useTranslateFormErrors = _interopRequireDefault(require("../hooks/use-translate-form-errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var WithTranslateFormErrors = function WithTranslateFormErrors(_ref) {
  var form = _ref.form,
      children = _ref.children;
  var errors = form.errors,
      touched = form.touched,
      setFieldTouched = form.setFieldTouched;
  (0, _useTranslateFormErrors["default"])(errors, touched, setFieldTouched);
  return _react["default"].createElement(_react["default"].Fragment, null, children);
};

WithTranslateFormErrors.propTypes = {
  form: _propTypes["default"].object
};
var _default = WithTranslateFormErrors;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob2MvV2l0aFRyYW5zbGF0ZUZvcm1FcnJvcnMuanMiXSwibmFtZXMiOlsiV2l0aFRyYW5zbGF0ZUZvcm1FcnJvcnMiLCJmb3JtIiwiY2hpbGRyZW4iLCJlcnJvcnMiLCJ0b3VjaGVkIiwic2V0RmllbGRUb3VjaGVkIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLE9BQXlCO0FBQUEsTUFBdEJDLElBQXNCLFFBQXRCQSxJQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUFBLE1BQ2hEQyxNQURnRCxHQUNaRixJQURZLENBQ2hERSxNQURnRDtBQUFBLE1BQ3hDQyxPQUR3QyxHQUNaSCxJQURZLENBQ3hDRyxPQUR3QztBQUFBLE1BQy9CQyxlQUQrQixHQUNaSixJQURZLENBQy9CSSxlQUQrQjtBQUV2RCwwQ0FBdUJGLE1BQXZCLEVBQStCQyxPQUEvQixFQUF3Q0MsZUFBeEM7QUFDQSxTQUFPLGtFQUFHSCxRQUFILENBQVA7QUFDRCxDQUpEOztBQU1BRix1QkFBdUIsQ0FBQ00sU0FBeEIsR0FBb0M7QUFDbENMLEVBQUFBLElBQUksRUFBRU0sc0JBQVVDO0FBRGtCLENBQXBDO2VBSWVSLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB1c2VUcmFuc2xhdGVGb3JtRXJyb3JzIGZyb20gJy4uL2hvb2tzL3VzZS10cmFuc2xhdGUtZm9ybS1lcnJvcnMnO1xuXG5jb25zdCBXaXRoVHJhbnNsYXRlRm9ybUVycm9ycyA9ICh7IGZvcm0sICBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHtlcnJvcnMsIHRvdWNoZWQsIHNldEZpZWxkVG91Y2hlZH0gPSBmb3JtO1xuICB1c2VUcmFuc2xhdGVGb3JtRXJyb3JzKGVycm9ycywgdG91Y2hlZCwgc2V0RmllbGRUb3VjaGVkKTtcbiAgcmV0dXJuIDw+e2NoaWxkcmVufTwvPjtcbn07XG5cbldpdGhUcmFuc2xhdGVGb3JtRXJyb3JzLnByb3BUeXBlcyA9IHtcbiAgZm9ybTogUHJvcFR5cGVzLm9iamVjdFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2l0aFRyYW5zbGF0ZUZvcm1FcnJvcnM7XG4iXX0=