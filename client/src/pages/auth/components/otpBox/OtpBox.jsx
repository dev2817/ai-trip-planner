import { useState } from "react";
import "./OtpBox.css";

export default function OtpBox({ length, onChange }) {
    const [otp, setOtp] = useState(new Array(length).fill(''));

    const handleChange = (element, index) => {
        const value = element.value;
        if (/^[0-9]$/.test(value) || value === '') {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            onChange(newOtp.join(''));

            if (value && index < length - 1) {
                (element.nextSibling)?.focus();
            }
        }
    };

    const handleBackspace = (element, index) => {
        if (!element.value && index > 0) {
            (element.previousSibling)?.focus();
        }
    };

    return (
        <div className="otp-container">
            {otp.map((value, index) => (
                <input
                    key={index}
                    type="text"
                    maxLength={1}
                    className="otp-input"
                    value={value}
                    onChange={(e) => handleChange(e.target, index)}
                    onKeyDown={(e) => e.key === 'Backspace' && handleBackspace(e.currentTarget, index)}
                />
            ))}
        </div>
    );
}
