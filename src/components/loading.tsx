import { motion } from "motion/react"

export default function Loading(): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="absolute w-full max-lg:mt-8 flex justify-center lg:top-[50%] lg:left-[50%] lg:-translate-x-1/2 lg:-translate-y-1/2"
    >
      <div role="status" className="flex gap-2.5">
        <div className='h-6 w-6 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.3s]'></div>
        <div className='h-6 w-6 bg-[var(--primary)] rounded-full animate-bounce [animation-delay:-0.15s]'></div>
        <div className='h-6 w-6 bg-[var(--primary)] rounded-full animate-bounce'></div>
      </div>
    </motion.div>
  )
}