export type Another = {
	bar: number;
};
export interface Foo {
	value: unknown;
	other: Another;
}
export type Wrapped = unknown | number;

export {};
