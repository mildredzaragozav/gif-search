import { GifsList } from "./gifs/components/GifsList";
import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
    const {gifs, previousTerms, handleSearch, handleTermClicked} = useGifs();

    return (
        <>
            <CustomHeader title="Gifs Searcher" description="Find the funniest gif"/>

            <SearchBar buttonTitle="Search" inputPlaceholder="Search gif" onQuery={handleSearch}/>
            
            <PreviousSearches title="Previous searches" searches={previousTerms} onLabelClicked={ handleTermClicked }/>

            <GifsList gifs={ gifs } />
            
        </>
    );
}

