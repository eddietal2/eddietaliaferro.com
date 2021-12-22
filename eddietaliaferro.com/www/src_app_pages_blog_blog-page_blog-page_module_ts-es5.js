(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkeddietaliaferro_com"] = self["webpackChunkeddietaliaferro_com"] || []).push([["src_app_pages_blog_blog-page_blog-page_module_ts"], {
    /***/
    58524:
    /*!********************************************************!*\
      !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            assign
          );
        }
        /* harmony export */

      });

      function assign(target, dirtyObject) {
        if (target == null) {
          throw new TypeError('assign requires that input parameter not be null or undefined');
        }

        dirtyObject = dirtyObject || {};

        for (var property in dirtyObject) {
          if (Object.prototype.hasOwnProperty.call(dirtyObject, property)) {
            target[property] = dirtyObject[property];
          }
        }

        return target;
      }
      /***/

    },

    /***/
    61092:
    /*!*************************************************************!*\
      !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            cloneObject
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../assign/index.js */
      58524);

      function cloneObject(dirtyObject) {
        return (0, _assign_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, dirtyObject);
      }
      /***/

    },

    /***/
    60302:
    /*!*****************************************************************!*\
      !*** ./node_modules/date-fns/esm/_lib/roundingMethods/index.js ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "getRoundingMethod": function getRoundingMethod() {
          return (
            /* binding */
            _getRoundingMethod
          );
        }
        /* harmony export */

      });

      var roundingMap = {
        ceil: Math.ceil,
        round: Math.round,
        floor: Math.floor,
        trunc: function trunc(value) {
          return value < 0 ? Math.ceil(value) : Math.floor(value);
        } // Math.trunc is not supported by IE

      };
      var defaultRoundingMethod = 'trunc';

      function _getRoundingMethod(method) {
        return method ? roundingMap[method] : roundingMap[defaultRoundingMethod];
      }
      /***/

    },

    /***/
    17986:
    /*!*******************************************************!*\
      !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            compareAsc
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name compareAsc
       * @category Common Helpers
       * @summary Compare the two dates and return -1, 0 or 1.
       *
       * @description
       * Compare the two dates and return 1 if the first date is after the second,
       * -1 if the first date is before the second or 0 if dates are equal.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the first date to compare
       * @param {Date|Number} dateRight - the second date to compare
       * @returns {Number} the result of the comparison
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // Compare 11 February 1987 and 10 July 1989:
       * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
       * //=> -1
       *
       * @example
       * // Sort the array of dates:
       * const result = [
       *   new Date(1995, 6, 2),
       *   new Date(1987, 1, 11),
       *   new Date(1989, 6, 10)
       * ].sort(compareAsc)
       * //=> [
       * //   Wed Feb 11 1987 00:00:00,
       * //   Mon Jul 10 1989 00:00:00,
       * //   Sun Jul 02 1995 00:00:00
       * // ]
       */


      function compareAsc(dirtyDateLeft, dirtyDateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var dateLeft = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
        var dateRight = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
        var diff = dateLeft.getTime() - dateRight.getTime();

        if (diff < 0) {
          return -1;
        } else if (diff > 0) {
          return 1; // Return 0 if diff is 0; return NaN if diff is NaN
        } else {
          return diff;
        }
      }
      /***/

    },

    /***/
    45366:
    /*!***********************************************************************!*\
      !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            differenceInCalendarMonths
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name differenceInCalendarMonths
       * @category Month Helpers
       * @summary Get the number of calendar months between the given dates.
       *
       * @description
       * Get the number of calendar months between the given dates.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the later date
       * @param {Date|Number} dateRight - the earlier date
       * @returns {Number} the number of calendar months
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // How many calendar months are between 31 January 2014 and 1 September 2014?
       * var result = differenceInCalendarMonths(
       *   new Date(2014, 8, 1),
       *   new Date(2014, 0, 31)
       * )
       * //=> 8
       */


      function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var dateLeft = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
        var dateRight = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
        var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
        var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
        return yearDiff * 12 + monthDiff;
      }
      /***/

    },

    /***/
    77121:
    /*!*********************************************************************!*\
      !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            differenceInMilliseconds
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name differenceInMilliseconds
       * @category Millisecond Helpers
       * @summary Get the number of milliseconds between the given dates.
       *
       * @description
       * Get the number of milliseconds between the given dates.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the later date
       * @param {Date|Number} dateRight - the earlier date
       * @returns {Number} the number of milliseconds
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // How many milliseconds are between
       * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
       * const result = differenceInMilliseconds(
       *   new Date(2014, 6, 2, 12, 30, 21, 700),
       *   new Date(2014, 6, 2, 12, 30, 20, 600)
       * )
       * //=> 1100
       */


      function differenceInMilliseconds(dateLeft, dateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        return (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft).getTime() - (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateRight).getTime();
      }
      /***/

    },

    /***/
    30743:
    /*!***************************************************************!*\
      !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            differenceInMonths
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../differenceInCalendarMonths/index.js */
      45366);
      /* harmony import */


      var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../compareAsc/index.js */
      17986);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /* harmony import */


      var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../isLastDayOfMonth/index.js */
      44303);
      /**
       * @name differenceInMonths
       * @category Month Helpers
       * @summary Get the number of full months between the given dates.
       *
       * @description
       * Get the number of full months between the given dates using trunc as a default rounding method.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the later date
       * @param {Date|Number} dateRight - the earlier date
       * @returns {Number} the number of full months
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // How many full months are between 31 January 2014 and 1 September 2014?
       * const result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
       * //=> 7
       */


      function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var dateLeft = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
        var dateRight = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
        var sign = (0, _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight);
        var difference = Math.abs((0, _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dateLeft, dateRight));
        var result; // Check for the difference of less than month

        if (difference < 1) {
          result = 0;
        } else {
          if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
            // This will check if the date is end of Feb and assign a higher end of month date
            // to compare it with Jan
            dateLeft.setDate(30);
          }

          dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
          // If so, result must be decreased by 1 in absolute value

          var isLastMonthNotFull = (0, _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

          if ((0, _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])((0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft)) && difference === 1 && (0, _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDateLeft, dateRight) === 1) {
            isLastMonthNotFull = false;
          }

          result = sign * (difference - Number(isLastMonthNotFull));
        } // Prevent negative zero


        return result === 0 ? 0 : result;
      }
      /***/

    },

    /***/
    84278:
    /*!****************************************************************!*\
      !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            differenceInSeconds
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../differenceInMilliseconds/index.js */
      77121);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /* harmony import */


      var _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_lib/roundingMethods/index.js */
      60302);
      /**
       * @name differenceInSeconds
       * @category Second Helpers
       * @summary Get the number of seconds between the given dates.
       *
       * @description
       * Get the number of seconds between the given dates.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} dateLeft - the later date
       * @param {Date|Number} dateRight - the earlier date
       * @param {Object} [options] - an object with options.
       * @param {String} [options.roundingMethod='trunc'] - a rounding method (`ceil`, `floor`, `round` or `trunc`)
       * @returns {Number} the number of seconds
       * @throws {TypeError} 2 arguments required
       *
       * @example
       * // How many seconds are between
       * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
       * const result = differenceInSeconds(
       *   new Date(2014, 6, 2, 12, 30, 20, 0),
       *   new Date(2014, 6, 2, 12, 30, 7, 999)
       * )
       * //=> 12
       */


      function differenceInSeconds(dateLeft, dateRight, options) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var diff = (0, _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dateLeft, dateRight) / 1000;
        return (0, _lib_roundingMethods_index_js__WEBPACK_IMPORTED_MODULE_2__.getRoundingMethod)(options === null || options === void 0 ? void 0 : options.roundingMethod)(diff);
      }
      /***/

    },

    /***/
    88703:
    /*!*****************************************************!*\
      !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            endOfDay
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name endOfDay
       * @category Day Helpers
       * @summary Return the end of a day for the given date.
       *
       * @description
       * Return the end of a day for the given date.
       * The result will be in the local timezone.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the original date
       * @returns {Date} the end of a day
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // The end of a day for 2 September 2014 11:55:00:
       * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
       * //=> Tue Sep 02 2014 23:59:59.999
       */


      function endOfDay(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        date.setHours(23, 59, 59, 999);
        return date;
      }
      /***/

    },

    /***/
    64005:
    /*!*******************************************************!*\
      !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            endOfMonth
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name endOfMonth
       * @category Month Helpers
       * @summary Return the end of a month for the given date.
       *
       * @description
       * Return the end of a month for the given date.
       * The result will be in the local timezone.
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the original date
       * @returns {Date} the end of a month
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // The end of a month for 2 September 2014 11:55:00:
       * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
       * //=> Tue Sep 30 2014 23:59:59.999
       */


      function endOfMonth(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        var month = date.getMonth();
        date.setFullYear(date.getFullYear(), month + 1, 0);
        date.setHours(23, 59, 59, 999);
        return date;
      }
      /***/

    },

    /***/
    73169:
    /*!***********************************************************!*\
      !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            formatDistance
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../compareAsc/index.js */
      17986);
      /* harmony import */


      var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../differenceInMonths/index.js */
      30743);
      /* harmony import */


      var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../differenceInSeconds/index.js */
      84278);
      /* harmony import */


      var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../locale/en-US/index.js */
      75955);
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_lib/cloneObject/index.js */
      61092);
      /* harmony import */


      var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */
      99338);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);

      var MINUTES_IN_DAY = 1440;
      var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
      var MINUTES_IN_MONTH = 43200;
      var MINUTES_IN_TWO_MONTHS = 86400;
      /**
       * @name formatDistance
       * @category Common Helpers
       * @summary Return the distance between the given dates in words.
       *
       * @description
       * Return the distance between the given dates in words.
       *
       * | Distance between dates                                            | Result              |
       * |-------------------------------------------------------------------|---------------------|
       * | 0 ... 30 secs                                                     | less than a minute  |
       * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
       * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
       * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
       * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
       * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
       * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
       * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
       * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
       * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
       * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
       * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
       * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
       * | N yrs ... N yrs 3 months                                          | about N years       |
       * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
       * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
       *
       * With `options.includeSeconds == true`:
       * | Distance between dates | Result               |
       * |------------------------|----------------------|
       * | 0 secs ... 5 secs      | less than 5 seconds  |
       * | 5 secs ... 10 secs     | less than 10 seconds |
       * | 10 secs ... 20 secs    | less than 20 seconds |
       * | 20 secs ... 40 secs    | half a minute        |
       * | 40 secs ... 60 secs    | less than a minute   |
       * | 60 secs ... 90 secs    | 1 minute             |
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * - The function was renamed from `distanceInWords ` to `formatDistance`
       *   to make its name consistent with `format` and `formatRelative`.
       *
       * - The order of arguments is swapped to make the function
       *   consistent with `differenceIn...` functions.
       *
       *   ```javascript
       *   // Before v2.0.0
       *
       *   distanceInWords(
       *     new Date(1986, 3, 4, 10, 32, 0),
       *     new Date(1986, 3, 4, 11, 32, 0),
       *     { addSuffix: true }
       *   ) //=> 'in about 1 hour'
       *
       *   // v2.0.0 onward
       *
       *   formatDistance(
       *     new Date(1986, 3, 4, 11, 32, 0),
       *     new Date(1986, 3, 4, 10, 32, 0),
       *     { addSuffix: true }
       *   ) //=> 'in about 1 hour'
       *   ```
       *
       * @param {Date|Number} date - the date
       * @param {Date|Number} baseDate - the date to compare with
       * @param {Object} [options] - an object with options.
       * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
       * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
       * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
       * @returns {String} the distance in words
       * @throws {TypeError} 2 arguments required
       * @throws {RangeError} `date` must not be Invalid Date
       * @throws {RangeError} `baseDate` must not be Invalid Date
       * @throws {RangeError} `options.locale` must contain `formatDistance` property
       *
       * @example
       * // What is the distance between 2 July 2014 and 1 January 2015?
       * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
       * //=> '6 months'
       *
       * @example
       * // What is the distance between 1 January 2015 00:00:15
       * // and 1 January 2015 00:00:00, including seconds?
       * const result = formatDistance(
       *   new Date(2015, 0, 1, 0, 0, 15),
       *   new Date(2015, 0, 1, 0, 0, 0),
       *   { includeSeconds: true }
       * )
       * //=> 'less than 20 seconds'
       *
       * @example
       * // What is the distance from 1 January 2016
       * // to 1 January 2015, with a suffix?
       * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
       *   addSuffix: true
       * })
       * //=> 'about 1 year ago'
       *
       * @example
       * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
       * import { eoLocale } from 'date-fns/locale/eo'
       * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
       *   locale: eoLocale
       * })
       * //=> 'pli ol 1 jaro'
       */

      function formatDistance(dirtyDate, dirtyBaseDate) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
        var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];

        if (!locale.formatDistance) {
          throw new RangeError('locale must contain formatDistance property');
        }

        var comparison = (0, _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyBaseDate);

        if (isNaN(comparison)) {
          throw new RangeError('Invalid time value');
        }

        var localizeOptions = (0, _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(options);
        localizeOptions.addSuffix = Boolean(options.addSuffix);
        localizeOptions.comparison = comparison;
        var dateLeft;
        var dateRight;

        if (comparison > 0) {
          dateLeft = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
          dateRight = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
        } else {
          dateLeft = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
          dateRight = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyBaseDate);
        }

        var seconds = (0, _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(dateRight, dateLeft);
        var offsetInSeconds = ((0, _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateRight) - (0, _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(dateLeft)) / 1000;
        var minutes = Math.round((seconds - offsetInSeconds) / 60);
        var months; // 0 up to 2 mins

        if (minutes < 2) {
          if (options.includeSeconds) {
            if (seconds < 5) {
              return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
            } else if (seconds < 10) {
              return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
            } else if (seconds < 20) {
              return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
            } else if (seconds < 40) {
              return locale.formatDistance('halfAMinute', null, localizeOptions);
            } else if (seconds < 60) {
              return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
            } else {
              return locale.formatDistance('xMinutes', 1, localizeOptions);
            }
          } else {
            if (minutes === 0) {
              return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
            } else {
              return locale.formatDistance('xMinutes', minutes, localizeOptions);
            }
          } // 2 mins up to 0.75 hrs

        } else if (minutes < 45) {
          return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
        } else if (minutes < 90) {
          return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
        } else if (minutes < MINUTES_IN_DAY) {
          var hours = Math.round(minutes / 60);
          return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
        } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
          return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
        } else if (minutes < MINUTES_IN_MONTH) {
          var days = Math.round(minutes / MINUTES_IN_DAY);
          return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
        } else if (minutes < MINUTES_IN_TWO_MONTHS) {
          months = Math.round(minutes / MINUTES_IN_MONTH);
          return locale.formatDistance('aboutXMonths', months, localizeOptions);
        }

        months = (0, _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(dateRight, dateLeft); // 2 months up to 12 months

        if (months < 12) {
          var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
          return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
        } else {
          var monthsSinceStartOfYear = months % 12;
          var years = Math.floor(months / 12); // N years up to 1 years 3 months

          if (monthsSinceStartOfYear < 3) {
            return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
          } else if (monthsSinceStartOfYear < 9) {
            return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
          } else {
            return locale.formatDistance('almostXYears', years + 1, localizeOptions);
          }
        }
      }
      /***/

    },

    /***/
    44303:
    /*!*************************************************************!*\
      !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            isLastDayOfMonth
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../toDate/index.js */
      62711);
      /* harmony import */


      var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../endOfDay/index.js */
      88703);
      /* harmony import */


      var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../endOfMonth/index.js */
      64005);
      /* harmony import */


      var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_lib/requiredArgs/index.js */
      24252);
      /**
       * @name isLastDayOfMonth
       * @category Month Helpers
       * @summary Is the given date the last day of a month?
       *
       * @description
       * Is the given date the last day of a month?
       *
       * ### v2.0.0 breaking changes:
       *
       * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
       *
       * @param {Date|Number} date - the date to check
       * @returns {Boolean} the date is the last day of a month
       * @throws {TypeError} 1 argument required
       *
       * @example
       * // Is 28 February 2014 the last day of a month?
       * var result = isLastDayOfMonth(new Date(2014, 1, 28))
       * //=> true
       */


      function isLastDayOfMonth(dirtyDate) {
        (0, _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
        var date = (0, _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
        return (0, _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() === (0, _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();
      }
      /***/

    },

    /***/
    62593:
    /*!*************************************************************************!*\
      !*** ./src/app/components/comment-options/comment-options.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CommentOptionsComponent": function CommentOptionsComponent() {
          return (
            /* binding */
            _CommentOptionsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comment_options_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./comment-options.component.html */
      62629);
      /* harmony import */


      var _comment_options_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./comment-options.component.scss */
      16594);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! date-fns */
      73169);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! date-fns */
      98048);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/blog/blog.service */
      22036);

      var _CommentOptionsComponent = /*#__PURE__*/function () {
        function CommentOptionsComponent(blogService, popoverController, alertController, toastController) {
          _classCallCheck(this, CommentOptionsComponent);

          this.blogService = blogService;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.toastController = toastController;
        }

        _createClass(CommentOptionsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.blogID, this.commentID, this.userFullName, this.title, this.comments);
          }
        }, {
          key: "close",
          value: function close() {
            this.popoverController.dismiss();
          }
        }, {
          key: "deleteComment",
          value: function deleteComment(blogID, commentID, userFullName, title) {
            var _this = this;

            this.blogService.deleteComment(blogID, commentID, userFullName, title).subscribe(function (data) {
              console.log(data);
              _this.comments = data['comments'];
              _this.commentsLength = _this.comments.length;

              for (var i = 0; i < _this.comments.length; i++) {
                _this.comments[i]['date'] = (0, date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(_this.comments[i]['date']), Date.now());
              } // Slide Out Animation for Reply.


              var commentWrapper = document.getElementById(commentID + '-comment-wrapper');
              var start = Date.now();
              var timer = setInterval(function () {
                // how much time passed from the start?
                var timePassed = Date.now() - start;

                if (timePassed >= 200) {
                  commentWrapper.style.transform = 'translateX(-50px)';
                }

                if (timePassed >= 500) {
                  commentWrapper.style.opacity = '0';
                }

                if (timePassed >= 1000) {
                  commentWrapper.style.height = '0px';
                  commentWrapper.style.display = 'none';
                  commentWrapper.remove();
                  clearInterval(timer); // finish the animation after 2 seconds

                  return;
                }
              }, 20);
            });
            this.deleteCommentToast();
            return;
          }
        }, {
          key: "deleteCommentAlert",
          value: function deleteCommentAlert(blogID, commentID, userFullName, title) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Are you sure you want to Delete this comment?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this2.deleteComment(blogID, commentID, userFullName, title);

                            _this2.popoverController.dismiss();
                          }
                        }]
                      });

                    case 2:
                      alert = _context.sent;
                      _context.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "deleteCommentToast",
          value: function deleteCommentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var toast, _toast;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      console.log(window.innerWidth);

                      if (!(window.innerWidth > 993)) {
                        _context2.next = 9;
                        break;
                      }

                      _context2.next = 4;
                      return this.toastController.create({
                        message: 'You have successfully deleted a Comment!',
                        position: 'bottom',
                        cssClass: 'danger-toast',
                        duration: 2000
                      });

                    case 4:
                      toast = _context2.sent;
                      toast.present();
                      return _context2.abrupt("return");

                    case 9:
                      _context2.next = 11;
                      return this.toastController.create({
                        message: 'You have successfully deleted a Comment!',
                        cssClass: 'danger-toast-mobile',
                        duration: 2000
                      });

                    case 11:
                      _toast = _context2.sent;

                      _toast.present();

                      return _context2.abrupt("return");

                    case 14:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "editComment",
          value: function editComment() {
            var _this3 = this;

            this.popoverController.dismiss();
            console.log(this.comment);
            console.log(this.replyInput);
            console.log(this.replyInputButton);
            this.commentMoreButton.style.opacity = 0;
            var commentValue = this.comment.innerHTML; // Edit Text Area Element

            var editTextarea = document.createElement('textarea');
            editTextarea.setAttribute('rows', '10');
            editTextarea.setAttribute('id', this.comment);
            editTextarea.style.fontSize = '18px';
            editTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
            editTextarea.style.width = '100%';
            editTextarea.style.border = '4px solid #1a061b';
            editTextarea.style.borderRadius = '10px';
            editTextarea.style.backgroundColor = '#fff9';
            editTextarea.style.color = '#333';
            editTextarea.style.padding = '1em';
            editTextarea.style.marginBottom = '1em';
            editTextarea.innerHTML = commentValue;
            var mobileCommentInput = document.getElementById('mobile-comment-input');
            editTextarea.addEventListener('focus', function () {
              mobileCommentInput.style.transition = '0.5s';
              mobileCommentInput.style.height = '0px';
            });
            editTextarea.addEventListener('blur', function () {
              mobileCommentInput.style.transition = '0.5s';
              mobileCommentInput.style.height = '80px';
            }); // Complete Edit Button

            var completeEditButton = document.createElement('button');
            completeEditButton.innerHTML = 'Edit';
            editTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
            completeEditButton.style.width = '100px';
            completeEditButton.style.padding = '0.6em 0.3em';
            completeEditButton.style.margin = '0.3em 0.5em';
            completeEditButton.style.borderRadius = '100px';
            completeEditButton.style.color = 'white';
            completeEditButton.style.background = '#ff00006e';
            completeEditButton.addEventListener('click', function () {
              console.log('Completing Edit');
              cancelEditButton.remove();
              completeEditButton.remove();
              _this3.replyInput.style.display = 'block';
              _this3.replyInputButton.style.display = 'block'; // HTTP Request

              _this3.editCommentSub = _this3.blogService.editComment(_this3.blogID, _this3.commentID, editTextarea.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(function (res) {
                if (!res) {
                  console.log('There was no response.');
                  _this3.commentMoreButton.style.opacity = 1;
                }
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(function (e) {
                console.error(e);

                if (e) {
                  _this3.presentAlert('Error ', 'There was an error editting your comment');
                }

                editTextarea.replaceWith(_this3.comment);
                _this3.commentMoreButton.style.opacity = 1;
                throw new Error(e);
              })).subscribe(function (data) {
                console.log(data); // Only update Comment if there was a successful network request.

                _this3.comment.innerHTML = editTextarea.value;
                _this3.commentMoreButton.style.opacity = 1;
                editTextarea.replaceWith(_this3.comment);
              });
            }); // Cancel Edit Button

            var cancelEditButton = document.createElement('button');
            cancelEditButton.innerHTML = 'Cancel';
            editTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
            cancelEditButton.style.width = '100px';
            cancelEditButton.style.padding = '0.6em 0.3em';
            cancelEditButton.style.margin = '0.3m 0';
            cancelEditButton.style.borderRadius = '100px';
            cancelEditButton.style.color = 'white';
            completeEditButton.style.background = '#3cf63c5e';
            cancelEditButton.addEventListener('click', function () {
              console.log('Cancelling Edit');
              cancelEditButton.remove();
              completeEditButton.remove();
              _this3.replyInput.style.display = 'block';
              _this3.replyInputButton.style.display = 'block';
              editTextarea.replaceWith(_this3.comment);
              _this3.commentMoreButton.style.opacity = 1;
            }); // Adding elements to interface.

            this.comment.replaceWith(editTextarea);
            this.replyInput.style.display = 'none';
            this.replyInputButton.style.display = 'none';
            insertAfter(editTextarea, completeEditButton);
            insertAfter(completeEditButton, cancelEditButton); // Inserting buttons after edit textarea

            function insertAfter(referenceNode, newNode) {
              referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
          }
        }, {
          key: "editCommentToast",
          value: function editCommentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var toast;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.toastController.create({
                        message: 'You have successfully editted a Comment!',
                        cssClass: 'edit-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context3.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(header, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context4.sent;
                      _context4.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return CommentOptionsComponent;
      }();

      _CommentOptionsComponent.ctorParameters = function () {
        return [{
          type: src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
        }];
      };

      _CommentOptionsComponent.propDecorators = {
        blogID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["blogID"]
        }],
        commentID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["commentID"]
        }],
        userFullName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["userFullName"]
        }],
        title: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["title"]
        }],
        comments: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["comments"]
        }],
        comment: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["comment"]
        }],
        replyInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["replyInput"]
        }],
        replyInputButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["replyInputButton"]
        }],
        commentMoreButton: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input,
          args: ["commentMoreButton"]
        }]
      };
      _CommentOptionsComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comment-options',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_comment_options_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_comment_options_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _CommentOptionsComponent);
      /***/
    },

    /***/
    47688:
    /*!******************************************************************!*\
      !*** ./src/app/pages/blog/blog-page/blog-page-routing.module.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogPagePageRoutingModule": function BlogPagePageRoutingModule() {
          return (
            /* binding */
            _BlogPagePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _blog_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blog-page.page */
      47182);

      var routes = [{
        path: '',
        component: _blog_page_page__WEBPACK_IMPORTED_MODULE_0__.BlogPagePage
      }];

      var _BlogPagePageRoutingModule = function BlogPagePageRoutingModule() {
        _classCallCheck(this, BlogPagePageRoutingModule);
      };

      _BlogPagePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _BlogPagePageRoutingModule);
      /***/
    },

    /***/
    85413:
    /*!**********************************************************!*\
      !*** ./src/app/pages/blog/blog-page/blog-page.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogPagePageModule": function BlogPagePageModule() {
          return (
            /* binding */
            _BlogPagePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _blog_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./blog-page-routing.module */
      47688);
      /* harmony import */


      var _blog_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blog-page.page */
      47182);

      var _BlogPagePageModule = function BlogPagePageModule() {
        _classCallCheck(this, BlogPagePageModule);
      };

      _BlogPagePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _blog_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.BlogPagePageRoutingModule],
        declarations: [_blog_page_page__WEBPACK_IMPORTED_MODULE_1__.BlogPagePage]
      })], _BlogPagePageModule);
      /***/
    },

    /***/
    47182:
    /*!********************************************************!*\
      !*** ./src/app/pages/blog/blog-page/blog-page.page.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BlogPagePage": function BlogPagePage() {
          return (
            /* binding */
            _BlogPagePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_page_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./blog-page.page.html */
      10422);
      /* harmony import */


      var _blog_page_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./blog-page.page.scss */
      40924);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/blog/blog.service */
      22036);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! date-fns */
      79379);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! date-fns */
      98048);
      /* harmony import */


      var date_fns__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! date-fns */
      73169);
      /* harmony import */


      var src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/auth/auth.service */
      51228);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      98636);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! rxjs/operators */
      18293);
      /* harmony import */


      var src_app_components_comment_options_comment_options_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/components/comment-options/comment-options.component */
      62593);
      /* harmony import */


      var src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/emitters/admin-blog-emitter/admin-blog-emitter.service */
      97775);

      var _BlogPagePage = /*#__PURE__*/function () {
        function BlogPagePage(router, activatedRoute, toastController, popoverController, alertController, adminBlogEmitterService, auth, blogService) {
          _classCallCheck(this, BlogPagePage);

          this.router = router;
          this.activatedRoute = activatedRoute;
          this.toastController = toastController;
          this.popoverController = popoverController;
          this.alertController = alertController;
          this.adminBlogEmitterService = adminBlogEmitterService;
          this.auth = auth;
          this.blogService = blogService;
          this.userType = 'none';
          this.commentMoreButtonActive = false;
        }

        _createClass(BlogPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var id = this.activatedRoute.snapshot.paramMap.get('id');
            this.id = id; // For returning to this blog after logging in or registering

            this.auth.blogID = id;
            this.getUserDetails();
            this.getBlogInfo();
            this.getBlogsForNextPrev();
          } // Blog

        }, {
          key: "getBlogInfo",
          value: function getBlogInfo() {
            var _this4 = this;

            this.blogInfoSub = this.blogService.getBlogInfo(this.id).subscribe(function (info) {
              // console.log(info);
              _this4.title = info['title'];
              _this4.thumbnail = info['thumbnail'];
              _this4.date = (0, date_fns__WEBPACK_IMPORTED_MODULE_6__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(info['date']), 'MMMM do, uu');
              _this4.hashtags = info['hashtags'];
              _this4.comments = info['comments'];
              _this4.commentsLength = _this4.comments.length; // Convert Code to Pre tags

              var codeSourceOne = info['code_1'];
              var codeSourceTwo = info['code_2'];
              var codeSourceThree = info['code_3'];
              var codeSourceFour = info['code_4'];
              var codeSourceFive = info['code_5']; // For HTML Tags, include excape characters so
              // browsers doesn't read tags as actual HTML tags

              codeSourceOne = codeSourceOne.replace(/</g, '&lt');
              codeSourceOne = codeSourceOne.replace(/>/g, '&gt');
              codeSourceTwo = codeSourceTwo.replace(/</g, '&lt');
              codeSourceTwo = codeSourceTwo.replace(/>/g, '&gt');
              codeSourceThree = codeSourceThree.replace(/</g, '&lt');
              codeSourceThree = codeSourceThree.replace(/>/g, '&gt');
              codeSourceFour = codeSourceFour.replace(/</g, '&lt');
              codeSourceFour = codeSourceFour.replace(/>/g, '&gt');
              codeSourceFive = codeSourceFive.replace(/</g, '&lt');
              codeSourceFive = codeSourceFive.replace(/>/g, '&gt');
              var convertedCodeOne = "<div style=\"background: #333;padding: 1em;\"><pre><code style=\"background: #333; color: white; padding: 0.5em; border-radius: 10px;\">".concat(codeSourceOne, "</code></pre></div>");
              var convertedCodeTwo = "<div style=\"background: #333;padding: 1em;\"><pre><code style=\"background: #333; color: white; padding: 0.5em; border-radius: 10px;\">".concat(codeSourceTwo, "</code></pre></div>");
              var convertedCodeThree = "<div style=\"background: #333;padding: 1em;\"><pre><code style=\"background: #333; color: white; padding: 0.5em; border-radius: 10px;\">".concat(codeSourceThree, "</code></pre></div>");
              var convertedCodeFour = "<div style=\"background: #333;padding: 1em;\"><pre><code style=\"background: #333; color: white; padding: 0.5em; border-radius: 10px;\">".concat(codeSourceFour, "</code></pre></div>");
              var convertedCodeFive = "<div style=\"background: #333;padding: 1em;\"><pre><code style=\"background: #333; color: white; padding: 0.5em; border-radius: 10px;\">".concat(codeSourceFive, "</code></pre></div>"); // Create Object to put in replace

              var codeInserts = {
                '<< code-1 >>': convertedCodeOne,
                '<< code-2 >>': convertedCodeTwo,
                '<< code-3 >>': convertedCodeThree,
                '<< code-4 >>': convertedCodeFour,
                '<< code-5 >>': convertedCodeFive
              }; // Grab photo links from Blogs Object

              var pictureSourceOne = info['picture_1'];
              var pictureSourceTwo = info['picture_2'];
              var pictureSourceThree = info['picture_3'];
              var pictureSourceFour = info['picture_4'];
              var pictureSourceFive = info['picture_5']; // Convert links to HTML Elements

              var convertedPictureOne = "<br><img style='margin: 2em auto; display: block; width: 100%;' src=\"".concat(pictureSourceOne, "\"' /><br>");
              var convertedPictureTwo = "<br><img style='margin: 2em auto; display: block; width: 100%;' src=\"".concat(pictureSourceTwo, "\"' /><br>");
              var convertedPictureThree = "<br><img style='margin: 2em auto; display: block; width: 100%;' src=\"".concat(pictureSourceThree, "\"' /><br>");
              var convertedPictureFour = "<br><img style='margin: 2em auto; display: block; width: 100%;' src=\"".concat(pictureSourceFour, "\"' /><br>");
              var convertedPictureFive = "<br><img style='margin: 2em auto; display: block; width: 100%;' src=\"".concat(pictureSourceFive, "\"' /><br>"); // Create Object to put in replace

              var pictureInserts = {
                '<< picture-1 >>': convertedPictureOne,
                '<< picture-2 >>': convertedPictureTwo,
                '<< picture-3 >>': convertedPictureThree,
                '<< picture-4 >>': convertedPictureFour,
                '<< picture-5 >>': convertedPictureFive
              }; // Insert elements into the blog's HTML
              // Find all the picture tags and replace them with images.

              var picRegex = /<< picture-1 >>|<< picture-2 >>|<< picture-3 >>|<< picture-4 >>|<< picture-5 >>/gi;
              var codeRegex = /<< code-1 >>|<< code-2 >>|<< code-3 >>|<< code-4 >>|<< code-5 >>/gi;
              _this4.post = info['post'];
              var postContent = info['post'];
              var postHTML = document.getElementById('blog-post');
              postHTML.innerHTML = postContent.replace(picRegex, function (matched) {
                return pictureInserts[matched];
              }).replace(codeRegex, function (matched) {
                return codeInserts[matched];
              });

              for (var i = 0; i < _this4.comments.length; i++) {
                _this4.comments[i]['date'] = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(_this4.comments[i]['date']), Date.now());
                var replies = _this4.comments[i]['replies'];

                for (var _i = 0; _i < replies.length; _i++) {
                  console.log(replies[_i]['date']);
                  replies[_i]['date'] = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(replies[_i]['date']), Date.now());
                }
              } // postHTML.innerHTML = postContent.replace(codeRegex, function(matched){
              //   return codeInserts[matched];
              // });

            });
          }
        }, {
          key: "getUserDetails",
          value: function getUserDetails() {
            var _this5 = this;

            this.userTypeSub = this.auth.userType.subscribe(function (data) {
              console.log('Usertype: ' + data);
              _this5.userType = data;
            });
            this.userFullNameSub = this.auth.userFullName.subscribe(function (data) {
              console.log('userFullName: ' + data);
              _this5.userFullName = data;
            });
            this.userPictureSub = this.auth.userPicture.subscribe(function (data) {
              console.log('userPicture: ' + data);
              _this5.userPicture = data;
            });
            this.userEmailSub = this.auth.userEmail.subscribe(function (data) {
              console.log('userEmail: ' + data);
              _this5.userEmail = data;
            });
          }
        }, {
          key: "loginPageFromBlog",
          value: function loginPageFromBlog() {
            console.clear();
            console.log(this.id);
            this.router.navigate(['/login/', this.id]);
          }
        }, {
          key: "editBlog",
          value: function editBlog() {
            this.router.navigate(['/admin/blogs/edit-blog/', this.id]);
          }
        }, {
          key: "getScrollPosition",
          value: function getScrollPosition(e) {
            this.scrollTop = e.detail.scrollTop; // console.log(this.scrollTop)

            var mobileCommentInput = document.getElementById('mobile-comment-input');
            mobileCommentInput.style.transition = '0.5s';
            mobileCommentInput.style.height = '80px';
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.ionContent.scrollToTop();
          } // Comments

        }, {
          key: "detectNewComments",
          value: function detectNewComments() {
            // There is a div that is underneath the most recent comment to scroll to.
            var newCommentBreakpoint = document.getElementById('new-comment-breakpoint');
            newCommentBreakpoint.scrollIntoView();
          }
        }, {
          key: "viewComments",
          value: function viewComments() {
            var commentsWrapper = document.getElementById('all-comments'); // commentsWrapper.scrollIntoView()

            console.log(commentsWrapper.offsetTop);
            this.ionContent.scrollToPoint(0, commentsWrapper.offsetTop - 400);
          }
        }, {
          key: "comment",
          value: function comment(blogID, userName, userPicture, _comment, userEmail) {
            var _this6 = this;

            this.commentSub = this.blogService.comment(blogID, userName, userPicture, _comment, userEmail).subscribe(function (data) {
              _this6.comments = data['comments'];
              _this6.commentsLength = _this6.comments.length;

              for (var i = 0; i < _this6.comments.length; i++) {
                _this6.comments[i]['date'] = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(_this6.comments[i]['date']), Date.now());
              }

              _this6.commentInput.value = '';
              _this6.commentInputBottom.value = '';

              _this6.addCommentToast();

              _this6.detectNewComments();

              return;
            });
          }
        }, {
          key: "commentFromTop",
          value: function commentFromTop(blogID, userName, userPicture, comment, userEmail) {
            var _this7 = this;

            this.commentSub = this.blogService.comment(blogID, userName, userPicture, comment, userEmail).subscribe(function (data) {
              _this7.comments = data['comments'];
              _this7.commentsLength = _this7.comments.length;
              console.clear();

              for (var i = 0; i < _this7.comments.length; i++) {
                _this7.comments[i]['date'] = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(_this7.comments[i]['date']), Date.now());
                console.log(_this7.comments[i]['_id']);
              }

              _this7.commentInput.value = '';
              _this7.commentInputBottom.value = '';

              _this7.addCommentToast();

              _this7.detectNewComments();

              return;
            });
          }
        }, {
          key: "mobileComment",
          value: function mobileComment(blogID, userName, userPicture, comment, userEmail) {
            var _this8 = this;

            this.commentSub = this.blogService.comment(blogID, userName, userPicture, comment, userEmail).subscribe(function (data) {
              _this8.comments = data['comments'];
              _this8.commentsLength = _this8.comments.length;

              for (var i = 0; i < _this8.comments.length; i++) {
                _this8.comments[i]['date'] = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(_this8.comments[i]['date']), Date.now());
              }

              _this8.mobileCommentInput.value = '';

              _this8.addCommentToast();

              _this8.detectNewComments();

              return;
            });
          }
        }, {
          key: "commentOptionsPopover",
          value: function commentOptionsPopover(ev, blogID, commentID, userFullName, title) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var popover, _yield$popover$onDidD, role;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.popoverController.create({
                        component: src_app_components_comment_options_comment_options_component__WEBPACK_IMPORTED_MODULE_4__.CommentOptionsComponent,
                        cssClass: 'comment-popover',
                        componentProps: {
                          blogID: blogID,
                          commentID: commentID,
                          userFullName: userFullName,
                          title: title,
                          comments: this.comments,
                          comment: document.getElementById(commentID + '-comment'),
                          replyInput: document.getElementById(commentID + '-reply-input'),
                          replyInputButton: document.getElementById(commentID + '-reply-input-button'),
                          commentEditButton: document.getElementById(commentID + '-comment-edit-button'),
                          commentMoreButton: document.getElementById(commentID + '-comment-more-button')
                        },
                        event: ev,
                        translucent: true
                      });

                    case 2:
                      popover = _context5.sent;
                      _context5.next = 5;
                      return popover.present();

                    case 5:
                      _context5.next = 7;
                      return popover.onDidDismiss();

                    case 7:
                      _yield$popover$onDidD = _context5.sent;
                      role = _yield$popover$onDidD.role;
                      console.log('onDidDismiss resolved with role', role);

                    case 10:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "addCommentToast",
          value: function addCommentToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var toast, _toast2;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(window.innerWidth > 993)) {
                        _context6.next = 8;
                        break;
                      }

                      _context6.next = 3;
                      return this.toastController.create({
                        message: 'You have successfully added a Comment!',
                        position: 'bottom',
                        // cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 3:
                      toast = _context6.sent;
                      toast.present();
                      return _context6.abrupt("return");

                    case 8:
                      _context6.next = 10;
                      return this.toastController.create({
                        message: 'You have successfully added a Comment!',
                        position: 'bottom',
                        cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 10:
                      _toast2 = _context6.sent;

                      _toast2.present();

                      return _context6.abrupt("return");

                    case 13:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          } // Replies

        }, {
          key: "reply",
          value: function reply(blogID, commentID, fullName, picture, _reply, email) {
            var _this9 = this;

            console.log(blogID, commentID, fullName, picture, _reply, email);
            this.replySub = this.blogService.reply(blogID, commentID, fullName, picture, _reply, email).subscribe(function (data) {
              console.log(data);

              for (var i = 0; i < _this9.comments.length; i++) {
                // Update all the dates in the replies
                // Find the comment ID, then update its replies
                if (_this9.comments[i]['_id'] == commentID) {
                  _this9.comments[i]['replies'] = data['replies'];

                  for (var _i2 = 0; _i2 < data['replies'].length; _i2++) {
                    data['replies'][_i2].date = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(data['replies'][_i2].date), Date.now());
                  } // Clear Reply Input


                  var replyInput = document.getElementById(commentID + '-reply-input');
                  replyInput.value = ''; // View All Replies after user has successfully added a Reply

                  _this9.viewReplies(undefined, commentID, undefined, undefined);

                  _this9.addReplyToast(); // Scroll to new Reply


                  var newReplyBreakpoint = document.getElementById(commentID + '-add-reply-breakpoint');
                  newReplyBreakpoint.scrollIntoView();
                  return;
                }
              }
            });
          }
        }, {
          key: "editReply",
          value: function editReply(blogID, commentID, replyID) {
            var _this10 = this;

            console.log('Editting Reply');
            var reply = document.getElementById('reply-' + replyID);
            var replyDeleteButton = document.getElementById('reply-' + replyID + '-delete-button');
            var replyEditButton = document.getElementById('reply-' + replyID + '-edit-button');
            var replyValue = reply.innerHTML;
            var editReplyTextarea = document.createElement('textarea');
            editReplyTextarea.setAttribute('rows', '5');
            editReplyTextarea.style.fontSize = '18px';
            editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
            editReplyTextarea.style.width = '100%';
            editReplyTextarea.style.border = '4px solid #1a061b';
            editReplyTextarea.style.borderRadius = '10px';
            editReplyTextarea.style.backgroundColor = '#fff9';
            editReplyTextarea.style.color = '#333';
            editReplyTextarea.style.padding = '1em';
            editReplyTextarea.style.marginBottom = '1em';
            editReplyTextarea.innerHTML = replyValue; // Complete Edit & Cancel Edit Buttons

            var completeEditButton = document.createElement('button');
            completeEditButton.addEventListener('click', function () {
              console.log('Completing Edit');
              cancelEditButton.remove();
              completeEditButton.remove();
              replyEditButton.style.display = 'block';
              replyDeleteButton.style.display = 'block'; // HTTP Request

              console.log(editReplyTextarea);
              console.log(editReplyTextarea.value);
              _this10.editReplySub = _this10.blogService.editReply(blogID, commentID, replyID, editReplyTextarea.value).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.tap)(function (res) {
                if (!res) {
                  console.log('There was no response.');
                }
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.catchError)(function (e) {
                console.error(e);

                if (e) {
                  _this10.presentAlert('Error ', 'There was an error editting your comment');
                }

                editReplyTextarea.replaceWith(reply);
                throw new Error(e);
              })).subscribe(function (data) {
                console.log(data); // Only update Comment if there was a successful network request.

                reply.innerHTML = editReplyTextarea.value;
                editReplyTextarea.replaceWith(reply);
              });
            });
            completeEditButton.innerHTML = 'Edit';
            editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
            completeEditButton.style.width = '100px';
            completeEditButton.style.padding = '0.6em 0.3em';
            completeEditButton.style.margin = '0.3em 0.5em';
            completeEditButton.style.borderRadius = '100px';
            completeEditButton.style.color = '#00c400';
            completeEditButton.style.backgroundColor = '#222';
            var cancelEditButton = document.createElement('button');
            cancelEditButton.addEventListener('click', function () {
              console.log('Cancelling Edit');
              cancelEditButton.remove();
              completeEditButton.remove();
              replyEditButton.style.display = 'block';
              replyDeleteButton.style.display = 'block';
              editReplyTextarea.replaceWith(reply);
            });
            cancelEditButton.innerHTML = 'Cancel';
            editReplyTextarea.style.animation = 'slide-in-right 0.5s ease-in forwards';
            cancelEditButton.style.width = '100px';
            cancelEditButton.style.padding = '0.6em 0.3em';
            cancelEditButton.style.margin = '0.3m 0';
            cancelEditButton.style.borderRadius = '100px';
            cancelEditButton.style.color = 'red';
            cancelEditButton.style.backgroundColor = '#222';
            reply.replaceWith(editReplyTextarea);
            replyDeleteButton.style.display = 'none';
            replyEditButton.style.display = 'none';
            insertAfter(editReplyTextarea, completeEditButton);
            insertAfter(completeEditButton, cancelEditButton); // Inserting buttons after edit textarea

            function insertAfter(referenceNode, newNode) {
              referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
            }
          }
        }, {
          key: "deleteReply",
          value: function deleteReply(blogID, commentID, replyID) {
            var _this11 = this;

            console.log('Deleting Reply');
            console.log(blogID, commentID, replyID);
            this.deleteReplySub = this.blogService.deleteReply(blogID, commentID, replyID).subscribe(function (data) {
              // Slide Out Animation for Reply.
              var reply = document.getElementById('reply-' + replyID + '-wrapper');
              var start = Date.now();
              var timer = setInterval(function () {
                // how much time passed from the start?
                var timePassed = Date.now() - start;

                if (timePassed >= 200) {
                  reply.style.transform = 'translateX(-50px)';
                }

                if (timePassed >= 500) {
                  reply.style.opacity = '0';
                }

                if (timePassed >= 1000) {
                  reply.style.height = '0px';
                  reply.style.display = 'none';
                  reply.remove();
                  clearInterval(timer); // finish the animation after 2 seconds

                  return;
                }
              }, 20); // Allow for the animation to finish first before updating the reply data

              setTimeout(function () {
                for (var i = 0; i < _this11.comments.length; i++) {
                  if (_this11.comments[i]['_id'] === commentID) {
                    _this11.comments[i]['replies'] = data['replies'];

                    for (var _i3 = 0; _i3 < data['replies'].length; _i3++) {
                      data['replies'][_i3].date = (0, date_fns__WEBPACK_IMPORTED_MODULE_8__["default"])((0, date_fns__WEBPACK_IMPORTED_MODULE_7__["default"])(data['replies'][_i3].date), Date.now());
                    }
                  }
                }
              }, 1000);
            });
            return;
          }
        }, {
          key: "addReplyToast",
          value: function addReplyToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var toast, _toast3;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(window.innerWidth > 993)) {
                        _context7.next = 7;
                        break;
                      }

                      _context7.next = 3;
                      return this.toastController.create({
                        message: 'You have successfully added a Reply!',
                        position: 'bottom',
                        cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 3:
                      toast = _context7.sent;
                      toast.present();
                      _context7.next = 11;
                      break;

                    case 7:
                      _context7.next = 9;
                      return this.toastController.create({
                        message: 'You have successfully added a Reply!',
                        position: 'bottom',
                        cssClass: 'success-toast',
                        duration: 2000
                      });

                    case 9:
                      _toast3 = _context7.sent;

                      _toast3.present();

                    case 11:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "editReplyToast",
          value: function editReplyToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var toast;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.toastController.create({
                        message: 'You have successfully editted a Reply!',
                        cssClass: 'edit-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context8.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "deleteReplyAlert",
          value: function deleteReplyAlert(blogID, commentID, replyID) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var _this12 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.next = 2;
                      return this.alertController.create({
                        cssClass: 'my-custom-class',
                        message: 'Are you sure you want to Delete this Reply?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel: blah');
                          }
                        }, {
                          text: 'Delete',
                          handler: function handler() {
                            _this12.deleteReply(blogID, commentID, replyID);
                          }
                        }]
                      });

                    case 2:
                      alert = _context9.sent;
                      _context9.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "deleteReplyToast",
          value: function deleteReplyToast() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var toast;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.next = 2;
                      return this.toastController.create({
                        message: 'You have successfully deleted a Reply!',
                        cssClass: 'danger-toast',
                        duration: 2000
                      });

                    case 2:
                      toast = _context10.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "hideMobileInput",
          value: function hideMobileInput(commentID) {
            var replyInput = document.getElementById(commentID + '-reply-input');
            var mobileCommentInput = document.getElementById('mobile-comment-input');
            console.log(replyInput);
            console.log(mobileCommentInput);
            replyInput.style.border = "1px #3cf63c solid";
            mobileCommentInput.style.transition = '0.5s';
            mobileCommentInput.style.height = '0px';
          }
        }, {
          key: "revealMobileInput",
          value: function revealMobileInput(commentID) {
            var replyInput = document.getElementById(commentID + '-reply-input');
            var mobileCommentInput = document.getElementById('mobile-comment-input');
            console.log(replyInput);
            console.log(mobileCommentInput);
            replyInput.style.border = "1px white solid";
            mobileCommentInput.style.transition = '0.5s';
            mobileCommentInput.style.height = '80px';
          }
        }, {
          key: "getReplyContent",
          value: function getReplyContent(e, commentID) {
            console.clear();
            console.log(e);

            if (this.replyContent) {
              // console.log('There was already a reply field on the page that was populated. Refreshing Reply content');
              this.replyContent = '';
              this.replyContent = e.detail.value;
            } else if (!this.replyContent) this.replyContent = e.detail.value;
          }
        }, {
          key: "viewReplies",
          value: function viewReplies(comment, id, e, repliesLength) {
            var repliesLength = repliesLength;
            var replies = document.getElementById(id + '-replies');
            var repliesButton = document.getElementById(id + '-reply-button');
            var repliesCloseButton = document.getElementById(id + '-replies-close-button');
            replies.style.display = 'block';
            repliesButton.style.display = 'none';
            repliesCloseButton.style.display = 'block';
          }
        }, {
          key: "closeReplies",
          value: function closeReplies(id) {
            var replies = document.getElementById(id + '-replies');
            var repliesInput = document.getElementById(id + '-close-replies-breakpoint');
            var repliesButton = document.getElementById(id + '-reply-button');
            var repliesCloseButton = document.getElementById(id + '-replies-close-button');
            replies.style.display = 'none';
            repliesCloseButton.style.display = 'none';
            repliesButton.style.display = 'block';
            repliesInput.style.position = 'relative';
            repliesInput.style.top = '-100px';
            repliesInput.scrollIntoView();
          } // Footer

        }, {
          key: "donatePage",
          value: function donatePage() {
            this.router.navigateByUrl('/donate');
          }
        }, {
          key: "contactPage",
          value: function contactPage() {
            this.router.navigateByUrl('/contact');
          }
        }, {
          key: "getBlogsForNextPrev",
          value: function getBlogsForNextPrev() {
            var _this13 = this;

            this.blogServiceSub = this.blogService.getBlogs().subscribe(function (data) {
              console.log(data);
              _this13.allBlogs = data;

              for (var i = 0; i < _this13.allBlogs.length; i++) {
                if (_this13.allBlogs[i]['_id'] === _this13.id) {
                  _this13.currentBlogPosition = i;
                  var prevBlogWrapper = document.getElementById('prev');
                  var nextBlogWrapper = document.getElementById('next'); // First Blog

                  if (_this13.currentBlogPosition == 0) {
                    console.log('This is the first blog'); // Next

                    _this13.nextBlogTitle = '---'; // Prev

                    _this13.prevBlogTitle = _this13.allBlogs[_this13.currentBlogPosition + 1].title;
                    return;
                  } // Last Blog


                  if (_this13.currentBlogPosition == _this13.allBlogs.length - 1) {
                    console.log('This is the last blog'); // Next

                    _this13.nextBlogTitle = _this13.allBlogs[_this13.currentBlogPosition - 1].title; // Prev

                    _this13.prevBlogTitle = '---';
                    return;
                  } // Every blog in between
                  else {
                    _this13.nextBlogTitle = _this13.allBlogs[_this13.currentBlogPosition - 1].title;
                    _this13.prevBlogTitle = _this13.allBlogs[_this13.currentBlogPosition + 1].title;
                  }
                }
              }
            });
          }
        }, {
          key: "nextBlog",
          value: function nextBlog() {
            console.log('Wassup');
            this.router.navigate(['blog/blog-page/', this.allBlogs[this.currentBlogPosition - 1]['_id']]);
          }
        }, {
          key: "prevBlog",
          value: function prevBlog() {
            console.log('Wassup');
            this.router.navigate(['blog/blog-page/', this.allBlogs[this.currentBlogPosition + 1]['_id']]);
          } // Alerts

        }, {
          key: "presentAlert",
          value: function presentAlert(header, msg) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var alert;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.next = 2;
                      return this.alertController.create({
                        cssClass: 'danger-alert',
                        header: header,
                        message: msg,
                        buttons: [{
                          text: 'OK'
                        }]
                      });

                    case 2:
                      alert = _context11.sent;
                      _context11.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this);
            }));
          } // When page is Destroyed.

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // this.userTypeSub.unsubscribe();
            // this.userEmailSub.unsubscribe();
            // this.userFullNameSub.unsubscribe();
            // this.userPictureSub.unsubscribe();
            // this.blogInfoSub.unsubscribe();
            // this.blogServiceSub.unsubscribe();
            // this.editCommentSub.unsubscribe();
            // this.replySub.unsubscribe();
            // this.editReplySub.unsubscribe();
            // this.deleteReplySub.unsubscribe();
            // this.commentSub.unsubscribe();
            console.log('Blog Page destroyed');
          }
        }]);

        return BlogPagePage;
      }();

      _BlogPagePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.PopoverController
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController
        }, {
          type: src_app_services_emitters_admin_blog_emitter_admin_blog_emitter_service__WEBPACK_IMPORTED_MODULE_5__.AdminBlogEmitterService
        }, {
          type: src_app_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService
        }, {
          type: src_app_services_blog_blog_service__WEBPACK_IMPORTED_MODULE_2__.BlogService
        }];
      };

      _BlogPagePage.propDecorators = {
        ionContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: ['content']
        }],
        commentInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: ['commentInput']
        }],
        commentInputBottom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: ['commentInputBottom']
        }],
        mobileCommentInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild,
          args: ['mobileCommentInput']
        }],
        ngOnDestroy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.HostListener,
          args: ['unloaded']
        }]
      };
      _BlogPagePage = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-blog-page',
        template: _Users_ferro_Desktop_personal_website_eddietaliaferro_com_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_page_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_blog_page_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _BlogPagePage);
      /***/
    },

    /***/
    62629:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/comment-options/comment-options.component.html ***!
      \******************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"delete-comment-popover-button\" (click)=\"deleteCommentAlert(blogID, commentID, userFullName, title)\">\n  Delete Comment\n</div>\n<div (click)=\"editComment()\" id=\"edit-comment-popover-button\">\n  Edit Comment\n</div>\n<div (click)=\"close()\" id=\"edit-comment-popover-button\">\n  Cancel\n</div>";
      /***/
    },

    /***/
    10422:
    /*!*************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/blog/blog-page/blog-page.page.html ***!
      \*************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content #content scrollEvents=\"true\" (ionScroll)=\"getScrollPosition($event)\">\n\n  <!-- fab placed to the bottom end -->\n  <ion-fab (click)=\"scrollToTop()\" vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button>\n      <ion-icon style=\"color: white; font-size: 2.3em;\" name=\"caret-up-outline\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-grid>\n\n    <!-- Blog Header and Search Bar -->\n    <ion-row id=\"blog-post-wrapper\" class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"10\" size-md=\"8\" size-lg=\"7\">\n        <ion-toolbar>\n          <ion-buttons slot=\"start\">\n            <ion-button routerLink=\"/blog\" class=\"grey-button\">\n              Back\n            </ion-button>\n            <ion-button (click)=\"viewComments()\" class=\"blue-button\">\n              Comments\n            </ion-button>\n            <ion-button *ngIf=\"this.userType === 'admin'\" (click)=\"editBlog()\" class=\"red-button\">\n              Edit\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n\n        <div class=\"blog-info\">\n          <ion-row>\n            <ion-col size=\"2\">\n              <img class=\"blog-thumbnail\" src=\"{{thumbnail}}\">\n            </ion-col>\n            <ion-col size=\"10\">\n              <h1 class=\"blog-header\">{{title}}</h1>\n              <h4 class=\"blog-date\">{{date}}</h4>\n              <h6 class=\"blog-hashtags\">{{hashtags}}</h6>\n            </ion-col>\n          </ion-row>\n        </div>\n        <!-- <img style=\"margin: 0 auto; width: 500px; display: block;\" src=\"../../../../assets/logo.svg\"> -->\n        <p id=\"blog-post\">\n          {{post}}\n        </p>\n      </ion-col>\n        <!-- Curve Under Header-->\n        <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" preserveAspectRatio=\"none\" viewBox=\"0 0 1680 40\" id=\"bottom-curve\" ><path d=\"M0 40h1680V30S1340 0 840 0 0 30 0 30z\" fill=\"#1b061c\"></path></svg>\n    </ion-row>\n\n    <!-- Please log in to Comment or Reply -->\n    <ion-row class=\"ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n        <div *ngIf=\"this.userType === 'none'\" style=\"background: #847145;\n        text-align: center;\n        padding: 0.3em;\n        font-size: 0.8em;\n        border-radius: 5px;\">\n          <p>Please login in to make a comment or reply.</p>\n        </div>\n      </ion-col>\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n        <ion-toolbar>\n          <ion-buttons *ngIf=\"this.userType === 'none'\" slot=\"start\">\n            <ion-button (click)=\"loginPageFromBlog()\" routerLink=\"/login\" class=\"login-button\">\n              Login\n            </ion-button>\n            <ion-button routerLink=\"/register\" class=\"register-button\">\n              Register\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <!-- Comment Input -->\n    <ion-row *ngIf=\"this.commentsLength > 0\" id=\"desktop-comment-input\" class=\"ion-justify-content-center ion-hide-lg-down\">\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\" size-xl=\"6\">\n        <div *ngIf=\"this.commentsLength === 0\" style=\"background: #98989882;\n        text-align: center;\n        padding: 1em;\n        font-size: 1.5em;\n        border-radius: 5px;\">\n          There are no comments\n        </div>\n\n        <!-- Comment Textarea -->\n        <ion-textarea #commentInput\n          class=\"enter-comment\"\n          rows=\"6\" cols=\"20\"\n          *ngIf=\"this.userType == 'admin' || this.userType === 'user'\"\n          placeholder=\"Please enter comment here\">\n        </ion-textarea>\n        <ion-toolbar class=\"comment-toolbar\">\n          <ion-buttons *ngIf=\"this.userType === 'user'\" slot=\"start\">\n            <img style=\"margin: 1em; border-radius: 60px;\" height=\"60\" src=\"{{this.userPicture}}\" alt=\"User Profile Picture\">\n            <h6>{{this.userFullName}}</h6>\n          </ion-buttons>\n          <ion-buttons *ngIf=\"this.userType === 'admin'\" slot=\"start\">\n            <img style=\"margin: 1em; border-radius: 60px;\" height=\"60\" src=\"{{this.userPicture}}\" alt=\"Admin Profile Picture\">\n            <h6>{{this.userFullName}}</h6>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button \n              class=\"green-button\" \n              style=\"width: 100px\" \n              *ngIf=\"this.userType === 'user' || this.userType === 'admin'\" \n              (click)=\"commentFromTop(this.id, this.userFullName, this.userPicture, this.commentInput.value, this.userEmail)\">\n              Post\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <!-- For Comments Button -->\n    <div id=\"all-comments\"></div>\n\n    <!-- Comments -->\n    <ion-row class=\"ion-justify-content-center\" style=\"margin-bottom: 6em;\">\n      <ion-col style=\"padding: 0;\" size-xs=\"12\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\" size-xl=\"6\">\n        <h3 id=\"comments-header\">Comments ({{this.commentsLength}})</h3>\n        <hr class=\"line\">\n        <div id=\"comments-wrapper\">\n          <!-- Comment Wrapper -->\n          <div [attr.id]=\"comment._id + '-comment-wrapper'\" class=\"comment-wrapper\" *ngFor=\" let ci = index; let comment of comments\">\n\n          <!-- Comment Header -->\n          <h5>\n            <!-- Comment Picture -->\n            <img class=\"comment-pic\" src=\"{{comment.picture}}\">\n\n            <!-- Comment User Tag -->\n            <span [ngClass]=\"comment.email == 'eddielacrosse2@gmail.com'  ? 'comment-admin' : 'comment-name'\">\n              <span *ngIf=\"comment.email === 'eddielacrosse2@gmail.com'\" style=\"color: #ff51ff; margin-right: 0.4em;\">Admin</span>\n                {{comment.name}}\n            </span>\n\n            <!-- Comment When -->\n            <span class=\"commented-when\">{{comment.date}} ago</span>\n\n            <!-- More Button -->\n            <span [attr.id]=\"comment._id + '-comment-more-button'\" *ngIf=\"this.userType !== 'none'\" style=\"float: right; position: relative; top: -68px; left: 18px; font-size: 1.5em;\">\n              <ion-button class=\"more-button\" style=\"--background: none; border: 2px solid #7e7e7e; border-radius: 5px;\" (click)=\"commentOptionsPopover($event, id, comment._id, this.userFullName, title)\">\n                <ion-icon name=\"ellipsis-vertical-outline\"></ion-icon>\n              </ion-button>\n            </span>\n          </h5>\n\n          <!-- Comment -->\n          <p [attr.id]=\"comment._id + '-comment'\" class=\"comment\">{{comment.comment}}</p>\n\n          <!-- Close reply breakpoint -->\n          <div [attr.id]=\"comment._id + 'close-replies-breakpoint'\"></div>\n\n          <!-- Reply Input -->\n          <ion-textarea [attr.id]=\"comment._id + '-reply-input'\" *ngIf=\"this.userType === 'user' || this.userType === 'admin'\" (ionChange)=\"getReplyContent($event, comment._id)\" (ionFocus)=\"hideMobileInput(comment._id)\" (ionBlur)=\"revealMobileInput(comment._id)\" class=\"reply-textarea\" rows=\"5\" placeholder=\"Add reply here\">\n          </ion-textarea>\n\n          <!-- Reply Button -->\n          <ion-button [attr.id]=\"comment._id + '-reply-input-button'\" style=\"margin-top: 2em; float: right;\" *ngIf=\"this.userType === 'user' || this.userType === 'admin'\" class=\"gold-button\" (click)=\"reply(this.id, comment._id, this.userFullName, this.userPicture, this.replyContent, this.userEmail)\">\n            Reply\n          </ion-button>\n\n          <!-- Replies Wrapper -->\n          <div class=\"replies\" [attr.id]=\"comment._id + '-replies'\">\n            <!-- Replies Upper Toolbar -->\n            <div class=\"replies-upper-toolbar\">\n              <span [attr.id]=\"comment._id + '-replies-counter'\" class=\"replies-title\">Replies - {{comment.replies.length}}</span>\n              <span class=\"upper-close-reply-button\" (click)=\"closeReplies(comment._id)\">\n                <ion-icon name=\"close\"></ion-icon>\n              </span>\n            </div>\n\n            <!-- Reply -->\n            <div [attr.id]=\"'reply-'+reply._id+'-wrapper'\" class=\"reply\" *ngFor=\"let reply of comment.replies;\">\n              <h5>\n                <img class=\"comment-pic\" src=\"{{reply.picture}}\">\n                <span [ngClass]=\"reply.email == 'eddielacrosse2@gmail.com'  ? 'comment-admin' : 'comment-name'\">\n                <span *ngIf=\"reply.email === 'eddielacrosse2@gmail.com'\" style=\"color: #ff51ff;\">Admin</span>\n                  {{reply.fullName}}</span>\n                <span class=\"commented-when\">replied {{reply.date}} ago</span>\n              </h5>\n              <p [attr.id]=\"'reply-'+reply._id\" class=\"comment\">{{reply.reply}}</p>\n              <ion-toolbar>\n                <ion-buttons [attr.id]=\"'reply-'+reply._id+'-delete-button'\" slot=\"end\">\n                  <ion-button style=\"color: red;\"\n                  *ngIf=\"this.userEmail === reply.email && this.userType === 'user' || this.userType === 'admin'\"  class=\"delete-reply\" (click)=\"deleteReplyAlert(this.id, comment._id, reply._id)\">\n                    Delete\n                  </ion-button>\n                  <ion-button [attr.id]=\"'reply-'+reply._id+'-edit-button'\" *ngIf=\"this.userEmail === reply.email\"  style=\"color: white;\" class=\"delete-reply\" (click)=\"editReply(this.id, comment._id, reply._id)\">\n                    Edit\n                  </ion-button>\n                </ion-buttons>\n              </ion-toolbar>\n            </div>\n          </div>\n\n          <!-- Add reply breakpoint -->\n          <div [attr.id]=\"comment._id + 'add-reply-breakpoint'\"></div>\n\n          <!-- View/Close Replies Toolbar -->\n          <ion-toolbar *ngIf=\"this.userType !== 'none'\" class=\"reply-toolbar\">\n            <ion-buttons slot=\"end\">\n              <ion-button *ngIf=\"comment.replies.length > 0\" [attr.id]=\"comment._id+'-reply-button'\" class=\"grey-button\" (click)=\"viewReplies(comment, comment._id, $event, comment.replies)\">\n                View Replies - {{comment.replies.length}}\n              </ion-button>\n              <ion-button [attr.id]=\"comment._id+'-replies-close-button'\" style=\"display: none; margin-top: 2em;\" class=\"grey-button\" (click)=\"closeReplies(comment._id)\">\n                Close Replies\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n          </div>\n        </div>\n        <div id=\"new-comment-breakpoint\"></div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Comment Input -->\n    <ion-row id=\"desktop-comment-input\" class=\"ion-justify-content-center ion-hide-lg-down\">\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\" size-xl=\"6\">\n        <div *ngIf=\"this.commentsLength === 0\" style=\"background: #98989882;\n        text-align: center;\n        padding: 1em;\n        font-size: 1.5em;\n        border-radius: 5px;\">\n          There are no comments\n        </div>\n\n        <!-- Comment Textarea -->\n        <ion-textarea #commentInputBottom\n          class=\"enter-comment\"\n          rows=\"6\" cols=\"20\"\n          *ngIf=\"this.userType == 'admin' || this.userType === 'user'\"\n          placeholder=\"Please enter comment here\">\n        </ion-textarea>\n        <ion-toolbar class=\"comment-toolbar\">\n          <ion-buttons *ngIf=\"this.userType === 'user'\" slot=\"start\">\n            <img style=\"margin: 1em; border-radius: 60px;\" height=\"60\" src=\"{{this.userPicture}}\" alt=\"User Profile Picture\">\n            <h6>{{this.userFullName}}</h6>\n          </ion-buttons>\n          <ion-buttons *ngIf=\"this.userType === 'admin'\" slot=\"start\">\n            <img style=\"margin: 1em; border-radius: 60px;\" height=\"60\" src=\"{{this.userPicture}}\" alt=\"Admin Profile Picture\">\n            <h6>{{this.userFullName}}</h6>\n          </ion-buttons>\n          <ion-buttons slot=\"end\">\n            <ion-button *ngIf=\"this.userType === 'user' || this.userType === 'admin'\" (click)=\"comment(this.id, this.userFullName, this.userPicture, this.commentInputBottom.value, this.userEmail)\" style=\"width: 100px; position: relative; right: 10px;\" class=\"green-button\">\n              Post\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-col>\n    </ion-row>\n\n    <!-- Info Footer -->\n    <ion-row class=\"info-footer-wrapper ion-justify-content-center\">\n      <ion-col size-xs=\"11\" size-sm=\"9\" size-md=\"8\" size-lg=\"7\">\n        <div class=\"info-footer\">\n          <img class=\"picture\" src=\"../../../../assets/photo.png\" alt=\"picture\">\n          <h3 style=\"color: #3df63d;\">Eddie Taliaferro II</h3>\n          <p class=\"info-footer-text\">Web Developer, Designer, Entrepreneur, Artist, and JavaScript enthusiast proudly out of Detroit, MI.</p>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Prev & Next -->\n    <ion-row style=\"background: #000000d1; margin-bottom: 0; padding: 3em 0;\" class=\"ion-justify-content-center\">\n      <ion-col style=\"background: none;\" size-xs=\"12\" size-sm=\"9\" size-lg=\"8\" class=\"ion-text-center\">\n        <h1 id=\"read-more-header\">Read More</h1>\n        <div class=\"prev-next\">\n          <ion-row class=\"ion-justify-content-center\">\n            <ion-col id=\"next\" (click)=\"nextBlog()\" class=\"ion-text-right\" size-xs=\"11\" size-sm=\"9\" size-lg=\"8\">\n              <p>Next Blog</p>\n              <h4>{{this.nextBlogTitle}}</h4>\n            </ion-col>\n            <ion-col id=\"prev\" (click)=\"prevBlog()\" class=\"ion-text-left\" size-xs=\"11\" size-sm=\"9\" size-lg=\"8\">\n            <p>Prev Blog</p>\n            <h4>{{this.prevBlogTitle}}</h4>\n            </ion-col>\n          </ion-row>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Footer Illustration -->\n    <ion-row id=\"footer\" class=\"ion-justify-content-center\">\n      <ion-col class=\"ion-text-center\" size=\"11\">\n        <img id=\"footer-logo\" src=\"../../../assets/gold-logo.svg\" alt=\"Footer Logo\">\n      </ion-col>\n      <ion-col class=\"ion-text-center\" size=\"11\">\n        <div id=\"footer-buttons\">\n          <hr class=\"footer-hr\">\n          <ion-button class=\"gold-button\" (click)=\"donatePage()\">\n            Donate\n          </ion-button>\n          <ion-button class=\"red-button\" (click)=\"contactPage()\">\n            Contact\n          </ion-button>\n        </div>\n      <div id=\"social-media\">\n        <hr class=\"footer-hr\">\n        <ion-icon size=\"large\" name=\"logo-linkedin\"></ion-icon>\n      </div>\n      </ion-col>\n    </ion-row>\n\n    <!-- Mobile Comment Input -->\n    <ion-footer *ngIf=\"this.userType !== 'none'\" id=\"mobile-comment-input\" class=\"ion-hide-lg-up\">\n      <ion-row>\n        <ion-col size=\"1.5\">\n          <img style=\"width: 100%; border-radius: 100px;\" src=\"{{this.userPicture}}\" alt=\"User Profile Picture\">\n        </ion-col>\n        <ion-col style=\"display: inline-block; height: 40px;\" size=\"8.5\">\n          <ion-textarea\n          #mobileCommentInput\n          style=\"display: inline; border: none;\"\n          autocapitalize=\"true\"\n          rows=\"1\"\n          spellcheck=\"true\"\n          wrap=\"soft\"\n          type=\"text\"\n          placeholder=\"Add a Comment\"\n          >\n        </ion-textarea>\n        </ion-col>\n        <ion-col style=\"display: inline-block; height: 60px;\" size=\"2\">\n          <ion-button (click)=\"mobileComment(this.id, this.userFullName, this.userPicture, this.mobileCommentInput.value, this.userEmail)\" style=\"--background: none; --box-shadow: none\">\n          <ion-icon style=\"font-size: 1.8em; color: #1a0043;\" slot=\"start\" name=\"send\"></ion-icon>\n        </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-footer>\n  </ion-grid>\n</ion-content>\n";
      /***/
    },

    /***/
    16594:
    /*!***************************************************************************!*\
      !*** ./src/app/components/comment-options/comment-options.component.scss ***!
      \***************************************************************************/

    /***/
    function _(module) {
      module.exports = "#delete-comment-popover-button, #edit-comment-popover-button {\n  width: auto;\n  padding: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1lbnQtb3B0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiY29tbWVudC1vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2RlbGV0ZS1jb21tZW50LXBvcG92ZXItYnV0dG9uLCAjZWRpdC1jb21tZW50LXBvcG92ZXItYnV0dG9uIHtcbiAgd2lkdGg6IGF1dG87XG4gIHBhZGRpbmc6IDFlbTtcbn0iXX0= */";
      /***/
    },

    /***/
    40924:
    /*!**********************************************************!*\
      !*** ./src/app/pages/blog/blog-page/blog-page.page.scss ***!
      \**********************************************************/

    /***/
    function _(module) {
      module.exports = ".grey-button {\n  width: 100px;\n  height: 30px;\n  display: block;\n  margin: 30px 0;\n  --background: #777777;\n  --color: white;\n  --box-shadow: none;\n}\n\n.red-button {\n  width: 100px;\n  height: 30px;\n  display: block;\n  margin-left: 0.5em;\n  --background: #d01901;\n  --color: white;\n  --box-shadow: none;\n}\n\n.blue-button {\n  width: 100px;\n  height: 30px;\n  font-size: 0.8em;\n  display: block;\n  margin-left: 0.5em;\n  --background: #11a8ff;\n  --color: white;\n  --box-shadow: none;\n}\n\n.register-button {\n  width: 100px;\n  --background: linear-gradient(360deg, #3df63d -2%, #005c47, #3df63d);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\n.login-button {\n  width: 100px;\n  --background: linear-gradient(360deg, #666666 -2%, #333, #666666);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n  margin-right: 1em;\n}\n\nion-toolbar:first-child {\n  --background: none;\n  color: white;\n  padding: 1em 0em;\n}\n\n.blog-info {\n  background-color: #112321;\n  padding: 0.5em 0.5em 1em 1em;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  border-radius: 5px;\n}\n\n.blog-thumbnail {\n  width: 80%;\n  margin: 1em auto;\n  border-radius: 100px;\n}\n\n.blog-header {\n  font-family: Ayuthaya;\n  font-size: 1.3em;\n  font-weight: 800;\n}\n\n.blog-date {\n  color: #847145;\n  margin: 5px 0;\n  font-size: 0.9em;\n}\n\n.blog-hashtags {\n  margin: 5px 0;\n  color: #3df63d;\n}\n\n#blog-post-wrapper {\n  background: #ffffffe5;\n  margin: 3em auto 6em auto;\n  padding-bottom: 9em;\n  padding-top: 3em;\n  position: relative;\n}\n\n#bottom-curve {\n  position: absolute;\n  bottom: 0px;\n}\n\n#blog-post {\n  line-height: 32px;\n  white-space: pre-wrap;\n  overflow: scroll;\n  font-size: 21px;\n  margin-top: 3em;\n  color: #222;\n  border-radius: 5px;\n}\n\n@media only screen and (max-width: 550px) {\n  #blog-post, code {\n    font-size: 19px;\n    line-height: 26px;\n  }\n\n  ion-toolbar ion-buttons ion-button {\n    font-size: 0.7em;\n    width: 85px;\n  }\n}\n\nion-fab {\n  --background: #00c400;\n  --color: white;\n  position: relative;\n  top: -115px;\n  right: 50px;\n  opacity: 0;\n  transition: 0.5s;\n  -webkit-animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n          animation: fab-slide-in 0.5s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s forwards;\n}\n\n@-webkit-keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes fab-slide-in {\n  0% {\n    transform: translateX(200px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n#new-comment-breakpoint {\n  position: relative;\n  top: -100px;\n}\n\n#comments-header {\n  color: #333;\n  background: #3df63d;\n  width: 180px;\n  padding: 0.5em;\n  margin-top: 5em;\n  border-radius: 5px;\n}\n\n.comment-wrapper {\n  background: linear-gradient(45deg, #320534, #150018);\n  background-attachment: fixed;\n  padding: 2em;\n  margin: 2em auto;\n  border-radius: 5px;\n  transition: 0.5s;\n}\n\n.comment-wrapper h5 {\n  position: relative;\n  bottom: 9px;\n  right: 11px;\n}\n\n.comment-wrapper .login-message {\n  opacity: 0.5;\n  font-size: 1em;\n}\n\n.comment-wrapper .comment-pic {\n  position: relative;\n  margin-right: 0.5em;\n  height: 45px;\n  border-radius: 40px;\n}\n\n.comment-wrapper .comment {\n  font-size: 1.2em;\n  line-height: 1.4em;\n  margin-top: 1em;\n  white-space: pre-wrap;\n}\n\n.comment-wrapper .comment-admin {\n  background: #bc379047;\n}\n\n.comment-wrapper .comment-toolbar {\n  --background: none;\n  margin-top: 6em;\n  padding-top: 1em;\n}\n\n.comment-wrapper .comment-toolbar ion-buttons .grey-button {\n  width: 170px;\n  --background: linear-gradient(360deg, #130e0e -2%, #000000, #130e0e);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\n.comment-wrapper .reply-toolbar {\n  --background: none;\n  margin-top: 2em;\n}\n\n.comment-wrapper .reply-toolbar .green-button {\n  width: 100px;\n  --background: linear-gradient(360deg, #3df63d -2%, #005c47, #3df63d);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\n.comment-wrapper .reply-toolbar .grey-button {\n  margin-top: 5em;\n  width: 150px;\n  height: 60px;\n  --background: none;\n  font-size: 0.8em;\n  position: relative;\n  left: 10px;\n  top: 40px;\n  --color: white;\n  --box-shadow: none;\n}\n\n.comment-wrapper .reply-toolbar .delete-button {\n  width: 75px;\n  font-size: 0.7em;\n  --background: linear-gradient(360deg, #D01801 -2%, #810b00, #D01801);\n  --color: white;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\n.comment-wrapper .reply-toolbar .close-replies-button {\n  width: 150px;\n  --background: none;\n  --color: white;\n  --border-style: solid;\n  --border-width: 4px;\n  --border-color: #D01801;\n  --border-radius: 50px;\n  --box-shadow: none;\n}\n\n.comment-wrapper .commented-when {\n  opacity: 1;\n  color: #D3B900;\n  font-size: 0.7em;\n  display: block;\n  position: relative;\n  left: 68px;\n  top: -14px;\n}\n\n.comment-wrapper .comment-name, .comment-wrapper .comment-admin {\n  position: relative;\n  top: -20px;\n  left: 9px;\n  font-size: 0.8em;\n}\n\n.comment-wrapper .comment-admin {\n  color: white;\n  background: #1d071f66;\n  border-radius: 5px;\n  padding: 0.2em 0.5em;\n}\n\n.comment-wrapper .comment-name {\n  color: white;\n  background: #016fff47;\n  border-radius: 5px;\n  padding: 0.2em 0.5em;\n}\n\n@media only screen and (max-width: 975px) {\n  .comment-wrapper .comment-pic {\n    height: 35px;\n  }\n  .comment-wrapper .comment {\n    font-size: 1em;\n    line-height: 1.3em;\n  }\n}\n\n.comment-wrapper .close-reply-button {\n  position: absolute;\n  bottom: -60px;\n  right: -4px;\n  --background: none ;\n}\n\n.comment-wrapper .replies-close-button {\n  display: none;\n  --color: white;\n  --background: #222;\n  width: 150px;\n  --border-radius: 50px;\n}\n\n.comment-wrapper .reply-textarea {\n  background: #333;\n  color: white;\n  border: 2px solid #7b7b7b;\n  border-radius: 5px;\n  --placeholder-color: white;\n  display: block;\n  margin-top: 4em;\n  -webkit-animation: slide-up 0.5s ease-in forwards;\n          animation: slide-up 0.5s ease-in forwards;\n}\n\n.comment-wrapper .reply-button-position {\n  position: absolute;\n  bottom: -90px;\n  right: -18px;\n}\n\n.comment-wrapper .replies {\n  padding: 0;\n  height: auto;\n  display: none;\n  margin: 3em 0;\n  -webkit-animation: slide-in-right 0.5s ease-in forwards;\n          animation: slide-in-right 0.5s ease-in forwards;\n}\n\n.comment-wrapper .replies .replies-title {\n  margin-bottom: 3em;\n  color: white;\n  font-size: 1.4em;\n  padding-bottom: 0.4em;\n}\n\n.comment-wrapper .replies .replies-upper-toolbar {\n  background: rgba(146, 146, 146, 0.47);\n  padding: 1.3em 1em 1.6em 1em;\n  box-shadow: 1px 8px 8px #00000066;\n  border-radius: 14px;\n  margin-top: 9em;\n}\n\n.comment-wrapper .replies .upper-close-reply-button {\n  float: right;\n}\n\n.comment-wrapper .replies .upper-close-reply-button ion-icon {\n  font-size: 1.3em;\n  background: linear-gradient(360deg, #D01801 -2%, #810b00, #D01801);\n  color: white;\n  width: 50px;\n  padding: 0.2em 0.2em;\n  border-radius: 50px;\n}\n\n.comment-wrapper .replies .reply {\n  margin: 2em 0 0 0;\n  padding: 1.5em;\n  min-height: 180px;\n  width: 100%;\n  white-space: pre-wrap;\n  transition: 500ms;\n  background: #ffefef47;\n  border-radius: 5px;\n  box-shadow: 1px 1px 9px #080808;\n}\n\n.comment-wrapper .replies .reply ion-toolbar {\n  --background: none;\n}\n\n@media only screen and (max-width: 550px) {\n  .comment-wrapper .replies .reply ion-toolbar ion-buttons ion-button {\n    width: 50px;\n  }\n}\n\n.comment-wrapper .success-toast {\n  font-weight: 600;\n  font-size: 21px;\n  width: 100%;\n  --background: #028313;\n  position: relative;\n  top: -100px;\n  color: white;\n}\n\n.comment-wrapper .danger-toast {\n  font-weight: 600;\n  font-size: 21px;\n  width: 100%;\n  --background: #FF443B;\n  position: relative;\n  top: 150px;\n  color: white;\n}\n\n@-webkit-keyframes slide-in-right {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@keyframes slide-in-right {\n  0% {\n    opacity: 0;\n    transform: translateX(-10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}\n\n@-webkit-keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@keyframes slide-up {\n  0% {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0px);\n  }\n}\n\n@-webkit-keyframes slide-out {\n  0% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  99% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    display: none;\n  }\n}\n\n@keyframes slide-out {\n  0% {\n    opacity: 0;\n    transform: translateX(0px);\n  }\n  99% {\n    opacity: 0;\n    transform: translateX(-50px);\n  }\n  100% {\n    display: none;\n  }\n}\n\n#mobile-comment-input {\n  position: fixed;\n  bottom: 0px;\n  height: 64px;\n  width: 100%;\n  border-top: 5px solid #3cf63c;\n  background-color: #dadada;\n  font-size: 1.2em;\n  color: #1a0043;\n  box-shadow: 1px -3px 13px #1b29274a;\n}\n\n.post-button {\n  --background: #00ff00;\n  color: #222;\n}\n\n.info-footer-wrapper {\n  background: #000000d1;\n  margin-bottom: 0;\n  margin-top: 10em;\n}\n\n.info-footer {\n  padding: 80px 20px;\n}\n\n@media only screen and (max-width: 450px) {\n  .info-footer {\n    text-align: center;\n  }\n  .info-footer .info-footer-text {\n    font-size: 1.2em;\n    margin: 55px 0px;\n  }\n  .info-footer .green-button {\n    margin: 25px auto;\n  }\n}\n\n.info-footer-text {\n  font-size: 1.2em;\n  margin: 25px 0px;\n  line-height: 1.2em;\n}\n\n.picture {\n  height: 100px;\n  width: 100px;\n  border-radius: 50px;\n}\n\n#read-more-header {\n  background: #847145;\n  width: 200px;\n  margin: 2em auto;\n  padding: 0.4em;\n  border-radius: 5px;\n}\n\n#prev, #next {\n  background: #c4ffc4;\n  transition: 0.5s;\n  margin-top: 2em;\n}\n\n#prev h4, #next h4 {\n  color: #2B50C8;\n}\n\n#prev p, #next p {\n  color: #333;\n  font-weight: 800;\n}\n\n#prev {\n  border-left: 17px solid #3df63d;\n  padding-left: 2em;\n  border-radius: 10px 0 0 10px;\n}\n\n#next {\n  border-right: 17px solid #3df63d;\n  padding-right: 2em;\n  border-radius: 0 10px 10px 0;\n}\n\n@media only screen and (max-width: 450px) {\n  #prev, #next {\n    font-size: 1.1em;\n  }\n}\n\n#prev:hover, #next:hover {\n  transition: 0.5s;\n}\n\n#prev:hover p, #next:hover p {\n  color: #000;\n}\n\n#prev:hover h4, #next:hover h4 {\n  color: white;\n}\n\n#prev:hover {\n  border-right: 17px solid #D4AF37;\n}\n\n#prev:hover p {\n  color: #000;\n}\n\n#prev:hover h4 {\n  color: #BC3790;\n}\n\n#next:hover {\n  border-left: 17px solid #D4AF37;\n}\n\n#next:hover p {\n  color: #000;\n}\n\n#next:hover h4 {\n  color: #BC3790;\n}\n\n.enter-comment {\n  background: #212521;\n  border: 2px solid #00ff00;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  padding: 8px;\n}\n\n.blog-page-illustration {\n  background: lightgoldenrodyellow;\n  height: 80vh;\n}\n\n#footer {\n  background: #000000d1;\n  height: 600px;\n  padding: 6em 0em 3em 0em;\n}\n\n#footer #footer-logo {\n  width: 100px;\n}\n\n#footer #footer-buttons {\n  width: 150px;\n  display: inline-block;\n}\n\n#footer .footer-hr {\n  border-top: 5px solid #D3B900;\n  opacity: 0.4;\n  padding: 0;\n  width: 150px;\n}\n\n#footer #social-media {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2ctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLG9FQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSxpRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBSEE7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsaURBQUE7RUFDQSxrQkFBQTtBQU1GOztBQUpBO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFPRjs7QUFMQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQVFGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQVNGOztBQVBBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7QUFVRjs7QUFSQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFXRjs7QUFUQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQVlGOztBQVRBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFZRjs7QUFUQTtFQUNFO0lBQ0UsZUFBQTtJQUNBLGlCQUFBO0VBWUY7O0VBUkk7SUFDRSxnQkFBQTtJQUNBLFdBQUE7RUFXTjtBQUNGOztBQVBBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLHNGQUFBO1VBQUEsOEVBQUE7QUFTRjs7QUFQQTtFQUNFO0lBQ0UsNEJBQUE7RUFVRjtFQVJBO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBVUY7QUFDRjs7QUFqQkE7RUFDRTtJQUNFLDRCQUFBO0VBVUY7RUFSQTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQVVGO0FBQ0Y7O0FBUkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFVRjs7QUFSQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBVEE7RUFDRSxvREFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQVlKOztBQVZFO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFZSjs7QUFWRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFZSjs7QUFWRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFZSjs7QUFWRTtFQUNFLHFCQUFBO0FBWUo7O0FBVkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVlKOztBQVRNO0VBQ0UsWUFBQTtFQUNBLG9FQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFXUjs7QUFQRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQVBJO0VBQ0UsWUFBQTtFQUNBLG9FQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFTTjs7QUFQSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBU047O0FBUEk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBU047O0FBUEk7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVNOOztBQU5FO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FBUUo7O0FBTkU7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFRSjs7QUFORTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFORTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFRSjs7QUFMRTtFQUNFO0lBQ0UsWUFBQTtFQU9KO0VBTEU7SUFDRSxjQUFBO0lBQ0Esa0JBQUE7RUFPSjtBQUNGOztBQUxFO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBT0o7O0FBTEU7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBT0o7O0FBTEU7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO1VBQUEseUNBQUE7QUFPSjs7QUFMRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFPSjs7QUFMRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUEyQkEsdURBQUE7VUFBQSwrQ0FBQTtBQW5CSjs7QUFOSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFRTjs7QUFOSTtFQUNFLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVFOOztBQU5JO0VBQ0UsWUFBQTtBQVFOOztBQVBNO0VBQ0UsZ0JBQUE7RUFDQSxrRUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQVNSOztBQUhJO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtBQUtOOztBQUhNO0VBQ0Usa0JBQUE7QUFLUjs7QUFGSTtFQUlRO0lBQ0UsV0FBQTtFQUNaO0FBQ0Y7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0U7RUFDRTtJQUNFLFVBQUE7SUFDQSw0QkFBQTtFQUhKO0VBS0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFISjtBQUNGOztBQUxFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsNEJBQUE7RUFISjtFQUtFO0lBQ0UsVUFBQTtJQUNBLDBCQUFBO0VBSEo7QUFDRjs7QUFLRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDJCQUFBO0VBSEo7RUFLRTtJQUNFLFVBQUE7SUFDQSwwQkFBQTtFQUhKO0FBQ0Y7O0FBTEU7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQUhKO0VBS0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFISjtBQUNGOztBQUtFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFISjtFQUtFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBSEo7RUFLRTtJQUNFLGFBQUE7RUFISjtBQUNGOztBQVJFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsMEJBQUE7RUFISjtFQUtFO0lBQ0UsVUFBQTtJQUNBLDRCQUFBO0VBSEo7RUFLRTtJQUNFLGFBQUE7RUFISjtBQUNGOztBQU9BO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQ0FBQTtBQUpGOztBQU9BO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBVUE7RUFDRTtJQUNFLGtCQUFBO0VBUEY7RUFTRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFQSjtFQVVFO0lBQ0UsaUJBQUE7RUFSSjtBQUNGOztBQVlBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBVkY7O0FBYUE7RUFDRSxhQUFBO0VBQWUsWUFBQTtFQUNmLG1CQUFBO0FBVEY7O0FBV0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVJGOztBQVVBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFQRjs7QUFTRTtFQUNFLGNBQUE7QUFQSjs7QUFVRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVdBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBUkY7O0FBVUE7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUFQRjs7QUFTQTtFQUNFO0lBQ0UsZ0JBQUE7RUFORjtBQUNGOztBQVNBO0VBQ0UsZ0JBQUE7QUFQRjs7QUFVRTtFQUNFLFdBQUE7QUFSSjs7QUFXRTtFQUNFLFlBQUE7QUFUSjs7QUFhQTtFQUNFLGdDQUFBO0FBVkY7O0FBWUU7RUFDRSxXQUFBO0FBVko7O0FBYUU7RUFDRSxjQUFBO0FBWEo7O0FBZUE7RUFDRSwrQkFBQTtBQVpGOztBQWNFO0VBQ0UsV0FBQTtBQVpKOztBQWVFO0VBQ0UsY0FBQTtBQWJKOztBQW1CQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBaEJGOztBQW1CQTtFQUNFLGdDQUFBO0VBQ0EsWUFBQTtBQWhCRjs7QUFtQkE7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQWhCRjs7QUFrQkU7RUFDRSxZQUFBO0FBaEJKOztBQWtCRTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQWhCSjs7QUFrQkU7RUFDRSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQWhCSjs7QUFrQkU7RUFDRSxrQkFBQTtBQWhCSiIsImZpbGUiOiJibG9nLXBhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdyZXktYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDMwcHggMDtcbiAgLS1iYWNrZ3JvdW5kOiAjNzc3Nzc3O1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLnJlZC1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbiAgLS1iYWNrZ3JvdW5kOiAjZDAxOTAxO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuLmJsdWUtYnV0dG9uIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogMC41ZW07XG4gIC0tYmFja2dyb3VuZDogIzExYThmZjtcbiAgLS1jb2xvcjogd2hpdGU7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLnJlZ2lzdGVyLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjM2RmNjNkIC0yJSwgIzAwNWM0NywgIzNkZjYzZCk7XG4gIC0tY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbn1cbi5sb2dpbi1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzY2NjY2NiAtMiUsICMzMzMsICM2NjY2NjYpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gIG1hcmdpbi1yaWdodDogMWVtO1xufVxuaW9uLXRvb2xiYXI6Zmlyc3QtY2hpbGQge1xuICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMWVtIDBlbTtcbn1cbi5ibG9nLWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyMzIxO1xuICBwYWRkaW5nOiAwLjVlbSAwLjVlbSAxZW0gMWVtO1xuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4uYmxvZy10aHVtYm5haWwge1xuICB3aWR0aDogODAlO1xuICBtYXJnaW46IDFlbSBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbn1cbi5ibG9nLWhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBBeXV0aGF5YTtcbiAgZm9udC1zaXplOiAgMS4zZW07XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG4uYmxvZy1kYXRlIHtcbiAgY29sb3I6ICM4NDcxNDU7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4uYmxvZy1oYXNodGFncyB7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGNvbG9yOiAjM2RmNjNkO1xufVxuI2Jsb2ctcG9zdC13cmFwcGVyIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZmU1O1xuICBtYXJnaW46IDNlbSBhdXRvIDZlbSBhdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogOWVtO1xuICBwYWRkaW5nLXRvcDogM2VtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jYm90dG9tLWN1cnZlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDBweDtcbn1cblxuI2Jsb2ctcG9zdCB7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbWFyZ2luLXRvcDogM2VtO1xuICBjb2xvcjogIzIyMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XG4gICNibG9nLXBvc3QsIGNvZGV7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICB9XG4gIGlvbi10b29sYmFyIHtcbiAgICBpb24tYnV0dG9ucyB7XG4gICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjdlbTtcbiAgICAgICAgd2lkdGg6IDg1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5pb24tZmFiIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDBjNDAwO1xuICAtLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMTVweDtcbiAgcmlnaHQ6IDUwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNXM7XG4gIGFuaW1hdGlvbjogZmFiLXNsaWRlLWluIDAuNXMgY3ViaWMtYmV6aWVyKDAuMDc1LCAwLjgyLCAwLjE2NSwgMSkgMC41cyBmb3J3YXJkcztcbn1cbkBrZXlmcmFtZXMgZmFiLXNsaWRlLWluIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMDBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgfVxufVxuI25ldy1jb21tZW50LWJyZWFrcG9pbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwMHB4O1xufVxuI2NvbW1lbnRzLWhlYWRlciB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kOiAjM2RmNjNkO1xuICB3aWR0aDogMTgwcHg7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tdG9wOiA1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbi5jb21tZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICMzMjA1MzQsICMxNTAwMTgpO1xuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICBwYWRkaW5nOiAyZW07XG4gIG1hcmdpbjogMmVtIGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC41cztcblxuICBoNSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvdHRvbTogOXB4O1xuICAgIHJpZ2h0OiAxMXB4O1xuICB9XG4gIC5sb2dpbi1tZXNzYWdlIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbiAgLmNvbW1lbnQtcGljIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgfVxuICAuY29tbWVudCB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgbWFyZ2luLXRvcDogMWVtO1xuICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgfVxuICAuY29tbWVudC1hZG1pbiB7XG4gICAgYmFja2dyb3VuZDogI2JjMzc5MDQ3O1xuICB9XG4gIC5jb21tZW50LXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiA2ZW07XG4gICAgcGFkZGluZy10b3A6IDFlbTtcblxuICAgIGlvbi1idXR0b25zIHtcbiAgICAgIC5ncmV5LWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxNzBweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzYwZGVnLCAjMTMwZTBlIC0yJSwgIzAwMDAwMCwgIzEzMGUwZSk7XG4gICAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnJlcGx5LXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgICBtYXJnaW4tdG9wOiAyZW07XG5cbiAgICAuZ3JlZW4tYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgIzNkZjYzZCAtMiUsICMwMDVjNDcsICMzZGY2M2QpO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICAgIC5ncmV5LWJ1dHRvbiB7XG4gICAgICBtYXJnaW4tdG9wOiA1ZW07XG4gICAgICB3aWR0aDogMTUwcHg7XG4gICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbGVmdDogMTBweDtcbiAgICAgIHRvcDogNDBweDtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAuZGVsZXRlLWJ1dHRvbiB7XG4gICAgICB3aWR0aDogNzVweDtcbiAgICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzNjBkZWcsICNEMDE4MDEgLTIlLCAjODEwYjAwLCAjRDAxODAxKTtcbiAgICAgIC0tY29sb3I6IHdoaXRlO1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAuY2xvc2UtcmVwbGllcy1idXR0b24ge1xuICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgLS1iYWNrZ3JvdW5kOiBub25lO1xuICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgICAtLWJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAtLWJvcmRlci13aWR0aDogNHB4O1xuICAgICAgLS1ib3JkZXItY29sb3I6ICNEMDE4MDE7XG4gICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG4gICAgfVxuICB9XG4gIC5jb21tZW50ZWQtd2hlbntcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiAjRDNCOTAwO1xuICAgIGZvbnQtc2l6ZTogMC43ZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDY4cHg7XG4gICAgdG9wOiAtMTRweDtcbiAgfVxuICAuY29tbWVudC1uYW1lLCAuY29tbWVudC1hZG1pbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogLTIwcHg7XG4gICAgbGVmdDogOXB4O1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gIH1cbiAgLmNvbW1lbnQtYWRtaW4ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMWQwNzFmNjY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICB9XG4gIC5jb21tZW50LW5hbWUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMDE2ZmZmNDc7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIHBhZGRpbmc6IDAuMmVtIDAuNWVtO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NzVweCkge1xuICAgIC5jb21tZW50LXBpYyB7XG4gICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgfVxuICAgIC5jb21tZW50IHtcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgIH1cbiAgfVxuICAuY2xvc2UtcmVwbHktYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtNjBweDtcbiAgICByaWdodDogLTRweDtcbiAgICAtLWJhY2tncm91bmQ6IG5vbmVcbiAgfVxuICAucmVwbGllcy1jbG9zZS1idXR0b24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgLS1jb2xvcjogd2hpdGU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMjIyO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIH1cbiAgLnJlcGx5LXRleHRhcmVhIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjN2I3YjdiO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA0ZW07XG4gICAgYW5pbWF0aW9uOiBzbGlkZS11cCAwLjVzIGVhc2UtaW4gZm9yd2FyZHM7XG4gIH1cbiAgLnJlcGx5LWJ1dHRvbi1wb3NpdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTkwcHg7XG4gICAgcmlnaHQ6IC0xOHB4O1xuICB9XG4gIC5yZXBsaWVzIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1hcmdpbjogM2VtIDA7XG5cbiAgICAucmVwbGllcy10aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgcGFkZGluZy1ib3R0b206IDAuNGVtO1xuICAgIH1cbiAgICAucmVwbGllcy11cHBlci10b29sYmFye1xuICAgICAgYmFja2dyb3VuZDogcmdiKDE0NiAxNDYgMTQ2IC8gNDclKTtcbiAgICAgIHBhZGRpbmc6IDEuM2VtIDFlbSAxLjZlbSAxZW07XG4gICAgICBib3gtc2hhZG93OiAxcHggOHB4IDhweCAjMDAwMDAwNjY7XG4gICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogOWVtO1xuICAgIH1cbiAgICAudXBwZXItY2xvc2UtcmVwbHktYnV0dG9uIHtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDM2MGRlZywgI0QwMTgwMSAtMiUsICM4MTBiMDAsICNEMDE4MDEpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBwYWRkaW5nOiAwLjJlbSAwLjJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0U4RTZFNjtcbiAgICBhbmltYXRpb246IHNsaWRlLWluLXJpZ2h0IDAuNXMgZWFzZS1pbiBmb3J3YXJkcztcblxuICAgIC5yZXBseSB7XG4gICAgICBtYXJnaW46IDJlbSAwIDAgMDtcbiAgICAgIHBhZGRpbmc6IDEuNWVtO1xuICAgICAgbWluLWhlaWdodDogMTgwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgIHRyYW5zaXRpb246IDUwMG1zO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZWZlZjQ3O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYm94LXNoYWRvdzogMXB4IDFweCA5cHggIzA4MDgwODtcblxuICAgICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgICAgIC5yZXBseSB7XG4gICAgICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgICBpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLnN1Y2Nlc3MtdG9hc3Qge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogIzAyODMxMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMTAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIC5kYW5nZXItdG9hc3Qge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAyMXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC0tYmFja2dyb3VuZDogI0ZGNDQzQjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZS1pbi1yaWdodCB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIHNsaWRlLXVwIHtcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyBzbGlkZS1vdXQge1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcbiAgICB9XG4gICAgOTklIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwcHgpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbiNtb2JpbGUtY29tbWVudC1pbnB1dCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG4gIGhlaWdodDogNjRweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjM2NmNjNjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzFhMDA0MztcbiAgYm94LXNoYWRvdzogMXB4IC0zcHggMTNweCAjMWIyOTI3NGE7XG59XG5cbi5wb3N0LWJ1dHRvbntcbiAgLS1iYWNrZ3JvdW5kOiAjMDBmZjAwO1xuICBjb2xvcjogIzIyMjtcbn1cblxuLmluZm8tZm9vdGVyLXdyYXBwZXJ7XG4gIGJhY2tncm91bmQ6ICMwMDAwMDBkMTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLXRvcDogMTBlbTtcblxufVxuXG4uaW5mby1mb290ZXJ7XG4gIHBhZGRpbmc6IDgwcHggMjBweDtcbiAgLy8gYmFja2dyb3VuZDogbGlnaHRncmF5O1xufVxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmluZm8tZm9vdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgIC5pbmZvLWZvb3Rlci10ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICBtYXJnaW46IDU1cHggMHB4O1xuICAgIH1cblxuICAgIC5ncmVlbi1idXR0b24ge1xuICAgICAgbWFyZ2luOiAyNXB4IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5pbmZvLWZvb3Rlci10ZXh0IHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luOiAyNXB4IDBweDtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuXG4ucGljdHVyZSB7XG4gIGhlaWdodDogMTAwcHg7IHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbiNyZWFkLW1vcmUtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogIzg0NzE0NTtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW46IDJlbSBhdXRvO1xuICBwYWRkaW5nOiAwLjRlbTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuI3ByZXYsICNuZXh0IHtcbiAgYmFja2dyb3VuZDogI2M0ZmZjNDtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgbWFyZ2luLXRvcDogMmVtO1xuXG4gIGg0IHtcbiAgICBjb2xvcjogIzJCNTBDODtcbiAgfVxuXG4gIHAge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIH1cbn1cbiNwcmV2e1xuICBib3JkZXItbGVmdDogMTdweCBzb2xpZCAjM2RmNjNkO1xuICBwYWRkaW5nLWxlZnQ6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcbn1cbiNuZXh0e1xuICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgIzNkZjYzZDtcbiAgcGFkZGluZy1yaWdodDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAjcHJldiwgI25leHQge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gIH1cbn1cblxuI3ByZXY6aG92ZXIsICNuZXh0OmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC41cztcbiAgLy8gYmFja2dyb3VuZDogIzAwZmYwMDtcblxuICBwIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIGg0IHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cbn1cblxuI3ByZXY6aG92ZXIge1xuICBib3JkZXItcmlnaHQ6IDE3cHggc29saWQgI0Q0QUYzNztcblxuICBwIHtcbiAgICBjb2xvcjogIzAwMDtcbiAgfVxuXG4gIGg0IHtcbiAgICBjb2xvcjogI0JDMzc5MDtcbiAgfVxufVxuXG4jbmV4dDpob3ZlciB7XG4gIGJvcmRlci1sZWZ0OiAxN3B4IHNvbGlkICNENEFGMzc7XG5cbiAgcCB7XG4gICAgY29sb3I6ICMwMDA7XG4gIH1cblxuICBoNCB7XG4gICAgY29sb3I6ICNCQzM3OTA7XG4gIH1cbn1cblxuXG5cbi5lbnRlci1jb21tZW50IHtcbiAgYmFja2dyb3VuZDogIzIxMjUyMTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwZmYwMDtcbiAgbWFyZ2luLXRvcDogMWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmJsb2ctcGFnZS1pbGx1c3RyYXRpb257XG4gIGJhY2tncm91bmQ6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xuICBoZWlnaHQ6IDgwdmg7XG59XG5cbiNmb290ZXIge1xuICBiYWNrZ3JvdW5kOiAjMDAwMDAwZDE7XG4gIGhlaWdodDogNjAwcHg7XG4gIHBhZGRpbmc6IDZlbSAwZW0gM2VtIDBlbTtcblxuICAjZm9vdGVyLWxvZ28ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgfVxuICAjZm9vdGVyLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgLmZvb3Rlci1ociB7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNEM0I5MDA7XG4gICAgb3BhY2l0eTogMC40O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDE1MHB4O1xuICB9XG4gICNzb2NpYWwtbWVkaWEge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgfVxufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_pages_blog_blog-page_blog-page_module_ts-es5.js.map