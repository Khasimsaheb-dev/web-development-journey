function Time() {
    let time = new Date();

    let day=time.getDay();
    let month=time.getMonth();
    let year = time.getFullYear();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();

    return (
        <div>
            <h3>
                The date and time in India:{day}/{month}/{year} | {hrs}:{mins}:{secs}
            </h3>
        </div>
    );
}

export default Time;