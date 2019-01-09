export const between = (num, min, max) => Math.max(min, Math.min(num, max))

export const range = (start, end) =>
	Array.from(new Array(end - start), (val, index) => start + index)

export const paginatex = (
	records,
	limit = 10,
	current = 1,
	delta = 1,
	fixed = 1
) => {
	const total = Math.ceil(Math.max(1, records / limit))
	const page = between(current, 1, total)

	const min = 1 + fixed
	const max = total - fixed

	const maxLeft = Math.min(max - delta * 2 - 1, max)
	const minRight = Math.min(min + delta * 2 + 1, max)

	const left = between(page - delta, min, maxLeft)
	const right = between(page + delta, minRight, max)

	const missLeft = left - fixed
	const missRight = total - fixed - right + 1

	const prev = missLeft > 2
	const next = missRight > 2

	const start = range(1, between(fixed + 1, 1, total + 1))
	const middle = range(
		missLeft === 2 ? left - 1 : left,
		missRight === 2 ? right + 2 : right + 1
	)
	const end = range(between(total - fixed + 1, 2, total + 1), total + 1)

	const from = between(limit * page - limit + 1, 1, records)
	const to = between(limit * page, 1, records)

	return { total, current: page, start, end, prev, next, middle, from, to }
}

export default paginatex
