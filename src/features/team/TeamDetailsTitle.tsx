interface TeamDetailsTitleProps
{
    teamName: string;
    teamType: string;
    teamMembers: string;
    teamCreated: string;
    teamLogo: string;
}
function TeamDetailsTitle ( { teamName, teamType, teamMembers, teamCreated, teamLogo }: TeamDetailsTitleProps )
{
    return (
        <div>
            <h1 className="text-2xl font-extralight">{teamName}</h1>
            <p>{teamType}</p>
            <p>{teamMembers}</p>
            <p>{teamCreated}</p>
            <p>{teamLogo}</p>
        </div>
    )
}

export default TeamDetailsTitle