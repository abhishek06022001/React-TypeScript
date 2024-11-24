type RandomNumberProps = {
    value: number,
    isZero?: boolean
}
type PositiveNumber = RandomNumberProps & {
    isPositive?: boolean, isNegative?: never,
}
type NegativeNumber = RandomNumberProps & {
    isNegative?: boolean, isPositive?: never

}
type CombinedProps = PositiveNumber | NegativeNumber;
export const RandomNumber = ({
    value, isPositive, isNegative, isZero
}: CombinedProps) => {
    return (
        <div>
            {value}{isPositive && 'positive'} {isNegative && 'negative'}{''}{isZero && 'zero'}
        </div>
    )
}