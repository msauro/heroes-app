import { HeroList } from "../hero/HeroList"

export const DcScreen = () => {
    const dc = 'DC Comics';

    return (
        <div>
            <h1>DC Screen</h1>
            <HeroList publisher={dc} />

        </div>
    )
}
