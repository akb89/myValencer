(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _key = require('./key');

var _key2 = _interopRequireDefault(_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AlphaPad = function (_React$Component) {
    _inherits(AlphaPad, _React$Component);

    function AlphaPad(props) {
        _classCallCheck(this, AlphaPad);

        var _this = _possibleConstructorReturn(this, (AlphaPad.__proto__ || Object.getPrototypeOf(AlphaPad)).call(this, props));

        var k = _this.renderKey.bind(_this);
        _this.keyboard = [[k('A'), k('Z'), k('E'), k('R'), k('T'), k('Y'), k('U'), k('I'), k('BCKSPACE')], [k('O'), k('P'), k('Q'), k('S'), k('D'), k('F'), k('G'), k('H'), k('J'), k('K')], [k('L'), k('M'), k('W'), k('X'), k('C'), k('V'), k('B'), k('N'), k('ENTER', _this.props.primaryColor)], [k(' ')]];
        return _this;
    }

    _createClass(AlphaPad, [{
        key: 'renderKey',
        value: function renderKey(k, color) {
            var _this2 = this;

            return function (idx) {
                return _react2.default.createElement(_key2.default, { primaryColor: color, onChange: _this2.props.onChange, digit: k, key: idx });
            };
        }
    }, {
        key: 'renderRow',
        value: function renderRow(row, idx) {
            return _react2.default.createElement(
                'div',
                { key: idx, className: 'keyboard-row' },
                row.map(function (key, i) {
                    return key(i);
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'hero is-fullheight' },
                _react2.default.createElement(
                    'div',
                    { className: 'hero-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container is-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'keyboard-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'keyboard' },
                                this.keyboard.map(function (row, i) {
                                    return _this3.renderRow(row, i);
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AlphaPad;
}(_react2.default.Component);

AlphaPad.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    primaryColor: _propTypes2.default.string.isRequired
};

exports.default = AlphaPad;

},{"./key":2,"prop-types":"prop-types","react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Key = function (_React$Component) {
    _inherits(Key, _React$Component);

    function Key() {
        _classCallCheck(this, Key);

        return _possibleConstructorReturn(this, (Key.__proto__ || Object.getPrototypeOf(Key)).apply(this, arguments));
    }

    _createClass(Key, [{
        key: 'onKeyClick',
        value: function onKeyClick(val) {
            var _this2 = this;

            return function (e) {
                e.preventDefault();
                _this2.props.onChange(val);
            };
        }
    }, {
        key: 'render',
        value: function render() {
            var digit = this.props.digit;
            var style = {};
            if (this.props.primaryColor) {
                style = {
                    backgroundColor: this.props.primaryColor,
                    color: '#FFF'
                };
            }

            var extra = this.props.noExtraSize ? '' : 'extra-size';

            switch (digit) {
                default:
                    return _react2.default.createElement(
                        'div',
                        { style: style, className: 'button key is-unselectable', onClick: this.onKeyClick(digit) },
                        _react2.default.createElement(
                            'i',
                            { className: 'fa' },
                            digit
                        )
                    );
                case 'BCKSPACE':
                    return _react2.default.createElement(
                        'div',
                        { style: style, className: 'button key is-unselectable ' + extra, onClick: this.onKeyClick(digit) },
                        this.props.backspace
                    );
                case 'ENTER':
                    return _react2.default.createElement(
                        'div',
                        { style: style, className: 'button key is-unselectable ' + extra, onClick: this.onKeyClick(digit) },
                        this.props.enter
                    );
                case ' ':
                    return _react2.default.createElement(
                        'div',
                        { style: style, className: 'button key space-bar is-unselectable', onClick: this.onKeyClick(digit) },
                        _react2.default.createElement('i', { className: 'fa fa-keyboard-o' })
                    );
            }
        }
    }]);

    return Key;
}(_react2.default.Component);

Key.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    digit: _propTypes2.default.string.isRequired,
    noExtraSize: _propTypes2.default.bool,
    primaryColor: _propTypes2.default.string,
    enter: _propTypes2.default.node,
    backspace: _propTypes2.default.node
};

Key.defaultProps = {
    noExtraSize: false,
    backspace: _react2.default.createElement('i', { className: 'fa fa-arrow-left' }),
    enter: _react2.default.createElement('i', { className: 'fa fa-check-square' })
};

exports.default = Key;

},{"prop-types":"prop-types","react":"react"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Loader = function (_React$Component) {
    _inherits(Loader, _React$Component);

    function Loader() {
        _classCallCheck(this, Loader);

        return _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).apply(this, arguments));
    }

    _createClass(Loader, [{
        key: 'render',
        value: function render() {
            var pstyle = {};

            var sstyle = {};

            if (this.props.primaryColor) {
                pstyle.backgroundColor = this.props.primaryColor;
            }

            if (this.props.secondaryColor) {
                sstyle.backgroundColor = this.props.secondaryColor;
            }

            return _react2.default.createElement(
                'div',
                { className: 'fv-loader' },
                _react2.default.createElement('div', { className: 'fv-square fv-color-black', style: sstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-black', style: sstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-black fv-loader-last', style: sstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-brand fv-loader-clear', style: pstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-brand', style: pstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-brand fv-loader-last', style: pstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-black fv-loader-clear', style: sstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-black', style: sstyle }),
                _react2.default.createElement('div', { className: 'fv-square fv-color-black fv-loader-last', style: sstyle })
            );
        }
    }]);

    return Loader;
}(_react2.default.Component);

Loader.propTypes = {
    primaryColor: _propTypes2.default.string,
    secondaryColor: _propTypes2.default.string
};

exports.default = Loader;

},{"prop-types":"prop-types","react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _key = require('./key');

var _key2 = _interopRequireDefault(_key);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhonePad = function (_React$Component) {
    _inherits(PhonePad, _React$Component);

    function PhonePad(props) {
        _classCallCheck(this, PhonePad);

        var _this = _possibleConstructorReturn(this, (PhonePad.__proto__ || Object.getPrototypeOf(PhonePad)).call(this, props));

        var k = _this.renderKey.bind(_this);
        _this.keyboard = [[k('1'), k('2'), k('3')], [k('4'), k('5'), k('6')], [k('7'), k('8'), k('9')], [k('BCKSPACE', _this.props.cancelColor), k('0'), k('ENTER', _this.props.okColor)]];
        return _this;
    }

    _createClass(PhonePad, [{
        key: 'renderKey',
        value: function renderKey(k, color) {
            var _this2 = this;

            return function (idx) {
                return _react2.default.createElement(_key2.default, {
                    primaryColor: color,
                    noExtraSize: true,
                    onChange: _this2.props.onChange,
                    digit: k,
                    key: idx,
                    backspace: _react2.default.createElement(
                        'i',
                        { className: 'fa' },
                        'C'
                    ),
                    enter: _react2.default.createElement(
                        'i',
                        { className: 'fa' },
                        'OK'
                    )
                });
            };
        }
    }, {
        key: 'renderRow',
        value: function renderRow(row, idx) {
            return _react2.default.createElement(
                'div',
                { key: idx, className: 'keyboard-row' },
                row.map(function (key, i) {
                    return key(i);
                })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'hero is-fullheight' },
                _react2.default.createElement(
                    'div',
                    { className: 'hero-body' },
                    _react2.default.createElement(
                        'div',
                        { className: 'container is-fluid' },
                        _react2.default.createElement(
                            'div',
                            { className: 'keyboard-container' },
                            _react2.default.createElement(
                                'div',
                                { className: 'keyboard' },
                                this.keyboard.map(function (row, i) {
                                    return _this3.renderRow(row, i);
                                })
                            )
                        )
                    )
                )
            );
        }
    }]);

    return PhonePad;
}(_react2.default.Component);

PhonePad.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    primaryColor: _propTypes2.default.string.isRequired,
    cancelColor: _propTypes2.default.string,
    okColor: _propTypes2.default.string
};

PhonePad.defaultProps = {
    cancelColor: '#FDD835',
    okColor: '#4CAF50'
};

exports.default = PhonePad;

},{"./key":2,"prop-types":"prop-types","react":"react"}],5:[function(require,module,exports){
'use strict';

var _reactDom = require('react-dom');

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _app = require('./pages/app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouterDom.BrowserRouter,
  null,
  _react2.default.createElement(_app2.default, null)
), document.getElementById('app'));

},{"./pages/app":6,"react":"react","react-dom":"react-dom","react-router-dom":"react-router-dom"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRouterDom = require('react-router-dom');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _in_progress_component = require('./in_progress_component');

var _in_progress_component2 = _interopRequireDefault(_in_progress_component);

var _unauthorized_component = require('./unauthorized_component');

var _unauthorized_component2 = _interopRequireDefault(_unauthorized_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.Switch,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { path: '/machine/:mac', component: _unauthorized_component2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/desk/:mac', component: _in_progress_component2.default }),
        _react2.default.createElement(_reactRouterDom.Route, { path: '/screen/:mac', component: _in_progress_component2.default })
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

},{"./in_progress_component":7,"./unauthorized_component":8,"react":"react","react-router-dom":"react-router-dom"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _loader = require('../components/loader');

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InProgressComponent = function (_React$Component) {
  _inherits(InProgressComponent, _React$Component);

  function InProgressComponent() {
    _classCallCheck(this, InProgressComponent);

    return _possibleConstructorReturn(this, (InProgressComponent.__proto__ || Object.getPrototypeOf(InProgressComponent)).apply(this, arguments));
  }

  _createClass(InProgressComponent, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { className: 'hero is-fullheight' },
        _react2.default.createElement(
          'div',
          { className: 'hero-body' },
          _react2.default.createElement(
            'div',
            { className: 'container is-fluid' },
            _react2.default.createElement(_loader2.default, null)
          )
        )
      );
    }
  }]);

  return InProgressComponent;
}(_react2.default.Component);

exports.default = InProgressComponent;

},{"../components/loader":3,"react":"react"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _alphapad = require('../components/alphapad');

var _alphapad2 = _interopRequireDefault(_alphapad);

var _phonepad = require('../components/phonepad');

var _phonepad2 = _interopRequireDefault(_phonepad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnauthorizedComponent = function (_React$Component) {
  _inherits(UnauthorizedComponent, _React$Component);

  function UnauthorizedComponent() {
    _classCallCheck(this, UnauthorizedComponent);

    return _possibleConstructorReturn(this, (UnauthorizedComponent.__proto__ || Object.getPrototypeOf(UnauthorizedComponent)).apply(this, arguments));
  }

  _createClass(UnauthorizedComponent, [{
    key: 'render',

    /*    render() {
        return (
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter">
                    <div className="card">
                      <div className="card-content">
                        <div className="content has-text-centered">
                              You are not authorized to access this page.
                              <br />
                              Please contact your administrator to solve the problem.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
        }*/

    value: function render() {
      return _react2.default.createElement(_phonepad2.default, {
        onChange: function onChange(val) {
          console.log(val);
        },
        primaryColor: '#E60019'
      });
    }
  }]);

  return UnauthorizedComponent;
}(_react2.default.Component);

exports.default = UnauthorizedComponent;

},{"../components/alphapad":1,"../components/phonepad":4,"react":"react"}]},{},[5])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJmcm9udC9mcm9udGVuZC9jb21wb25lbnRzL2FscGhhcGFkLmpzeCIsImZyb250L2Zyb250ZW5kL2NvbXBvbmVudHMva2V5LmpzeCIsImZyb250L2Zyb250ZW5kL2NvbXBvbmVudHMvbG9hZGVyLmpzeCIsImZyb250L2Zyb250ZW5kL2NvbXBvbmVudHMvcGhvbmVwYWQuanN4IiwiZnJvbnQvZnJvbnRlbmQvbWFpbi5qc3giLCJmcm9udC9mcm9udGVuZC9wYWdlcy9hcHAuanN4IiwiZnJvbnQvZnJvbnRlbmQvcGFnZXMvaW5fcHJvZ3Jlc3NfY29tcG9uZW50LmpzeCIsImZyb250L2Zyb250ZW5kL3BhZ2VzL3VuYXV0aG9yaXplZF9jb21wb25lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVNLFE7OztBQUNGLHNCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3SEFDVCxLQURTOztBQUVmLFlBQU0sSUFBSSxNQUFLLFNBQUwsQ0FBZSxJQUFmLE9BQVY7QUFDQSxjQUFLLFFBQUwsR0FBZ0IsQ0FDWixDQUFDLEVBQUUsR0FBRixDQUFELEVBQVMsRUFBRSxHQUFGLENBQVQsRUFBaUIsRUFBRSxHQUFGLENBQWpCLEVBQXlCLEVBQUUsR0FBRixDQUF6QixFQUFpQyxFQUFFLEdBQUYsQ0FBakMsRUFBeUMsRUFBRSxHQUFGLENBQXpDLEVBQWlELEVBQUUsR0FBRixDQUFqRCxFQUF5RCxFQUFFLEdBQUYsQ0FBekQsRUFBaUUsRUFBRSxVQUFGLENBQWpFLENBRFksRUFFWixDQUFDLEVBQUUsR0FBRixDQUFELEVBQVMsRUFBRSxHQUFGLENBQVQsRUFBaUIsRUFBRSxHQUFGLENBQWpCLEVBQXlCLEVBQUUsR0FBRixDQUF6QixFQUFpQyxFQUFFLEdBQUYsQ0FBakMsRUFBeUMsRUFBRSxHQUFGLENBQXpDLEVB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Ozs7SUFFTSxxQjs7Ozs7Ozs7Ozs7O0FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkF3QlM7QUFDTCxhQUFRO0FBQ04sa0JBQVUsa0JBQUMsR0FBRCxFQUFTO0FBQUUsa0JBQVEsR0FBUixDQUFZLEdBQVo7QUFBbUIsU0FEbEM7QUFFTixzQkFBYTtBQUZQLFFBQVI7QUFJSDs7OztFQTlCK0IsZ0JBQU0sUzs7a0JBaUMzQixxQiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBLZXkgZnJvbSAnLi9rZXknO1xuXG5jbGFzcyBBbHBoYVBhZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICBjb25zdCBrID0gdGhpcy5yZW5kZXJLZXkuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5rZXlib2FyZCA9IFtcbiAgICAgICAgICAgIFtrKCdBJyksIGsoJ1onKSwgaygnRScpLCBrKCdSJyksIGsoJ1QnKSwgaygnWScpLCBrKCdVJyksIGsoJ0knKSwgaygnQkNLU1BBQ0UnKV0sXG4gICAgICAgICAgICBbaygnTycpLCBrKCdQJyksIGsoJ1EnKSwgaygnUycpLCBrKCdEJyksIGsoJ0YnKSwgaygnRycpLCBrKCdIJyksIGsoJ0onKSwgaygnSycpXSxcbiAgICAgICAgICAgIFtrKCdMJyksIGsoJ00nKSwgaygnVycpLCBrKCdYJyksIGsoJ0MnKSwgaygnVicpLCBrKCdCJyksIGsoJ04nKSwgaygnRU5URVInLCB0aGlzLnByb3BzLnByaW1hcnlDb2xvcildLFxuICAgICAgICAgICAgW2soJyAnKV0sXG4gICAgICAgIF07XG4gICAgfVxuXG4gICAgcmVuZGVyS2V5KGssIGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBpZHggPT4gPEtleSBwcmltYXJ5Q29sb3I9e2NvbG9yfSBvbkNoYW5nZT17dGhpcy5wcm9wcy5vbkNoYW5nZX0gZGlnaXQ9e2t9IGtleT17aWR4fSAvPjtcbiAgICB9XG5cbiAgICByZW5kZXJSb3cocm93LCBpZHgpIHtcbiAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT1cImtleWJvYXJkLXJvd1wiPntyb3cubWFwKChrZXksIGkpID0+IGtleShpKSl9PC9kaXY+O1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8gaXMtZnVsbGhlaWdodFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgaXMtZmx1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWJvYXJkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXlib2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5rZXlib2FyZC5tYXAoKHJvdywgaSkgPT4gdGhpcy5yZW5kZXJSb3cocm93LCBpKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbkFscGhhUGFkLnByb3BUeXBlcyA9IHtcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgICBwcmltYXJ5Q29sb3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFscGhhUGFkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIEtleSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgb25LZXlDbGljayh2YWwpIHtcbiAgICAgICAgcmV0dXJuIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHZhbCk7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBkaWdpdCA9IHRoaXMucHJvcHMuZGlnaXQ7XG4gICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5wcmltYXJ5Q29sb3IpIHtcbiAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5wcmltYXJ5Q29sb3IsXG4gICAgICAgICAgICAgICAgY29sb3I6ICcjRkZGJyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBleHRyYSA9IHRoaXMucHJvcHMubm9FeHRyYVNpemUgPyAnJyA6ICdleHRyYS1zaXplJztcblxuICAgICAgICBzd2l0Y2ggKGRpZ2l0KSB7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZX0gY2xhc3NOYW1lPVwiYnV0dG9uIGtleSBpcy11bnNlbGVjdGFibGVcIiBvbkNsaWNrPXt0aGlzLm9uS2V5Q2xpY2soZGlnaXQpfT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYVwiPntkaWdpdH08L2k+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgY2FzZSAnQkNLU1BBQ0UnOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17YGJ1dHRvbiBrZXkgaXMtdW5zZWxlY3RhYmxlICR7ZXh0cmF9YH0gb25DbGljaz17dGhpcy5vbktleUNsaWNrKGRpZ2l0KX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuYmFja3NwYWNlfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJ0VOVEVSJzpcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2BidXR0b24ga2V5IGlzLXVuc2VsZWN0YWJsZSAke2V4dHJhfWB9IG9uQ2xpY2s9e3RoaXMub25LZXlDbGljayhkaWdpdCl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmVudGVyfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIGNhc2UgJyAnOlxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT1cImJ1dHRvbiBrZXkgc3BhY2UtYmFyIGlzLXVuc2VsZWN0YWJsZVwiIG9uQ2xpY2s9e3RoaXMub25LZXlDbGljayhkaWdpdCl9PlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWtleWJvYXJkLW9cIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbktleS5wcm9wVHlwZXMgPSB7XG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlnaXQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBub0V4dHJhU2l6ZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgcHJpbWFyeUNvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubm9kZSxcbiAgICBiYWNrc3BhY2U6IFByb3BUeXBlcy5ub2RlLFxufTtcblxuS2V5LmRlZmF1bHRQcm9wcyA9IHtcbiAgICBub0V4dHJhU2l6ZTogZmFsc2UsXG4gICAgYmFja3NwYWNlOiA8aSBjbGFzc05hbWU9XCJmYSBmYS1hcnJvdy1sZWZ0XCIgLz4sXG4gICAgZW50ZXI6IDxpIGNsYXNzTmFtZT1cImZhIGZhLWNoZWNrLXNxdWFyZVwiIC8+LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgS2V5O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNsYXNzIExvYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBwc3R5bGUgPSB7XG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3Qgc3N0eWxlID0ge1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnByaW1hcnlDb2xvcikge1xuICAgICAgICAgICAgcHN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMucHJvcHMucHJpbWFyeUNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2Vjb25kYXJ5Q29sb3IpIHtcbiAgICAgICAgICAgIHNzdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnByb3BzLnNlY29uZGFyeUNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ2LWxvYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdi1zcXVhcmUgZnYtY29sb3ItYmxhY2tcIiBzdHlsZT17c3N0eWxlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdi1zcXVhcmUgZnYtY29sb3ItYmxhY2tcIiBzdHlsZT17c3N0eWxlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdi1zcXVhcmUgZnYtY29sb3ItYmxhY2sgZnYtbG9hZGVyLWxhc3RcIiBzdHlsZT17c3N0eWxlfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmdi1zcXVhcmUgZnYtY29sb3ItYnJhbmQgZnYtbG9hZGVyLWNsZWFyXCIgc3R5bGU9e3BzdHlsZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnYtc3F1YXJlIGZ2LWNvbG9yLWJyYW5kXCIgc3R5bGU9e3BzdHlsZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnYtc3F1YXJlIGZ2LWNvbG9yLWJyYW5kIGZ2LWxvYWRlci1sYXN0XCIgc3R5bGU9e3BzdHlsZX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZnYtc3F1YXJlIGZ2LWNvbG9yLWJsYWNrIGZ2LWxvYWRlci1jbGVhclwiIHN0eWxlPXtzc3R5bGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ2LXNxdWFyZSBmdi1jb2xvci1ibGFja1wiIHN0eWxlPXtzc3R5bGV9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZ2LXNxdWFyZSBmdi1jb2xvci1ibGFjayBmdi1sb2FkZXItbGFzdFwiIHN0eWxlPXtzc3R5bGV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5Mb2FkZXIucHJvcFR5cGVzID0ge1xuICAgIHByaW1hcnlDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWNvbmRhcnlDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvYWRlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEtleSBmcm9tICcuL2tleSc7XG5cbmNsYXNzIFBob25lUGFkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIGNvbnN0IGsgPSB0aGlzLnJlbmRlcktleS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmtleWJvYXJkID0gW1xuICAgICAgICAgICAgW2soJzEnKSwgaygnMicpLCBrKCczJyldLFxuICAgICAgICAgICAgW2soJzQnKSwgaygnNScpLCBrKCc2JyldLFxuICAgICAgICAgICAgW2soJzcnKSwgaygnOCcpLCBrKCc5JyldLFxuICAgICAgICAgICAgW2soJ0JDS1NQQUNFJywgdGhpcy5wcm9wcy5jYW5jZWxDb2xvciksIGsoJzAnKSwgaygnRU5URVInLCB0aGlzLnByb3BzLm9rQ29sb3IpXSxcbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICByZW5kZXJLZXkoaywgY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGlkeCA9PiA8S2V5XG4gICAgICAgICAgcHJpbWFyeUNvbG9yPXtjb2xvcn1cbiAgICAgICAgICBub0V4dHJhU2l6ZVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnByb3BzLm9uQ2hhbmdlfVxuICAgICAgICAgIGRpZ2l0PXtrfVxuICAgICAgICAgIGtleT17aWR4fVxuICAgICAgICAgIGJhY2tzcGFjZT17PGkgY2xhc3NOYW1lPVwiZmFcIj5DPC9pPn1cbiAgICAgICAgICBlbnRlcj17PGkgY2xhc3NOYW1lPVwiZmFcIj5PSzwvaT59XG4gICAgICAgIC8+O1xuICAgIH1cblxuICAgIHJlbmRlclJvdyhyb3csIGlkeCkge1xuICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2lkeH0gY2xhc3NOYW1lPVwia2V5Ym9hcmQtcm93XCI+e3Jvdy5tYXAoKGtleSwgaSkgPT4ga2V5KGkpKX08L2Rpdj47XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVybyBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpcy1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Ym9hcmQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWJvYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLmtleWJvYXJkLm1hcCgocm93LCBpKSA9PiB0aGlzLnJlbmRlclJvdyhyb3csIGkpKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuUGhvbmVQYWQucHJvcFR5cGVzID0ge1xuICAgIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIHByaW1hcnlDb2xvcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGNhbmNlbENvbG9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9rQ29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5QaG9uZVBhZC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2FuY2VsQ29sb3I6ICcjRkREODM1JyxcbiAgICBva0NvbG9yOiAnIzRDQUY1MCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQaG9uZVBhZDtcbiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFwcCBmcm9tICcuL3BhZ2VzL2FwcCc7XG5cbnJlbmRlcigoXG4gIDxCcm93c2VyUm91dGVyPlxuICAgIDxBcHAgLz5cbiAgPC9Ccm93c2VyUm91dGVyPlxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCB7IFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5Qcm9ncmVzc0NvbXBvbmVudCBmcm9tICcuL2luX3Byb2dyZXNzX2NvbXBvbmVudCc7XG5pbXBvcnQgVW5hdXRob3JpemVkQ29tcG9uZW50IGZyb20gJy4vdW5hdXRob3JpemVkX2NvbXBvbmVudCc7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tYWNoaW5lLzptYWNcIiBjb21wb25lbnQ9e1VuYXV0aG9yaXplZENvbXBvbmVudH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2Rlc2svOm1hY1wiIGNvbXBvbmVudD17SW5Qcm9ncmVzc0NvbXBvbmVudH0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3NjcmVlbi86bWFjXCIgY29tcG9uZW50PXtJblByb2dyZXNzQ29tcG9uZW50fSAvPlxuICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9sb2FkZXInO1xuXG5jbGFzcyBJblByb2dyZXNzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpcy1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxMb2FkZXIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJblByb2dyZXNzQ29tcG9uZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBbHBoYVBhZCBmcm9tICcuLi9jb21wb25lbnRzL2FscGhhcGFkJztcbmltcG9ydCBQaG9uZVBhZCBmcm9tICcuLi9jb21wb25lbnRzL3Bob25lcGFkJztcblxuY2xhc3MgVW5hdXRob3JpemVkQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICAvKiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGVybyBpcy1mdWxsaGVpZ2h0XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm8tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBpcy1mbHVpZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gaXMtaGFsZiBpcy1vZmZzZXQtb25lLXF1YXJ0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWW91IGFyZSBub3QgYXV0aG9yaXplZCB0byBhY2Nlc3MgdGhpcyBwYWdlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgY29udGFjdCB5b3VyIGFkbWluaXN0cmF0b3IgdG8gc29sdmUgdGhlIHByb2JsZW0uXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICk7XG4gICAgICAgIH0qL1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKDxQaG9uZVBhZFxuICAgICAgICAgIG9uQ2hhbmdlPXsodmFsKSA9PiB7IGNvbnNvbGUubG9nKHZhbCk7IH19XG4gICAgICAgICAgcHJpbWFyeUNvbG9yPVwiI0U2MDAxOVwiXG4gICAgICAgIC8+KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVuYXV0aG9yaXplZENvbXBvbmVudDtcbiJdfQ==
