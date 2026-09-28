

export default function GridItems() {

    const names = ["Figma", "React", "HTML", "CSS", "After Effects", "Photoshop", "Github", "Javascript"];
    const iconObjects = [];

    names.forEach((nameValue, index) => {
        const object = {
            name: nameValue,
            id: index
        }
        iconObjects.push(object);
    })

    return (
        <div id="grid">
            {iconObjects.map((objects) => (
                <div key={objects.id} className="grid-item" id={`grid-item-${objects.id}`}>
                    <p>{objects.name}</p>
                </div>
            ))}
        </div>
    );
}