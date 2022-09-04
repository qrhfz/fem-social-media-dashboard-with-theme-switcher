export default function FollowerCard({ followerData }) {
    const { platform, username, number, update } = followerData;
    const platformBorderClass = {
        "facebook": "border-top-color-facebook",
        "twitter": "border-top-color-twitter",
        "instagram": "border-top-color-instagram",
        "youtube": "border-top-color-youtube",
    }

    function updateClass() {
        return (update < 0) ? "trend-down" : "trend-up";
    }


    return (
        <div className={`follower-card ${platformBorderClass[platform]}`}>
            <h3>{username}</h3>
            <div>
                <div className='text-2xl' style={{ marginBottom: "1rem" }}>
                    {number}
                </div>
                <div className='text-subtitle'>
                    Followers
                </div>
            </div>
            <div className={`text-bold ${updateClass()}`}>
                {update < 0 ? "▼" : "▲"} {Math.abs(update)} Today
            </div>
        </div>
    )
}