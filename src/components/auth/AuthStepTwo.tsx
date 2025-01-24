import React from "react";
import BigButton from "@/components/buttons/BigButton";

interface AuthStepTwoProps {
    email: string;
    onOTPSubmit: (otp: string) => void;
    onResendOTP: () => void;
    onBack: () => void;
}

const AuthStepTwo = ({ email,  onOTPSubmit, onResendOTP, onBack }: AuthStepTwoProps) => {
    const [otpInput, setOtpInput] = React.useState<string>("");

    const handleOTPChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOtpInput(event.target.value);
    };

    const handleSubmit = () => {
        onOTPSubmit(otpInput);
    };

    return (
        <div className="flex flex-col gap-4 w-1/2 max-h-max bg-primaryLight border-[2px] rounded-3xl px-4 py-8">
            <h2 className="text-xl font-semibold text-center text-black">
                Enter the OTP
            </h2>
            <span className="text-sm text-gray-500 text-center">
                We've sent a One-Time Password (OTP) to <span className="font-bold">{email}</span>. Please enter it below.
            </span>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otpInput}
                onChange={handleOTPChange}
                maxLength={6}
                className={`p-3 text-[16px] border-[2px] rounded-xl focus:border-blue-500 outline-none bg-white text-black caret-black ${
                    otpInput.length < 6 ? "border-gray-300" : "border-blue-500"
                }`}
            />

            <BigButton type="Primary" onClick={handleSubmit}>
                Verify OTP
            </BigButton>

            <span className="text-sm text-center text-gray-500">
                Didn’t receive the OTP?{" "}
                <button
                    onClick={onResendOTP}
                    className="text-blue-500 underline hover:text-blue-700"
                >
                    Resend OTP
                </button>
            </span>

            <button
                onClick={onBack}
                className="mt-4 text-sm text-blue-500 underline hover:text-blue-700 text-center"
            >
                Go Back
            </button>
        </div>
    );
};

export default AuthStepTwo;
