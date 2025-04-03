import { motion } from "motion/react"

export default function PageTransition({ children }: React.PropsWithChildren): React.JSX.Element {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}