import Image from "next/image";

export default function OurStory() {
    return (
        <section>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <Image
                        alt="Nossa História"
                        src="/banner-our-story.webp"
                        width={500}
                        height={500}
                    />
                    <div>
                        <h2>Nossa Jornada</h2>
                    </div>
                </div>
            </div>
        </section>
    )
}