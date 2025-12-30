export default function Tag({ children }: { children: React.ReactNode }) {
    return (
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-wider">
         <span className="w-2 h-2 rounded-full bg-accent mr-2 animate-pulse"></span>
            <p className="text-accent">{children}</p>
        </div>
    )
}