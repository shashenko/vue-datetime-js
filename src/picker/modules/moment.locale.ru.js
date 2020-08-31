//! moment.js locale configuration

export default {
  months: 'Январь_Февраль_Март_Апрель_Май_Июнь_Июль_Август_Сентябрь_Октябрь_Ноябрь_Декабрь'.split(
    '_'
  ),
  monthsShort: 'Янв_Фев_Мар_Апр_Май_Июнь_Июль_Авг_Сен_Окт_Ноя_Дек'.split('_'),
  weekdays: 'Воскресенье_Понедельник_Вторник_Среда_Четверг_Пятница_Суббота'.split(
    '_'
  ),
  weekdaysShort: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  weekdaysMin: 'Вс_Пн_Вт_Ср_Чт_Пт_Сб'.split('_'),
  longDateFormat: {
    LT: 'HH:mm',
    LTS: 'HH:mm:ss',
    L: 'DD/MM/YYYY',
    LL: 'D MMMM YYYY',
    LLL: 'D MMMM YYYY HH:mm',
    LLLL: 'dddd, D MMMM YYYY HH:mm'
  },
  calendar: {
    sameDay: '[Сегодня] LT',
    nextDay: '[Завтра] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Вчера] LT',
    lastWeek: '[Прошлая] dddd [в] LT',
    sameElse: 'L'
  },
  relativeTime: {
    future: 'в %s',
    past: '%s назад',
    s: 'несколько секунд',
    ss: '%d секунд',
    m: 'минута',
    mm: '%d минута',
    h: 'час',
    hh: '%d часов',
    d: 'день',
    dd: '%d дней',
    M: 'месяц',
    MM: '%d месяцев',
    y: 'год',
    yy: '%d лет'
  },
  dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
  ordinal: function(number) {
    var b = number % 10,
      output =
        ~~((number % 100) / 10) === 1
          ? 'th'
          : b === 1
          ? 'st'
          : b === 2
            ? 'nd'
            : b === 3
              ? 'rd'
              : 'th'
    return number + output
  },
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4 // The week that contains Jan 4th is the first week of the year.
  }
}
