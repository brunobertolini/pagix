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
	 * total pages to show in pagination
	 */
	total: number;
	/**
	 * current page, between max and min total pages
	 */
	current: number;
	/**
	 * an array with pages before prev button
	 */
	start: number[];
	/**
	 * an array with pages between prev and next buttons
	 */
	middle: number[];
	/**
	 * an array with pages after next button
	 */
	end: number[];
	/**
	 * a page to set as current when click on next button, or false
	 */
	next: number | false;
	/**
	 * a page to set as current when click on prev button, or false
	 */
	prev: number | false;
	/**
	 * initial record from current pagination
	 */
	from: number;
	/**
	 * last record from current pagination
	 */
	to: number;
}

export function pagix(options: PagixOptions): PagixReturn;
