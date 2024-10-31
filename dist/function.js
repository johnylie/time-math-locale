"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTime = formatTime;
exports.calculateTime = calculateTime;
const date_fns_1 = require("date-fns");
function formatTime(dateInput, locale = 'en', prefix = '', suffix = '') {
    let date;
    if (typeof dateInput === 'string') {
        date = new Date(dateInput);
    }
    else if (dateInput instanceof Date) {
        date = dateInput;
    }
    else {
        throw {
            id: 'fln__calculate-time__invalid-date',
            message: 'Please pass calculateTime() a valid date object or date string',
            _errorData: { dateInput },
        };
    }
    if (isNaN(date.getTime())) {
        throw {
            id: 'fln__calculate-time__invalid-date',
            message: 'Please pass calculateTime() a valid date object or date string',
            _errorData: { date },
        };
    }
    const now = new Date();
    const seconds = (0, date_fns_1.differenceInSeconds)(date, now);
    const minutes = (0, date_fns_1.differenceInMinutes)(date, now);
    const hours = (0, date_fns_1.differenceInHours)(date, now);
    const days = (0, date_fns_1.differenceInDays)(date, now);
    let result;
    if (seconds === 0) {
        result = locale === 'id' ? 'sekarang' : 'now';
    }
    else if (seconds < 0) {
        if (Math.abs(days) > 0) {
            result = `${Math.abs(days)} ${locale === 'id' ? 'hari yang lalu' : 'days ago'}`;
        }
        else if (Math.abs(hours) > 0) {
            result = `${Math.abs(hours)} ${locale === 'id' ? 'jam yang lalu' : 'hours ago'}`;
        }
        else if (Math.abs(minutes) > 0) {
            result = `${Math.abs(minutes)} ${locale === 'id' ? 'menit yang lalu' : 'minutes ago'}`;
        }
        else {
            result = `${Math.abs(seconds)} ${locale === 'id' ? 'detik yang lalu' : 'seconds ago'}`;
        }
    }
    else {
        if (days > 0) {
            result = `${days} ${locale === 'id' ? 'hari dari sekarang' : 'days from now'}`;
        }
        else if (hours > 0) {
            result = `${hours} ${locale === 'id' ? 'jam dari sekarang' : 'hours from now'}`;
        }
        else if (minutes > 0) {
            result = `${minutes} ${locale === 'id' ? 'menit dari sekarang' : 'minutes from now'}`;
        }
        else {
            result = `${seconds} ${locale === 'id' ? 'detik dari sekarang' : 'seconds from now'}`;
        }
    }
    return `${prefix} ${result} ${suffix}`.trim();
}
function calculateTime(dateInput, locale = 'en', prefix = '', suffix = '') {
    let date;
    if (typeof dateInput === 'string') {
        date = new Date(dateInput);
    }
    else if (dateInput instanceof Date) {
        date = dateInput;
    }
    else {
        throw {
            id: 'fln__calculate-time__invalid-date',
            message: 'Please pass calculateTime() a valid date object or date string',
            _errorData: { dateInput },
        };
    }
    if (isNaN(date.getTime())) {
        throw {
            id: 'fln__calculate-time__invalid-date',
            message: 'Please pass calculateTime() a valid date object or date string',
            _errorData: { date },
        };
    }
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
    const diffMilliseconds = date.getTime() - Date.now();
    const diffSeconds = Math.round(diffMilliseconds / 1000);
    const diffMinutes = Math.round(diffSeconds / 60);
    const diffHours = Math.round(diffMinutes / 60);
    const diffDays = Math.round(diffHours / 24);
    let result;
    if (diffDays === 0 && diffHours === 0 && diffMinutes === 0) {
        result = rtf.format(diffSeconds, 'second');
    }
    else if (diffDays === 0 && diffHours === 0) {
        result = rtf.format(diffMinutes, 'minute');
    }
    else if (diffDays === 0) {
        result = rtf.format(diffHours, 'hour');
    }
    else if (diffDays < -365) {
        result = rtf.format(Math.round(diffDays / 365), 'year');
    }
    else if (diffDays < -33) {
        result = rtf.format(Math.round(diffDays / 30), 'month');
    }
    else if (diffDays < -7) {
        result = rtf.format(Math.round(diffDays / 7), 'week');
    }
    else if (diffDays > 365) {
        result = rtf.format(Math.round(diffDays / 365), 'year');
    }
    else if (diffDays > 33) {
        result = rtf.format(Math.round(diffDays / 30), 'month');
    }
    else if (diffDays > 7) {
        result = rtf.format(Math.round(diffDays / 7), 'week');
    }
    else {
        result = rtf.format(diffDays, 'day');
    }
    return `${prefix} ${result} ${suffix}`;
}
