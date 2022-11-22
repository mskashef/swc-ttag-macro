export default function Button(props) {
    const { children, onClick } = props

    return (
        <button
            onClick={onClick || (() => {})}
            className="button"
            style={{
                border: '1px solid black',
                padding: '10px 15px',
                borderRadius: 5,
                marginTop: 10,
                fontSize: 20,
                maxWidth: '250px',
                margin: '0 auto'
            }}
        >
            {children}
        </button>
    )

}