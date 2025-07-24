import React from 'react'
import { useLocation } from 'react-router-dom'
function TeamDetailsPage (): React.ReactNode
{
    const { state } = useLocation();
    const team = state?.team;
    return (
        <div>
            <div>{team?.teamName}</div>
            <div>{team?.type}</div>
            <div>{team?.sport}</div>
            <div>{team?.logo}</div>
            <div>{team?.created}</div>
            <div>{team?.memberCount}</div>
        </div>
    )
}

export default TeamDetailsPage