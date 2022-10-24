export function GifItem({ title, url}){
    return(
        <div className="card">
            <img src={url} alt={title + 'gif'} />
            <p>{ title }</p>
        </div>
    )
}