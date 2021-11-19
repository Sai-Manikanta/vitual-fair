function PulseCircle({ positions }) {
    return (
        <svg viewbox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', ...positions }}>
            <circle cx="15" cy="15" fill="none" r="6" stroke="#ec1bc9" stroke-width="3">
                <animate attributeName="r" from="8" to="20" dur="1.5s" begin="0s" repeatCount="indefinite"/>
                <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"/>
            </circle>
            <circle cx="15" cy="15" fill="#ec1bc9" r="6"/>
        </svg>
    )
}

export default PulseCircle
