(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*** Created by yangyusenhit on 2016/3/31.*/


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterActions = function () {
    function FooterActions() {
        _classCallCheck(this, FooterActions);

        this.generateActions('getTopCharactersSuccess', 'getTopCharactersFail');
    }

    _createClass(FooterActions, [{
        key: 'getTopCharacters',
        value: function getTopCharacters() {
            var _this = this;

            $.ajax({ url: '/api/characters/top' }).done(function (data) {
                _this.actions.getTopCharactersSuccess(data);
            }).fail(function (jqXhr) {
                _this.actions.getTopCharactersFail(jqXhr);
            });
        }
    }]);

    return FooterActions;
}();

exports.default = _alt2.default.createActions(FooterActions);

},{"../alt":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _alt = require('alt');

var _alt2 = _interopRequireDefault(_alt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _alt2.default(); /**
                                        * Created by yangyusenhit on 2016/3/25.
                                        */

},{"alt":"alt"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Footer = require('./Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hasee on 2016/3/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


//import {RouteHandler} from 'react-router';

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                this.props.children,
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

},{"./Footer":4,"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _FooterStore = require('../stores/FooterStore');

var _FooterStore2 = _interopRequireDefault(_FooterStore);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by yangyusenhit on 2016/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer(props) {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));

        _this.state = _FooterStore2.default.getState();
        _this.onChange = _this.onChange.bind(_this);
        return _this;
    }

    //在组件render之后执行


    _createClass(Footer, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _FooterStore2.default.listen(this.onChange);
            _FooterActions2.default.getTopCharacters();
        }

        //在组件销毁之前执行

    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _FooterStore2.default.unlisten(this.onChange);
        }
    }, {
        key: 'onChange',
        value: function onChange(state) {
            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {
            var leaderboardCharacters = this.state.characters.map(function (character) {
                return _react2.default.createElement(
                    'li',
                    { key: character.characterId },
                    _react2.default.createElement(
                        _reactRouter.Link,
                        { to: '/characters/' + character.characterId },
                        _react2.default.createElement('img', { className: 'thumb-md',
                            src: 'http://image.eveonline.com/Character/' + character.characterId + '_128.jpg' })
                    )
                );
            });

            return _react2.default.createElement(
                'footer',
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'row' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-5' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'lead' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Information'
                                ),
                                ' and ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Copyright'
                                )
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'Powered by ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Node.js'
                                ),
                                ',',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'MongoDB'
                                ),
                                ' and ',
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'React'
                                ),
                                ' with Flux architecture and server-side rendering.'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                'You may view the ',
                                _react2.default.createElement(
                                    'a',
                                    { href: 'https://github.com/EthanYangHIT/newedenfaces-react' },
                                    'Source Code'
                                ),
                                ' behind this project on GitHub.'
                            ),
                            _react2.default.createElement(
                                'p',
                                null,
                                '© 2015 Ethan Yang.'
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-sm-7 hidden-sx' },
                            _react2.default.createElement(
                                'h3',
                                { className: 'lead' },
                                _react2.default.createElement(
                                    'strong',
                                    null,
                                    'Leaderboard'
                                ),
                                '  Top 5 Characters'
                            ),
                            _react2.default.createElement(
                                'ul',
                                { className: 'list-inline' },
                                leaderboardCharacters
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"../actions/FooterActions":1,"../stores/FooterStore":8,"react":"react","react-router":"react-router"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hasee on 2016/3/27.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'alert alert-info' },
                'Hello from Component'
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

},{"react":"react"}],6:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactRouter2 = _interopRequireDefault(_reactRouter);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var React = require('react');
//var Router = require('react-router');
//var routes = require('./routes');

_reactRouter2.default.run(_routes2.default, _reactRouter2.default.HistoryLocation, function (Handler) {
    _react2.default.render(_react2.default.createElement(Handler, null), document.getElementById('app'));
    //React.render(
    //    React.createElement('Handler', null, null),
    //    document.getElementById('app')
    //)
}); /**
     * Created by yangyusenhit on 2016/3/25.
     */

},{"./routes":7,"react":"react","react-router":"react-router"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _App = require('./components/App');

var _App2 = _interopRequireDefault(_App);

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//var React = require('react');
//var Route = require('react-router').Route;
//var NotFoundRoute = require('react-router').NotFoundRoute;
//var App = require('./components/App');
//var Home = require('./components/Home');

/**
 * Created by yangyusenhit on 2016/3/25.
 */
exports.default = _react2.default.createElement(
    _reactRouter.Route,
    { component: _App2.default },
    _react2.default.createElement(_reactRouter.Route, { path: '/', component: _Home2.default })
);

},{"./components/App":3,"./components/Home":5,"react":"react","react-router":"react-router"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by yangyusenhit on 2016/3/31.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _alt = require('../alt');

var _alt2 = _interopRequireDefault(_alt);

var _FooterActions = require('../actions/FooterActions');

var _FooterActions2 = _interopRequireDefault(_FooterActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FooterStore = function () {
    function FooterStore() {
        _classCallCheck(this, FooterStore);

        this.bindActions(_FooterActions2.default);
        this.characters = [];
    }

    _createClass(FooterStore, [{
        key: 'onGetTopCharactersSuccess',
        value: function onGetTopCharactersSuccess(data) {
            this.characters = data.slice(0, 5);
        }
    }, {
        key: 'onGetTopCharactersFail',
        value: function onGetTopCharactersFail(jqXhr) {
            toastr.error(jqXhr.responseJSON && jqXhr.responseJSON.message || jqXhr.responseText || jqXhr.statusText);
        }
    }]);

    return FooterStore;
}();

exports.default = _alt2.default.createStore(FooterStore);

},{"../actions/FooterActions":1,"../alt":2}]},{},[6]);
