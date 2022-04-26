import { ChildProps } from './Types'

export const ChildNode = (props: ChildProps) => {
    return (
        <div>{props.children}</div>
    )
}