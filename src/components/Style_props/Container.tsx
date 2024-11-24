type StyleProp = {
    style: React.CSSProperties
}
function Container({ style }: StyleProp) {
    return (
        <div
            style={style}

        >Container</div>
    )
}
export default Container