import { Another, ExternalType } from './types';

export interface Foo {
	value: ExternalType;
	other: Another;
}

export type Wrapped = ExternalType | number;
