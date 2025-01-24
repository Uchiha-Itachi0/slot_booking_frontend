import React from "react";
import BigButton from "@/components/buttons/BigButton";
import GoogleIcon from "../../../public/assets/icons/google.svg";
import GithubIcon from "../../../public/assets/icons/github.svg";
import EmailIcon from "../../../public/assets/icons/email.svg";

interface AuthStepOneProps {
    email: string;
    emailError: string;
    onEmailSubmit: (email: string) => void;
}

const AuthStepOne = ({ email, emailError, onEmailSubmit }: AuthStepOneProps) => {
    const [emailInput, setEmailInput] = React.useState<string>(email);

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(event.target.value);
    };

    const handleSubmit = () => {
        onEmailSubmit(emailInput);
    };

    return (
        <div className="flex flex-col gap-4 w-1/2 max-h-max bg-primaryLight border-[2px] rounded-3xl px-4 py-8">
            <BigButton type="PrimaryWhite" icon={GoogleIcon}>
                Continue with Google
            </BigButton>

            <BigButton type="PrimaryWhite" icon={GithubIcon}>
                Continue with Github
            </BigButton>

            <span className="text-center uppercase smallText">Or</span>

            {emailError && (
                <div className="text-red-500 text-xs mb-2">{emailError}</div>
            )}
            <input
                type="email"
                placeholder="Enter your personal or work email"
                value={emailInput}
                onChange={handleEmailChange}
                className={`p-3 text-[16px] border-[2px] rounded-xl focus:border-blue-500 outline-none bg-white text-black caret-black ${
                    emailError ? "border-red-500" : "border-gray-300"
                }`}
            />

            <BigButton type="Primary" icon={EmailIcon} onClick={handleSubmit}>
                Continue with Email
            </BigButton>

            <span className="smallText mt-4">
                        By continuing, you agree to Company's{" "}
                <span className="underline">Consumer Terms</span> and{" "}
                <span className="underline">Usage Policy</span>, and acknowledge their{" "}
                <span className="underline">Privacy Policy</span>.
            </span>
        </div>
    );
};

export default AuthStepOne;
