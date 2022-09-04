export default function OverviewCard({ overviewData }) {
    const { platform, label, number, increase } = overviewData;

    const platformIconUrl = {
        "facebook": "/images/icon-facebook.svg",
        "twitter": "/images/icon-twitter.svg",
        "instagram": "/images/icon-instagram.svg",
        "youtube": "/images/icon-youtube.svg",
    }
    return (
        <div className="overview-card">
            <div className="text-label overview-label">{label}</div>
            <div className="overview-platform"><img src={platformIconUrl[platform]} alt="" /></div>
            <div className="text-lg overview-number">{number}</div>
            <div className="text-bold trend-up overview-trend">
                <div>{increase < 0 ? "▼" : "▲"} {increase}%</div>
            </div>
        </div>
    );
}