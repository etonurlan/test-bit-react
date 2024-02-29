import { PostListbox } from "./Listboxes/PostListbox"
import { SexListbox } from "./Listboxes/SexListbox"
import { TechnologyListbox } from "./Listboxes/TechnologyListbox"

export const FiltersLists = () => {
    return (
        <>
            <PostListbox />
            <SexListbox />
            <TechnologyListbox />
        </>
    )
}