var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useForm = function (format) {
  var _a = react_1.useState(format),
    state = _a[0],
    setState = _a[1];
  var form = state;
  var mutateForm = function (_a) {
    var target = _a.target;
    var _b = target,
      name = _b.name,
      value = _b.value,
      type = _b.type,
      checked = _b.checked;
    var getData = function () {
      return type === "checkbox" || type === "radio" ? checked : value;
    };
    setState(function (prev) {
      var _a;
      return __assign(
        __assign({}, prev),
        ((_a = {}), (_a[name] = getData()), _a)
      );
    });
  };
  var setForm = function (field, value) {
    setState(function (prev) {
      var _a;
      return __assign(__assign({}, prev), ((_a = {}), (_a[field] = value), _a));
    });
  };
  var resetForm = function () {
    setState(format);
  };
  return {
    form: form,
    mutateForm: mutateForm,
    setForm: setForm,
    resetForm: resetForm,
  };
};
exports.default = useForm;
