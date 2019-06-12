"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactI18next = require("react-i18next");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var translateI18nTokensInHtmlElement = function translateI18nTokensInHtmlElement(i18n, htmlElement) {
  var i18nTokenNodes = htmlElement.querySelectorAll('[data-i18n]');

  for (var i = 0; i < i18nTokenNodes.length; i++) {
    i18nTokenNodes[i].innerHTML = i18n.t(i18nTokenNodes[i].getAttribute('data-i18n'));
  }
};

var useTranslateHtmlElement = function useTranslateHtmlElement(html) {
  var _useTranslation = (0, _reactI18next.useTranslation)(),
      i18n = _useTranslation.i18n;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      node = _useState2[0],
      setRef = _useState2[1];

  var translateIfNodeRendered = function translateIfNodeRendered(node) {
    if (node) {
      translateI18nTokensInHtmlElement(i18n, node);
    }
  };

  (0, _react.useEffect)(function () {
    translateIfNodeRendered(node);
    i18n.on('languageChanged', function (lng) {
      translateIfNodeRendered(node);
    });
    return function () {
      i18n.off('languageChanged', function (lng) {});
    };
  }, [html]);
  return [setRef];
};

var _default = useTranslateHtmlElement;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2UtdHJhbnNsYXRlLWh0bWwtZWxlbWVudC5qcyJdLCJuYW1lcyI6WyJ0cmFuc2xhdGVJMThuVG9rZW5zSW5IdG1sRWxlbWVudCIsImkxOG4iLCJodG1sRWxlbWVudCIsImkxOG5Ub2tlbk5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJpbm5lckhUTUwiLCJ0IiwiZ2V0QXR0cmlidXRlIiwidXNlVHJhbnNsYXRlSHRtbEVsZW1lbnQiLCJodG1sIiwibm9kZSIsInNldFJlZiIsInRyYW5zbGF0ZUlmTm9kZVJlbmRlcmVkIiwib24iLCJsbmciLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsZ0NBQWdDLEdBQUcsU0FBbkNBLGdDQUFtQyxDQUFDQyxJQUFELEVBQU9DLFdBQVAsRUFBdUI7QUFDOUQsTUFBTUMsY0FBYyxHQUFHRCxXQUFXLENBQUNFLGdCQUFaLENBQTZCLGFBQTdCLENBQXZCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsY0FBYyxDQUFDRyxNQUFuQyxFQUEyQ0QsQ0FBQyxFQUE1QyxFQUFnRDtBQUM5Q0YsSUFBQUEsY0FBYyxDQUFDRSxDQUFELENBQWQsQ0FBa0JFLFNBQWxCLEdBQThCTixJQUFJLENBQUNPLENBQUwsQ0FBT0wsY0FBYyxDQUFDRSxDQUFELENBQWQsQ0FBa0JJLFlBQWxCLENBQStCLFdBQS9CLENBQVAsQ0FBOUI7QUFDRDtBQUNGLENBTEQ7O0FBT0EsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixDQUFBQyxJQUFJLEVBQUk7QUFBQSx3QkFDckIsbUNBRHFCO0FBQUEsTUFDOUJWLElBRDhCLG1CQUM5QkEsSUFEOEI7O0FBQUEsa0JBRWYscUJBQVMsSUFBVCxDQUZlO0FBQUE7QUFBQSxNQUUvQlcsSUFGK0I7QUFBQSxNQUV6QkMsTUFGeUI7O0FBR3RDLE1BQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQUYsSUFBSSxFQUFJO0FBQ3RDLFFBQUlBLElBQUosRUFBVTtBQUNSWixNQUFBQSxnQ0FBZ0MsQ0FBQ0MsSUFBRCxFQUFPVyxJQUFQLENBQWhDO0FBQ0Q7QUFDRixHQUpEOztBQUtBLHdCQUFVLFlBQU07QUFDZEUsSUFBQUEsdUJBQXVCLENBQUNGLElBQUQsQ0FBdkI7QUFFQVgsSUFBQUEsSUFBSSxDQUFDYyxFQUFMLENBQVEsaUJBQVIsRUFBMkIsVUFBQUMsR0FBRyxFQUFJO0FBQ2hDRixNQUFBQSx1QkFBdUIsQ0FBQ0YsSUFBRCxDQUF2QjtBQUNELEtBRkQ7QUFHQSxXQUFPLFlBQU07QUFDWFgsTUFBQUEsSUFBSSxDQUFDZ0IsR0FBTCxDQUFTLGlCQUFULEVBQTRCLFVBQUFELEdBQUcsRUFBSSxDQUFFLENBQXJDO0FBQ0QsS0FGRDtBQUdELEdBVEQsRUFTRyxDQUFDTCxJQUFELENBVEg7QUFVQSxTQUFPLENBQUNFLE1BQUQsQ0FBUDtBQUNELENBbkJEOztlQXFCZUgsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSAncmVhY3QtaTE4bmV4dCc7XG5cbmNvbnN0IHRyYW5zbGF0ZUkxOG5Ub2tlbnNJbkh0bWxFbGVtZW50ID0gKGkxOG4sIGh0bWxFbGVtZW50KSA9PiB7XG4gIGNvbnN0IGkxOG5Ub2tlbk5vZGVzID0gaHRtbEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaTE4bl0nKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpMThuVG9rZW5Ob2Rlcy5sZW5ndGg7IGkrKykge1xuICAgIGkxOG5Ub2tlbk5vZGVzW2ldLmlubmVySFRNTCA9IGkxOG4udChpMThuVG9rZW5Ob2Rlc1tpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtaTE4bicpKTtcbiAgfVxufTtcblxuY29uc3QgdXNlVHJhbnNsYXRlSHRtbEVsZW1lbnQgPSBodG1sID0+IHtcbiAgY29uc3QgeyBpMThuIH0gPSB1c2VUcmFuc2xhdGlvbigpO1xuICBjb25zdCBbbm9kZSwgc2V0UmVmXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB0cmFuc2xhdGVJZk5vZGVSZW5kZXJlZCA9IG5vZGUgPT4ge1xuICAgIGlmIChub2RlKSB7XG4gICAgICB0cmFuc2xhdGVJMThuVG9rZW5zSW5IdG1sRWxlbWVudChpMThuLCBub2RlKTtcbiAgICB9XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdHJhbnNsYXRlSWZOb2RlUmVuZGVyZWQobm9kZSk7XG5cbiAgICBpMThuLm9uKCdsYW5ndWFnZUNoYW5nZWQnLCBsbmcgPT4ge1xuICAgICAgdHJhbnNsYXRlSWZOb2RlUmVuZGVyZWQobm9kZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGkxOG4ub2ZmKCdsYW5ndWFnZUNoYW5nZWQnLCBsbmcgPT4ge30pO1xuICAgIH07XG4gIH0sIFtodG1sXSk7XG4gIHJldHVybiBbc2V0UmVmXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVRyYW5zbGF0ZUh0bWxFbGVtZW50O1xuIl19