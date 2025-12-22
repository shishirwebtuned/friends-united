import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const Stepper = ({ currentStep, totalSteps }: { currentStep: number, totalSteps: number }) => {
    const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

    return (
        <div className="relative w-full mt-4">
            {/* Progress Bar */}
            <div className="w-full bg-[#ca7b28]/30 h-2 rounded-full">
                <motion.div
                    className="bg-[#ca7b28] h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                />
            </div>

            {/* Stepper */}
            <div className="flex justify-between mt-5 relative">
                {steps.map((step, index) => {
                    const isCompleted = step < currentStep;
                    const isActive = step === currentStep;
                    const isUpcoming = step > currentStep;

                    return (
                        <div key={step} className="flex flex-col items-center w-full relative">
                            {/* Connector line (except last) */}
                            {/* {index !== steps.length - 1 && (
                                <div
                                    className={`absolute top-[12px] left-[50%] w-full h-[2px] -translate-x-[50%] z-0 
                    ${isCompleted ? "bg-[#ca7b28]" : "bg-[#ca7b28]/30"}`}
                                />
                            )} */}

                            {/* Step Circle */}
                            <motion.div
                                className={`relative z-10 flex items-center justify-center w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full border-2 font-semibold text-xs md:text-[13px] lg:text-sm transition-all duration-300
                  ${isCompleted
                                        ? "bg-[#ca7b28] border-[#ca7b28] text-white"
                                        : isActive
                                            ? "border-[#ca7b28] text-[#ca7b28] bg-white shadow-md scale-110"
                                            : "border-[#ca7b28]/40 text-[#ca7b28]/60 bg-white/40"
                                    }`}
                                whileHover={isUpcoming ? { scale: 1.05 } : {}}
                            >
                                {isCompleted ? <FaCheck className="size-3 md:size-4 lg:size-4.5" /> : step}
                            </motion.div>

                            {/* Step Label */}
                            <span
                                className={`mt-2 text-[11px] sm:text-xs md:text-sm  font-medium text-center ${isCompleted
                                    ? "text-[#ca7b28]"
                                    : isActive
                                        ? "text-[#ca7b28] font-semibold"
                                        : "text-[#ca7b28]/70"
                                    }`}
                            >
                                Step {step}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Stepper;
