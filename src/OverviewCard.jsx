import { platformIconUrl } from "./data";

export default function OverviewCard({ overviewData }) {
    const { platform, label, number, increase } = overviewData;


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