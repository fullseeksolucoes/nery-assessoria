export default function Button({ children }: { children: React.ReactNode }) {
    return (
        <button className="rounded-lg bg-primary px-6 py-3 text-white font-medium hover:bg-accent transition">
            {children}
        </button>
    )
}