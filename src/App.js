import React from "react"
import Header from "./components/Header"
import data from "./data"
import Entry from "./components/Entry"
import './style.css';

export default function App() {
    const entries = data.map((entry, index) => {
        return (
            <div>
                <Entry 
                key={entry.id}
                {...entry}
                />
                {index < data.length - 1 && <hr />}
            </div>
        )
    })
    return (
        <div>
            <Header />
            {entries}
        </div>
    )
}