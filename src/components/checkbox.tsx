import { motion } from "framer-motion";

type CheckboxProps = {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: React.ReactNode;
  id: string;
};

export function Checkbox({ checked, onChange, label, id }: CheckboxProps) {
  return (
    <label
      htmlFor={id}
      className="flex items-start gap-3 cursor-pointer select-none"
    >
      <div className="relative">
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />

        <motion.div
          whileTap={{ scale: 0.85 }}
          animate={{
            backgroundColor: checked ? "#4718AD" : "#ffffff",
            borderColor: checked ? "#4718AD" : "#d1d5db",
          }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="size-5 rounded-md border flex items-center justify-center"
        >
          {checked && (
            <motion.svg
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              viewBox="0 0 24 24"
              className="h-4 w-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            >
              <polyline points="20 6 9 17 4 12" />
            </motion.svg>
          )}
        </motion.div>
      </div>

      <span className="text-sm text-gray-600 leading-snug">{label}</span>
    </label>
  );
}
