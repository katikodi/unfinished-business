export default function BackgroundShape({ color }) {

    return (
        <div id={`${color}-shape`}>
            {shapeData[color]}
        </div>
    );
}

const shapeData = {
    pink: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1517">
            <path d="M1154.5 22.5017C1244.29 11.9383 1386.67 0.335108 1467.5 0.501775L1622 1658L-135 1727.5L-171.5 250C-18.6667 136.667 212.5 176.086 479 154C745.5 131.914 1001.5 40.5017 1154.5 22.5017Z"
                fill="url(#pink-grad)"/>
            <defs>
                <linearGradient id="pink-grad" x1="1435.5" y1="-14.9999" x2="-10.0001" y2="276.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="var(--text)"/>
                    <stop offset="1" stopColor="#FFF"/>
                </linearGradient>
            </defs>
        </svg>
    ),
    green: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1375" fill="#AECA95">
            <path d="M957 33.5556C1255 -41.9445 1446 33.5556 1578.5 33.5556L1608 1588.06L-149 1657.56L-197 96.0572C-44.1667 133.724 4.5 106.055 262.5 128.555C520.5 151.055 640.506 113.741 957 33.5556Z"/>
        </svg>
    ),
    purple: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 1173">
            <path d="M1181 0C1336.5 0 1418.67 16.3334 1499.5 16.5L1467.5 1213.5H-9.5L-28.5 48C50.5 34 141.5 32.3129 475 48C808.5 63.6871 1026.94 1.81877e-05 1181 0Z"
                fill="url(#purple-grad)"/>
            <defs>
                <linearGradient id="purple-grad" x1="1438" y1="15" x2="1433.5" y2="1214" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#251B33"/>
                    <stop offset="1" stopColor="#BD8BFF"/>
                </linearGradient>
            </defs>
        </svg>
    )
}