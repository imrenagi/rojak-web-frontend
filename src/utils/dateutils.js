var moment = require('moment')

exports.timestampToDate = function (timestamp) {
  return moment.unix(timestamp).format('MM/DD/YYYY')
}
