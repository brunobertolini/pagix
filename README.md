<h1 align="center">
  <img src="/pagix.png" alt="Pagix" />
</h1>

> A generic, framework agnostic, pagination calculator

## Highlights

- :electric_plug: Framework agnostic
- :trophy: Dependency free
- :fire: Higly flexible

### ✨ [Demo](https://codesandbox.io/s/loving-mclaren-4265rwmzlx)

## Install

```
yarn add pagix
```

## Basic Usage

```js
import { pagix } from 'pagix'

const paginate = pagix({ records: 100 })
```

The `pagix` function returns an object with some calculated props:

- **total**: total number of pages
- **current**: current page number, constrained between `1` and `total`
- **start**: an array of page numbers, the first `fixed` page numbers
- **middle**: an array of page numbers, calculated from `current` page
- **end**: an array of page numbers, the last `fixed` page numbers
- **prev**: the previous page number between `start` and `middle`, false if there is no truncated pages between `start` and `middle`
- **next**: the next page number between `middle` and `end`, false if there is no truncated pages between `middle` and `end`
- **from**: initial record in current page
- **to**: last record in current page

![pagination explain](./pagination.png)

## API

**pagix({ records [, limit, current, delta, fixed ] })**: Main method to calculate pagination

| Prop    | Required | Default | Description                                                     |
| ------- | -------- | ------- | --------------------------------------------------------------- |
| records | true     | -       | total of records to paginate                                    |
| limit   | false    | 10      | total of records to show per page                               |
| current | true     | 1       | current page                                                    |
| delta   | true     | 1       | total of pages to show in each side of current page             |
| fixed   | true     | 1       | total of pages to show before prev button and after next button |

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br  />Feel free to check [issues page](https://github.com/brunobertolini/pagix/issues).

## Show your support

Give a ⭐️ if this project helped you!
