const Sort = (props) => {
    
    
    return (
        <div>
            Order by:
            <select onChange={(e) => props.setSort(e.target.value)}>
                <option value="vote">Most popular</option>
                <option value="created_at">Newest</option>
            </select>
        </div>
    )
}

export default Sort;