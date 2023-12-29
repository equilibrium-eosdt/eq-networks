/**
 * Combines members of an intersection into a readable type.
 *
 * @link https://twitter.com/mattpocockuk/status/1622730173446557697?s=20&t=NdpAcmEFXY01xkqU3KO0Mg
 * @example
 * type Result = Prettify<{ a: string } | { b: string } | { c: number, d: bigint }>
 * //   ^? type Result = { a: string; b: string; c: number; d: bigint }
 */
export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

/**
 * Creates range between two positive numbers using [tail recursion](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-5.html#tail-recursion-elimination-on-conditional-types).
 *
 * @param Start - Number to start range
 * @param Stop - Number to end range
 * @returns Array with inclusive range from {@link Start} to {@link Stop}
 *
 * @example
 * type Result = Range<1, 3>
 * //   ^? type Result = [1, 2, 3]
 */
// From [Type Challenges](https://github.com/type-challenges/type-challenges/issues/11625)
export type Range<
  Start extends number,
  Stop extends number,
  Result extends number[] = [],
  Padding extends 0[] = [],
  Current extends number = [...Padding, ...Result]["length"] & number,
> = Current extends Stop
  ? Current extends Start
    ? [Current]
    : Result extends []
    ? []
    : [...Result, Current]
  : Current extends Start
  ? Range<Start, Stop, [Current], Padding>
  : Result extends []
  ? Range<Start, Stop, [], [...Padding, 0]>
  : Range<Start, Stop, [...Result, Current], Padding>;
