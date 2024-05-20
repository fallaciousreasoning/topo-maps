import React, { useMemo, useState } from "react";
import Section from "./Section";
import Input from "../components/Input";
import { Mountain } from "../../svelte-src/stores/mountains";
import { usePromise } from "../hooks/usePromise";
import { fetchMountains } from "../layers/mountains";
import MountainCard from "../components/MountainCard";

export default function MountainsSection() {
    const { result: mountains = [] } = usePromise(() => fetchMountains().then(r => Object.values(r)), [])
    console.log(mountains)
    const [query, setQuery] = useState('')
    const filteredMountains = useMemo<Mountain[]>(() => [], [])
    return <Section page="mountains" exact closable title="Mountains">
        <Input type="search" placeholder="Search for a mountain" autoFocus value={query} onChange={e => setQuery(e.target.value)} />
        <div className="my-2">
            (showing {filteredMountains.length} of {mountains.length} mountains)
        </div>
        <div className="flex flex-col gap-2 -mx-4 -mb-4 min-h-0 flex-1">
            {mountains?.map(m => <MountainCard key={m.link} mountain={m} />)}
        </div>
    </Section>
}
