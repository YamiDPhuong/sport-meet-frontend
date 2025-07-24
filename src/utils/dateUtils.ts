/**
 * Format a date string to a human-readable format (e.g., Jan 10, 2025)
 * @param dateString - ISO date string
 * @returns Formatted date string (e.g., 'Jan 10, 2025')
 */
export const formatDate = ( dateString: string ): string =>
{
    return new Date( dateString ).toLocaleDateString( 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    } );
};

/**
 * Format a date string to a time string (e.g., 10:30 AM)
 * @param dateString - ISO date string
 * @returns Formatted time string (e.g., '10:30 AM')
 */
export const formatTime = ( dateString: string ): string =>
{
    return new Date( dateString ).toLocaleTimeString( 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    } );
};

/**
 * Format a date string to a full date and time string (e.g., Jan 10, 2025, 10:30 AM)
 * @param dateString - ISO date string
 * @returns Formatted date and time string
 */
export const formatDateTime = ( dateString: string ): string =>
{
    return `${ formatDate( dateString ) }, ${ formatTime( dateString ) }`;
};
