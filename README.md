# time-math-locale [![npm version](https://badge.fury.io/js/time-math-locale.svg)](https://badge.fury.io/js/time-math-locale)

A versatile library for calculating and formatting time based on locale. Designed for flexibility and customization, it meets basic localization needs.

## Features

- Calculates and formats time from a given date.
- Supports multiple locales for localized time expressions.

## Installation

### npm

```bash
npm install time-math-locale --save
```

### Platform compatibility

This project is compatible with **iOS**,  **Android**, **Windows** and **macOS**.  
This project supports both **the old** (paper) **and the new architecture** (fabric).  
This project is compatible with [expo](https://docs.expo.dev/).

### Getting Started

If any step seems unclear, please create a pull request.

### Usage

### Time Calculation

Import the `calculateTime` function for calculating time to now:

```tsx
import { calculateTime } from 'time-math-locale';

const futureDate = new Date(Date.now() + 3600 * 1000); // 1 hour from now
const result = calculateTime(futureDate, 'en', 'In ', ' from now');
console.log(result); // Output: "In 1 hour from now"
```

### API

```tsx
calculateTime(dateInput: string | Date, locale?: string, prefix?: string, suffix?: string): string
```

## Parameters

| Parameter   | Type                | Description                                         |
| ----------- | ------------------- | --------------------------------------------------- |
| `dateInput` | `string`            | Date                                                |
| `locale`    | `string (optional)` | The locale to use for formatting. Defaults to 'en'. |
| `prefix`    | `string (optional)` | Optional prefix for the output string.              |
| `suffix`    | `string (optional)` | Optional suffix for the output string.              |

### Contributing

Feel free to contribute by adding more languages or improving the time-based logic. Follow these steps:

- Fork the repository.
- Create your feature branch (git checkout -b feature/my-feature).
- Commit your changes (git commit -am 'Add some feature').
- Push to the branch (git push origin feature/my-feature).
- Create a new Pull Request.

### License

MIT

### Translations

This readme is available in:

- [English](./README.md)

## 📝 Author

👤 **Johny Lie**

- Github: [@johnylie](https://github.com/johnylie)

## 🌱 Show your support

Please ⭐️ this repository if this project helped you!

[![](https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86)](https://github.com/sponsors/johnylie)
