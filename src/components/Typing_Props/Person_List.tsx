type Person_Props = {
    names: {
        first: string, last: string
    }[]
}

function Person_List({ names }: Person_Props) {
    return (
        <div>
            <h1>{names[0].first}</h1>
            <h1>{names[1].last}</h1>
            <h1>{names[2].first}</h1>
        </div>
    )
}

export default Person_List