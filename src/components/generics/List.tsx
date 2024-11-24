type ListProps<T> = {
    items: T[], onClick: (value: T) => void
}
function List<T extends {}>({ items, onClick }: ListProps<T>) {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => {
                return <div key={index} onClick={() => onClick(item)} >
                    {item.id} + {item.sname}

                </div>
            })}
        </div>
    )
}

export default List