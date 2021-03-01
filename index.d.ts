export function between(num: number, min: number, max: number): number;
export function range(from: number, to: number): number[];

export interface PagixOptions {
	/**
	 * total of records to paginate
	 */
	records: number;
	/**
	 * total of records to show per page
	 * @default 10
	 */
	limit?: number;
	/**
	 * current page
	 * @default 1
	 */
	current?: number;
	/**
	 * total of pages to show in each side of current page
	 * @default 1
	 */
	delta?: number;
	/**
	 * total of pages to show before prev button and after next button
	 * @default 1
	 */
	fixed?: number;
}

interface PagixReturn {
	/**
	 * total number of pages
	 */
	total: number;
	/**
	 * current page number, constrained between `1` and `total`
	 */
	current: number;
	/**
	 * an array of page numbers, the first `fixed` page numbers
	 */
	start: number[];
	/**
	 * an array of page numbers, calculated from `current` page
	 */
	middle: number[];
	/**
	 * an array with pages after next button
	 */
	end: number[];
	/**
	 * the previous page number between `start` and `middle`
	 * false if there is no truncated pages between `start` and `middle`
	 */
	next: number | false;
	/**
	 * the next page number between `middle` and `end`
	 * false if there is no truncated pages between `middle` and `end`
	 */
	prev: number | false;
	/**
	 * initial record in current pagination
	 */
	from: number;
	/**
	 * last record in current pagination
	 */
	to: number;
}

export function pagix(options: PagixOptions): PagixReturn;
