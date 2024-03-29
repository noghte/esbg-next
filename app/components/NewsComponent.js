export default async function NewsComponent() {
    const attributes = await fetchNewsData(); // Here, await the actual data
    if (!attributes) {
        return <div>Loading failed...</div>;
    }

    // Use attributes in your component
    return <div>Render your news content here</div>;
}