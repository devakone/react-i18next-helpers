"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactI18next = require("react-i18next");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

// When change language is triggered, re-validate the form as to get all errors translated
var useTranslateFormErrors = function useTranslateFormErrors(errors, touched, setFieldTouched) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      i18n = _useTranslation.i18n;

  (0, _react.useEffect)(function () {
    i18n.on('languageChanged', function (lng) {
      Object.keys(errors).forEach(function (fieldName) {
        if (Object.keys(touched).includes(fieldName)) {
          setFieldTouched(fieldName);
        }
      });
    });
    return function () {
      i18n.off('languageChanged', function (lng) {});
    };
  }, [errors]);
};

var _default = useTranslateFormErrors;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtdHJhbnNsYXRlLWZvcm0tZXJyb3JzLmpzIl0sIm5hbWVzIjpbInVzZVRyYW5zbGF0ZUZvcm1FcnJvcnMiLCJlcnJvcnMiLCJ0b3VjaGVkIiwic2V0RmllbGRUb3VjaGVkIiwiaTE4biIsIm9uIiwibG5nIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJmaWVsZE5hbWUiLCJpbmNsdWRlcyIsIm9mZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUE7QUFDQSxJQUFNQSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQkMsZUFBbEIsRUFBc0M7QUFBQSx3QkFDbEQsbUNBRGtEO0FBQUEsTUFDM0RDLElBRDJELG1CQUMzREEsSUFEMkQ7O0FBRW5FLHdCQUFVLFlBQU07QUFDZEEsSUFBQUEsSUFBSSxDQUFDQyxFQUFMLENBQVEsaUJBQVIsRUFBMkIsVUFBQUMsR0FBRyxFQUFJO0FBQ2hDQyxNQUFBQSxNQUFNLENBQUNDLElBQVAsQ0FBWVAsTUFBWixFQUFvQlEsT0FBcEIsQ0FBNEIsVUFBQUMsU0FBUyxFQUFJO0FBQ3ZDLFlBQUlILE1BQU0sQ0FBQ0MsSUFBUCxDQUFZTixPQUFaLEVBQXFCUyxRQUFyQixDQUE4QkQsU0FBOUIsQ0FBSixFQUE4QztBQUM1Q1AsVUFBQUEsZUFBZSxDQUFDTyxTQUFELENBQWY7QUFDRDtBQUNGLE9BSkQ7QUFLRCxLQU5EO0FBT0EsV0FBTyxZQUFNO0FBQ1hOLE1BQUFBLElBQUksQ0FBQ1EsR0FBTCxDQUFTLGlCQUFULEVBQTRCLFVBQUFOLEdBQUcsRUFBSSxDQUFFLENBQXJDO0FBQ0QsS0FGRDtBQUdELEdBWEQsRUFXRyxDQUFDTCxNQUFELENBWEg7QUFZRCxDQWREOztlQWdCZUQsc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICdyZWFjdC1pMThuZXh0JztcblxuLy8gV2hlbiBjaGFuZ2UgbGFuZ3VhZ2UgaXMgdHJpZ2dlcmVkLCByZS12YWxpZGF0ZSB0aGUgZm9ybSBhcyB0byBnZXQgYWxsIGVycm9ycyB0cmFuc2xhdGVkXG5jb25zdCB1c2VUcmFuc2xhdGVGb3JtRXJyb3JzID0gKGVycm9ycywgdG91Y2hlZCwgc2V0RmllbGRUb3VjaGVkKSA9PiB7XG4gIGNvbnN0IHsgaTE4biB9ID0gdXNlVHJhbnNsYXRpb24oKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpMThuLm9uKCdsYW5ndWFnZUNoYW5nZWQnLCBsbmcgPT4ge1xuICAgICAgT2JqZWN0LmtleXMoZXJyb3JzKS5mb3JFYWNoKGZpZWxkTmFtZSA9PiB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyh0b3VjaGVkKS5pbmNsdWRlcyhmaWVsZE5hbWUpKSB7XG4gICAgICAgICAgc2V0RmllbGRUb3VjaGVkKGZpZWxkTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpMThuLm9mZignbGFuZ3VhZ2VDaGFuZ2VkJywgbG5nID0+IHt9KTtcbiAgICB9O1xuICB9LCBbZXJyb3JzXSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VUcmFuc2xhdGVGb3JtRXJyb3JzO1xuIl19