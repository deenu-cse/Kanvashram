import RetroDvdTv from "@/components/ui/retro-dvd-tv";

export function AshramStory() {
    return <RetroDvdTv
        width="40rem"
        height="30rem"
        logoText="DVD"
        speed={10} // lower = slower, higher = faster
        color="#ff00ff" // base color if colorCycle={false}
        colorCycle={true} // set false to keep solid color
    />;
}
