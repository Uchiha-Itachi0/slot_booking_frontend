'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AuthStepOne from '@/components/auth/AuthStepOne';
import AuthStepTwo from "@/components/auth/AuthStepTwo";

const AuthWrapper = () => {
    const [step, setStep] = React.useState(1);
    const [email, setEmail] = React.useState<string>('');
    const [emailError, setEmailError] = React.useState<string>('');
    const [direction, setDirection] = React.useState(1);

    const handleEmailSubmit = (email: string) => {
        setEmail(email);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setEmailError('Please provide a valid email address.');
        } else {
            setEmailError('');
            setDirection(1);
            setStep(2);
        }
    };

    const handleBack = () => {
        setDirection(-1);
        setStep(1);
    };

    const variants = {
        initial: (direction: number) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0,
        }),
        animate: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3 },
        },
        exit: (direction: number) => ({
            x: direction > 0 ? '-100%' : '100%',
            opacity: 0,
            transition: { duration: 0.3 },
        }),
    };

    return (
        <div className="min-h-screen w-full flex bg-primaryLight relative overflow-hidden">
            <div className="w-1/2 relative">
                <AnimatePresence custom={direction} mode="wait">
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            custom={direction}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute w-full h-full flex items-center justify-center"
                        >
                            <AuthStepOne
                                email={email}
                                emailError={emailError}
                                onEmailSubmit={handleEmailSubmit}
                            />
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="step2"
                            custom={direction}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="absolute w-full h-full flex items-center justify-center"
                        >
                            <AuthStepTwo
                                email={email}
                                onOTPSubmit={(otp) => {
                                    console.log("OTP submitted:", otp);
                                }}
                                onResendOTP={() => {
                                    console.log("Resend OTP triggered");
                                }}
                                onBack={() => handleBack()}
                            />
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
            <div className="relative z-20 w-1/2 bg-secondaryLight"></div>
        </div>
    );
};

export default AuthWrapper;
