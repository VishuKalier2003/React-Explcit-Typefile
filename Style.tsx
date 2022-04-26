type StyleProps = {
    styles: React.CSSProperties
}

export const Style = (props: StyleProps) => {
    return (
        <div id="division" style={props.styles}>The Content Goes Here</div>
    )
}