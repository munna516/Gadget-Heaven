import React, { useState, useEffect } from 'react';

function CountdownTimer({ targetDate }) {

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());


    function calculateTimeLeft() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    }

    useEffect(() => {

        const intervalId = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);


        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div>
            <span className='font-semibold'>Time Left : </span>
            {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
                <span className='text-3xl text-red-400  font-extrabold'>Countdown Over!</span>
            ) : (
                <span className='text-3xl text-red-400  font-extrabold'>
                    {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                </span>
            )}
        </div>
    );
}

export default CountdownTimer;
