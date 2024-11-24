type StatusProps = {
    status: 'loading' | 'success' | 'error',
}

function Status(props: StatusProps) {
    let message;
    if (props.status === 'loading') {
        message = 'Loading ...'
    } else if (props.status === 'success') {
        message = 'Data fetching successfully... '
    } else if (props.status === 'error') {
        message = 'Error Fetching data... '
    }
    return (
        <>
            <div>{message}</div>

        </>
    )
}

export default Status